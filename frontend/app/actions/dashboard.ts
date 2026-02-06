'use server'

import { cookies } from "next/headers"
import axiosInstance from "../lib/axiosInstance"

export default async function getDashboardTasks(){
    const token = (await cookies()).get("auth_token")?.value || ""
    
    try {
        const response = await axiosInstance("dashboard/assigned-tasks",{
            headers:{
                "Authorization":"Bearer " + token
            }     
        })
        const data = await response.data

        return {
            data,
            status:response.status
        }
    } catch (error) {

        return {
            status:500,
            message:"Une Erreur est survenue"
        }
    }
   
}