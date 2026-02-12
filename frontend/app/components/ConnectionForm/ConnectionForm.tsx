'use client'

import { login, register } from "@/app/actions/auth";
import { Form } from "./Form/Form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAlert } from "@/app/context/AlertContext";
import { Submit } from "../Submit/Submit";

export function ConnectionForm({isRegisterPage}:{isRegisterPage:boolean}){
    const [formErrors,setFormErrors] = useState<string[] | string>("")
    const router = useRouter()
    const setAlert = useAlert()

    /**
     * Handle Login and Register action
     * @param e Form Event
     * @returns 
     */
    const submitForm = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        
        if (!formData.get("email") || !formData.get("password")) {
            setFormErrors("Email et mot de passe sont requis")
            return
        }
        
        if (!isRegisterPage) {  
            const response = await login(formData)
            if (!response?.success) {
                setFormErrors(response?.errorMessage || "Une erreur est survenue")
            }else{
                setAlert({type:"success",message:response?.message})
                router.push("/dashboard")
            }
        }else{
           const response = await register(formData)
            if (!response?.success) {
                
                
                setFormErrors(response?.errorMessage || "Une erreur est survenue")
                 setAlert({type:"error",message:response?.errors})
            }else{
                setAlert({type:"success",message:response?.message})
                router.push("/mon-compte")
            }
        }
    }
    

    return (
        <div className="w-70.5 flex flex-col gap-7.5">
            <h1 className="text-[#D3590B] font-bold text-[40px] text-center">{isRegisterPage ? "Inscription" : "Connexion"}</h1>
            <div>
                 <div className="flex flex-col pb-3  text-red-700">
                        {formErrors && Array.isArray(formErrors)
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        ? formErrors.map((err:any,i:number)=> <p key={`error${i}`}>{err.message}</p>)
                        : <p>{formErrors}</p>
                    }
                    </div>
                <Form onSubmit={submitForm} isRegisterPage={isRegisterPage}>
                    <Submit label={isRegisterPage ?"S’inscrire": "Se connecter"} type="btn-softBlack"/>
                </Form>
            </div>
        </div>
    )
}