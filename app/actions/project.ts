'use server'

import { cookies } from "next/headers"
import axiosInstance from "../lib/axiosInstance"
import { ContributorInterface } from "../types/globals"
import { NotAuthReturn } from "../utils/utils"

/**
 * Get all assigned or user projects
 * @returns success:boolean, message:string, projects:array
 */
export async function getProjects(){
    const token = (await cookies()).get("auth_token")?.value || ""
    
    try {
        const response = await axiosInstance.get(`projects/`,{
            headers:{
                "Authorization":"Bearer " + token
            }     
        })
        const projectData = await response.data
        
        return {
            success:true,
            message:projectData.message,
            projects:projectData.data.projects
        }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any){
        // console.log(error);
        
        // NotAuthReturn(error?.response?.status)
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
 * Get Project by ID
 * @param id string
 * @returns data:object, success:boolean,tasks:array
 */
export async function getProjectByID(id:string){
    const token = (await cookies()).get("auth_token")?.value || ""
    
    try {
        const response = await axiosInstance.get(`projects/${id}`,{
            headers:{
                "Authorization":"Bearer " + token
            }     
        })
        
        const projectData = response?.data
        
        const responseTasks = await axiosInstance.get(`projects/${id}/tasks`,{
            headers:{
                "Authorization":"Bearer " + token
            }     
        })

        return {
            data:projectData?.data?.project,
            success:true,
            tasks:responseTasks?.data?.data?.tasks
        }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch (error:any){
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
 * Create Project
 * @param formdata name:string, description:string, 
 * @param contributors array
 * @returns success:boolean, status:number, projectId:string
 */
export async function newProject(formdata:FormData,contributors:Array<string>){
    const token = (await cookies()).get("auth_token")?.value || ""
    const name = formdata.get("name")
    const description = formdata.get("description")
    
    try {
        const response = await axiosInstance.post("projects",{name,description,contributors},{
            headers:{
                "Authorization": "Bearer " + token
            }
        })
        
        return {
            success:true,
            status:response.status,
            projectId: response.data.data.project.id
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
 * Update Project
 * @param formdata name:string, description:string
 * @returns success:boolean,status:number, message:string
 */
export async function updateProject(formdata:FormData){
    const token = (await cookies()).get("auth_token")?.value || ""

    const name = formdata.get("name")
    const description = formdata.get("description")
    const id = formdata.get("projectId")

    try {
        const response = await axiosInstance.put(`projects/${id}`,{name,description},{
            headers:{
                "Authorization": "Bearer " + token
            }
        })
        
        return {
            success:true,
            status:response.status,
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
 * Add new Contributor in a Project
 * @param contributor string  Contributor's email
 * @param projectId string
 * @returns success:boolean,status:number, message:string
 */
export async function addContributorToProject(contributor:string,projectId:string){
     const token = (await cookies()).get("auth_token")?.value || ""

     try {
        const response = await axiosInstance.post(`projects/${projectId}/contributors`,{email:contributor},{
            headers:{
                "Authorization": "Bearer " + token
            }
        })

        return {
            success:true,
            status:response.status,
            message:response?.data?.data?.message
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
 * Remove Contributor
 * @param contributor string  Contributor's ID
 * @param projectId string 
 * @returns 
 */
export async function removeContributor(contributor:ContributorInterface,projectId:string){
     
     const token = (await cookies()).get("auth_token")?.value || ""
    
     try {
        const response = await axiosInstance.delete(`projects/${projectId}/contributors/${contributor.id}`,{
            headers:{
                "Authorization": "Bearer " + token
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




