'use server'

import { cookies } from "next/headers"
import axiosInstance from "../lib/axiosInstance"

export async function getProjects(){
    const token = (await cookies()).get("auth_token")?.value || ""
  try {
        const response = await axiosInstance.get(`/projects/`,{
            headers:{
                "Authorization":"Bearer " + token
            }     
        })
        const projectData = await response.data

        return {
            data:projectData.data.projects,
            status:response.status,
        }
    } catch (error) {

        return {
            status:500,
            message:"Une Erreur est survenue"
        }
    }}



export  async function getProjectByID(id:string){
    const token = (await cookies()).get("auth_token")?.value || ""
    
    try {
        const response = await axiosInstance.get(`/projects/${id}`,{
            headers:{
                "Authorization":"Bearer " + token
            }     
        })
        const projectData = await response.data

        const responseTasks = await axiosInstance.get(`/projects/${id}/tasks`,{
            headers:{
                "Authorization":"Bearer " + token
            }     
        })

        const dataTasks = await responseTasks.data
        
        
        return {
            data:projectData.data.project,
            status:response.status,
            tasks:dataTasks.data.tasks
        }
    } catch (error) {

        return {
            status:500,
            message:"Une Erreur est survenue"
        }
    }
   
}



