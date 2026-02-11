'use server'
import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import axiosInstance from "../lib/axiosInstance"

/**
 * Create Task
 * @param task 
 * @returns success:boolean,status:number, message:string
 */
export async function createTask(task:any){
    const token = (await cookies()).get("auth_token")?.value || ""
    
    try {
        const response = await axiosInstance.post(`projects/${task.id}/tasks`,task,{
            headers:{
                "Authorization":"Bearer " + token
            },
        })

        return {
            success:true,
            status:response.status,
            message:response.data.data.message
        }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch (error:any){

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
 * Edit Task
 * @param data 
 * @returns success:boolean, status:number, message:string
 */
export async function editTask(task:any){
    const token = (await cookies()).get("auth_token")?.value || ""
    
    try {
        const response = await axiosInstance.put(`projects/${task.projectId}/tasks/${task.taskId}`,task,{
            headers:{
                "Authorization":"Bearer " + token
            }
        })
       
        return {
            success:true,
            status:response?.status,
            message:response?.data?.message
        }

    }catch (error:any){

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
 * Delete Task
 * @param projectID 
 * @param taskID 
 * @returns success:boolean, status:number, message:string
 */
export async function deleteTask(projectID:string,taskID:string){
    const token = (await cookies()).get("auth_token")?.value || ""

     try {
        const response = await axiosInstance.delete(`projects/${projectID}/tasks/${taskID}`,{
            headers:{
                "Authorization":"Bearer " + token
            }
        })
        
        return {
            success:true,
            status:response?.status,
            message:response?.data?.message
        }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch (error:any){

        return {
        success: false,
        status: error?.response?.status || 500, 
        errorMessage: (error?.response?.status >= 500 || !error.response) 
        ? "Une Erreur est survenue" 
        : error?.response?.data?.message || "Erreur inconnue"
        }
    }
}