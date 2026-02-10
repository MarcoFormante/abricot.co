'use server'

import { cookies } from "next/headers"
import axiosInstance from "../lib/axiosInstance"

export async function getUsers(){
     const token = (await cookies()).get("auth_token")?.value || ""

     try {
        const response = await axiosInstance.get("users/search?query='  '",{
            headers:{
                "Authorization":"Bearer " + token
            }
        })

        return response.data.data.users
     } catch (error:any) {
            return error.response.data
     }
}