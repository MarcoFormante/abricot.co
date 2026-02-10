'use server'

import { cookies } from "next/headers"
import httpClient from "../lib/fetch"

export async function sendMessage(comment,projectId,taskId){
    const token = (await cookies()).get("auth_token")?.value || ""

    const response = await httpClient.post(`projects/${projectId}/tasks/${taskId}/comments`,{content:comment},{
        auth:{
            "Authorization":"Bearer " + token
        }     
    })

    if (response.data.success) {
        return {
            success:true,
            comment:response.data.data.comment
        }
    }
}



export async function deleteTaskComment(commentId,projectId,taskId){
    const token = (await cookies()).get("auth_token")?.value || ""

    const response = await httpClient.delete(`projects/${projectId}/tasks/${taskId}/comments/${commentId}`,{
        auth:{
            "Authorization":"Bearer " + token
        }     
    })

    console.log(response.data);
    
    if (response.data.success) {
        return {
            success:true,
            comment:response.data
        }
    }
}





export async function updateTaskComment(commentId,projectId,taskId,comment){
    const token = (await cookies()).get("auth_token")?.value || ""

    const response = await httpClient.put(`projects/${projectId}/tasks/${taskId}/comments/${commentId}`,{content:comment},{
        auth:{
            "Authorization":"Bearer " + token
        }     
    })

    console.log(response.data);
    
    if (response.data.success) {
        return {
            success:true,
            comment:response.data
        }
    }
}