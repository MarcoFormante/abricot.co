'use server'

import { cookies } from "next/headers"
import axiosInstance from "../lib/axiosInstance"

/**
 * Get Users
 * @returns users:array
 */
export async function getUsers(){
     const token = (await cookies()).get("auth_token")?.value || ""

     try {
        const response = await axiosInstance.get("users/search?query=''",{
            headers:{
                "Authorization":"Bearer " + token
            }
        })
        
        return response.data.data.users

     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     } catch (error:any){

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