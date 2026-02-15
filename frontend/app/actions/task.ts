'use server'
import { cookies } from "next/headers"
import axiosInstance from "../lib/axiosInstance"
import { TaskInterface } from "../types/globals"
import { NotAuthReturn } from "../utils/utils"
import { error } from "console"

/**
 * Create Task
 * @param task 
 * @returns success:boolean,status:number, message:string
 */
export async function createTask(task:TaskInterface){
    const token = (await cookies()).get("auth_token")?.value || ""
    
    try {
        const response = await axiosInstance.post(`projects/${task.id}/tasks`,task,{
            headers:{
                "Authorization":"Bearer " + token
            },
        })

        return {
            success:true,
            status:response?.status,
            message:response?.data?.message
        }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch (error:any){
        NotAuthReturn(error?.response?.status)
 
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
 * Edit Task
 * @param data 
 * @returns success:boolean, status:number, message:string
 */
export async function editTask(task:TaskInterface){
    const token = (await cookies()).get("auth_token")?.value || ""
    
    try {
        const response = await axiosInstance.put(`projects/${task.projectId}/tasks/${task.id}`,task,{
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
        NotAuthReturn(error?.response?.status)

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
        NotAuthReturn(error?.response?.status)

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



export async function createTasksWithAI(text:string){
    try {
        const response = await fetch("http://localhost:3000/api/ai", {
        method: "POST",
        body: JSON.stringify({ prompt: text }),
        headers: { "Content-Type": "application/json" },
        });
        
        if (!response.ok) {
            const json = await response.json() 
            if(json.apiKeyError){
                    return {
                    success:false,
                    status:response.status,
                    apiKeyError:json.apiKeyError
                }
            }else{
                return {
                    success:false,
                    status:response.status,
                }
            }
            
        }

        return {
            success:true,
            data: await response.json(),
        }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        if (error?.apiKeyError) {
             return {
                success:false,
                status:error?.status,
                message:error.apiKeyError
        }
        }
        NotAuthReturn(error?.response?.status)

         return {
            success:false,
            status:error?.status
        }
    }
   
}