'use server'

import { cookies } from "next/headers"
import axiosInstance from "../lib/axiosInstance"

/**
 * Get Assigned Tasks for Dashboard page
 * @returns tasks:array, status:number, success:boolean
 */
export default async function getDashboardTasks(){
    const token = (await cookies()).get("auth_token")?.value || ""
    
    try {
        const response = await axiosInstance.get("dashboard/assigned-tasks",{
            headers:{
                "Authorization":"Bearer " + token
            }     
        })
        const tasks = response.data.data.tasks
        
        return {
            tasks,
            status:response.status,
            success:true
        }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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