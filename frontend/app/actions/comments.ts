'use server'

import { cookies } from "next/headers"
import axiosInstance from "../lib/axiosInstance"

/**
 * Send Task Comment
 * @param comment  string
 * @param projectId  string
 * @param taskId  string
 * @returns success:boolean,comment: object
 */
export async function sendMessage(comment:string,projectId:string,taskId:string){
    const token = (await cookies()).get("auth_token")?.value || ""
    
    try {
         const response = await axiosInstance.post(`projects/${projectId}/tasks/${taskId}/comments`,{content:comment},{
            headers:{
                "Authorization":"Bearer " + token
            }     
        })

        return {
            success:true,
            status:response.status,
            comment:response.data.data.comment
        }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
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


/**
 * Delete Comment
 * @param commentId string
 * @param projectId string
 * @param taskId string
 * @returns success:boolean,status:number
 */
export async function deleteTaskComment(commentId:string,projectId:string,taskId:string){
    const token = (await cookies()).get("auth_token")?.value || ""

    try {
         const response = await axiosInstance.delete(`projects/${projectId}/tasks/${taskId}/comments/${commentId}`,{
            headers:{
                "Authorization":"Bearer " + token
            }     
        })

        return {
            success:true,
            status:response.status,
        }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
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




/**
 * Update Comment
 * @param commentId string
 * @param projectId string
 * @param taskId string
 * @param comment string
 * @returns success:boolean, status:number
 */
export async function updateTaskComment(commentId:string,projectId:string,taskId:string,comment:string){
    const token = (await cookies()).get("auth_token")?.value || ""

    try {
        const response = await axiosInstance.put(`projects/${projectId}/tasks/${taskId}/comments/${commentId}`,{content:comment},{
            headers:{
                "Authorization":"Bearer " + token
            }     
        })

        return {
            success:true,
            status:response.status,
            message:response.data.data.message
        }


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {

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