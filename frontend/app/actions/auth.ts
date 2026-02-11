/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import { cookies} from "next/headers";
import axiosInstance from "../lib/axiosInstance";


/**
 * Login
 * @param formdata (email & password)
 * @returns success,status,message
 */
export async function login(formdata:FormData){
    const email = formdata.get("email")
    const password = formdata.get("password")

    if (!email || !password) {
        return {
            success:false,
            status:400,
            errorMessage:"Email et mot de passe sont requis"
        }
    }

    try {
        const response = await axiosInstance.post("auth/login",{email,password})
        const loginResponse = response.data
        
        if (loginResponse?.data?.errors) {
            return {
                success:false,
                status:400,
                errorMessage:loginResponse.data.errors
            }
        }
        
        if (loginResponse?.success) { 
            const cookieStore = await cookies();
            cookieStore.set("auth_token",loginResponse?.data?.token,{
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 2,  // 2 jours
                path:"/",
            })

            cookieStore.set("user_info",JSON.stringify(loginResponse?.data.user),{
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 2,  // 2 jours
                path:"/",
            })

            return {
                success:true,
                status:200,
                message:loginResponse?.message
            }
        }else{
            return {
                success:false,
                status:loginResponse.status,
                errorMessage:loginResponse?.message
            }
        }

    } catch (error:any) {
        
        return {
            success: false,
            status: error?.response?.status || 500, 
            errorMessage: (error?.response?.status >= 500 || !error.response) 
            ? "Une Erreur est survenue" 
            : error?.response?.data?.message || "Erreur inconnue"
            }
    }
}


/**
 * Registers a new user and manages authentication sessions.
 * @param formdata (email,password)
 * @return 
 */
export async function register(formdata:FormData){
    const email = formdata.get("email")
    const password = formdata.get("password")

    if (!email || !password) {
        return {
            success:false,
            status:400,
            errorMessage:"Email et mot de passe sont requis",
        }
    }

    const name = "USER " + email.toString().split("@")[0].replaceAll(".","")

    try {
       const registerResponse = await axiosInstance.post("auth/register",{email,password,name})
        
         const cookieStore = await cookies();
            cookieStore.set("auth_token",registerResponse?.data.data?.token,{
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 2,  // 2 jours
                path:"/",
            })

            cookieStore.set("user_info",JSON.stringify(registerResponse?.data.data.user),{
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 2,  // 2 jours
                path:"/",
            })

        return {
            success:true,
            status:200,
            message:registerResponse.data.message
        }

    } catch (error:any) {

        return {
            success: false,
            status: error?.response?.status || 500, 
            errorMessage: (error?.response?.status >= 500 || !error.response) 
            ? "Une Erreur est survenue" 
            : error?.response?.data?.message || "Erreur inconnue",
            errors:error?.response?.data?.errors ?? null
        }
    }

}

/**
 * Get user data
 * @returns data:object, success: boolean, status:number
 */
export async function getUserProfile(){
    const token = (await cookies()).get("auth_token")?.value || ""
    
    try {
        const response = await axiosInstance.get("auth/profile",{
            headers:{
                "Authorization":"Bearer " + token
            }
        })
    
        return {
            user:response.data.data.user,
            success:true,
            status:response?.status
        }

    } catch (error:any) {

        return {
            success: false,
            status: error?.response?.status || 500, 
            errorMessage: (error?.response?.status >= 500 || !error.response) 
            ? "Une Erreur est survenue" 
            : error?.response?.data?.message || "Erreur inconnue",
            errors:error?.response?.data?.errors ?? null
        }
    }
}

/**
 * 
 * @param data 
 * @returns success:boolean, status:number, message:string
 */
export async function updateUserProfile(data:{name?:string,surname?:string,email?:string,currentPassword?:string,newPassword?:string}){
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value || ""
    
    try {

        if (data.name || data.surname || data.email) {
             const updateProfileResponse = await axiosInstance.put("auth/profile",data,{
                headers:{
                    "Authorization":"Bearer " + token
                }
            })
             
            const cookieStore = await cookies();

            cookieStore.set("auth_token",updateProfileResponse?.data.data?.token,{
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 2,  
                path:"/",
            })

            cookieStore.set("user_info",JSON.stringify(updateProfileResponse?.data.data.user),{
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 2,  
                path:"/",
            })
        }else{
            return {
                success:false,
                status:400,
                errors:["Le nom est obligatoire.", "Le prénom est obligatoire.", "L'email est obligatoire."]
            }
        }
       

        if (data.newPassword && data.currentPassword) {
           await axiosInstance.put("auth/password",data,{
                headers:{
                    "Authorization":"Bearer " + token
                }
            })
        } 

          return {
                success:true,
                status:200,
                message:"Profile mis à jour"
            }
    }catch (error:any) {
            
        return {
            success: false,
            status: error?.response?.status || 500, 
            errorMessage: (error?.response?.status >= 500 || !error.response) 
            ? "Une Erreur est survenue" 
            : error?.response?.data?.message || "Erreur inconnue",
            errors:error?.response?.data?.data?.errors ?? null
        }
    }
}


    