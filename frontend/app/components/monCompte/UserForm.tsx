'use client'
import { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { updateUserProfile } from "@/app/actions/auth";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function UserForm({user}:{user:any}){
    const [error,setError] = useState("")
    
    const [userProfile,setUserprofile] = useState({
      name:user.name.split(" ")[0].trim(),
      surname:user.name.split(" ")[1].trim(),
      email:user.email.trim(),
      newPassword:"",
      currentPassword:""
    })

    const onSubmit = async (e:React.FormEvent)=> {
        e.preventDefault()
        const formData = new FormData(e.currentTarget as HTMLFormElement)
        const name = (formData.get("name") as string) || ""
        const surname = (formData.get("surname") as string) || ""
        const email = (formData.get("email") as string) || ""
        const newPassword = (formData.get("password") as string) || "" 
        const currentPassword = (formData.get("currentPassword") as string) || "" 

        if (!name || !surname || !email ) {
            setError("")
            setError("Veuillez remplir tous les champs obligatoires")
            return
        }

        const userData = {
            name: `${name} ${surname}`,
            email,
            currentPassword:currentPassword,
            newPassword,
        }

        const response = await updateUserProfile(userData)

        if (response.success) {
            setUserprofile({
            name,
            surname,
            email,
            newPassword,
            currentPassword
          })
        }
    }

    return (
    <div className="mt-[57px] bg-[#FFFFFF] px-[49px] py-[40px] rounded-[10px]">
        <div>
            <h1 className="text-[18px] text-[#1F1F1F] font-semibold">Mon compte</h1>
            <p className="mt-[8px] text-[#6B7280]">{userProfile.name + " " + userProfile.surname}</p>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-[24px] mt-[41px]">
        <Input
          name="name"
          label="Nom"
          type={"text"}
          gap={"7px"}
          value={userProfile.name}
          required
        />
        <Input
          name="surname"
          label="Prénom"
          type={"text"}
          gap={"7px"}
          value={userProfile.surname}
          required
        />
        <Input
          name="email"
          label="Email"
          type={"email"}
          gap={"7px"}
          value={userProfile.email}
          required
        />

        <Input
          name="currentPassword"
          label="Dernier mot de passe"
          type={"password"}
          gap={"7px"}
          value={userProfile.currentPassword}
        />

        <Input
          name="password"
          label="Mot de passe"
          type={"password"}
          gap={"7px"}
          value={userProfile.newPassword}
        />

        <div className="w-[242px] h-[50px] mt-[17px]">
          <Button type={"btn-softBlack"} label="Modifier les informations" />
        </div>
      </form>
    </div>
    );
}