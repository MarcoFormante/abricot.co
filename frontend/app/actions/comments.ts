'use server'

import { cookies } from "next/headers"
import axiosInstance from "../lib/axiosInstance"

/**
 * Send Task Comment
 * @param comment 
 * @param projectId 
 * @param taskId  
 * @returns success:boolean,comment: object
 */
export async function sendMessage(comment,projectId,taskId){
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
 * @param commentId 
 * @param projectId 
 * @param taskId 
 * @returns success:boolean,status:number
 */
export async function deleteTaskComment(commentId,projectId,taskId){
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
 * @param commentId 
 * @param projectId 
 * @param taskId 
 * @param comment 
 * @returns success:boolean, status:number
 */
export async function updateTaskComment(commentId,projectId,taskId,comment){
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