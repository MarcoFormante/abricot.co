/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import { cookies } from "next/headers";
import axiosInstance from '../lib/axiosInstance';

export async function login(formdata:FormData){
    const email = formdata.get("email")
    const password = formdata.get("password")

    if (!email || !password) {
        return {
            success:false,
            status:400,
            message:"Email et mot de passe sont requis"
        }
    }

    try {
        const response = await axiosInstance.post("auth/login",{email,password})
        const loginResponse = await response.data
        
        if (loginResponse?.data?.errors) {
            return {
                success:false,
                status:400,
                message:loginResponse.data.errors
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
                message:loginResponse?.message
            }
        }

    } catch (error:any) {
        
        if(error?.response?.status === 401){
            return {
                success: false,
                status: 401,
                message:error?.response?.data?.message
            }
        }

        return {
            success: false,
            status: 500,
            message:"Une erreur est survenue"
        }
    }
}



export async function register(formdata:FormData){
    const email = formdata.get("email")
    const password = formdata.get("password")

    
    

    if (!email || !password) {
        return {
            success:false,
            status:400,
            message:"Email et mot de passe sont requis"
        }
    }

    const name = "USER " + email.toString().split("@")[0]

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
            success:true
        }

    } catch (error:any) {
        console.log(error.response.data);
        
        return {
            success:false
        }
    }

}


export async function getUserProfile(){
    const token = (await cookies()).get("auth_token")?.value || ""
    
    try {
        const response = await axiosInstance.get("auth/profile",{
            headers:{
                "Authorization":"Bearer " + token
            }
        })

        return await response.data

    } catch (error) {
        return {

        }
    }
}


export async function updateUserProfile(data:any){
    const token = (await cookies()).get("auth_token")?.value || ""
    
    try {
        await axiosInstance.put("auth/profile",data,{
            headers:{
                "Authorization":"Bearer " + token
            }
        })

        if (data.newPassword) {
            await axiosInstance.put("auth/password",data,{
                headers:{
                    "Authorization":"Bearer " + token
                }
            })
        }
        return {
            success:true
        }

    } catch (error:any) {
        
        return {
            success:false
        }
    }
}


    