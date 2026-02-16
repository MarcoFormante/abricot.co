'use client'
import { useState} from "react";
import { Input } from "../Input/Input";
import { updateUserProfile } from "@/app/actions/auth";
import { useAlert } from "@/app/context/AlertContext";
import { Submit } from "../Submit/Submit";
import { UserInterface } from "@/app/types/globals";


export function UserForm({user}:{user:UserInterface}){
    const setAlert = useAlert()
    const [userProfile,setUserprofile] = useState({
      name:user?.name.split(" ")[0]?.trim() ?? "",
      surname:user?.name.split(" ")[1]?.trim() ?? "",
      email:user?.email.trim(),
      newPassword:"",
      currentPassword:""
    })

    /**
     * Update user profile data
     * @param e  FormEvent
     * @return void 
     */
    const submitProfile = async (e:React.FormEvent)=> {
        e.preventDefault()
        setAlert(null)
        const formData = new FormData(e.currentTarget as HTMLFormElement)
        const name = (formData.get("name") as string) || ""
        const surname = (formData.get("surname") as string) || "user"
        const email = (formData.get("email") as string) || ""
        const newPassword = (formData.get("password") as string) || "" 
        const currentPassword = (formData.get("currentPassword") as string) || "" 

        if (!name || !surname || !email ) {
           
            setAlert({type:"error",message:"Veuillez remplir tous les champs obligatoires"})
            return
        }

        if((!newPassword && currentPassword) || (newPassword && !currentPassword)){
          setAlert({type:"error",message: "Pour modifier votre mot de passe, veuillez renseigner l'ancien ainsi que le nouveau."})
          return 
        }

        const userData = {
            name: `${name} ${surname}`,
            email,
            currentPassword,
            newPassword,
        }
        const response = await updateUserProfile(userData)
        if (response?.success) {
            setUserprofile({
            name,
            surname,
            email,
            newPassword:"",
            currentPassword:""
          })
          setAlert({type:"success",message:"Profile mise à jour"})
        }else{
          setAlert({type:"error",message:response?.errors || response?.errorMessage})
        }
    }

    const notification = userProfile.name.toLowerCase() === "user" ? "Veuillez modifier le nom et le prénom" : null;
    


    return (
    <div className="mt-[57px] bg-[#FFFFFF] px-[49px] py-[40px] rounded-[10px] max-md:mt-0 max-sm:px-2 ">
      {notification && <p className="text-red-700 text-2xl float-right">{notification}</p>}
        <div>
            <h1 className="text-[18px] text-[#1F1F1F] font-semibold manrope-600">Mon compte</h1>
            <p className="mt-[8px] text-[#6B7280]">{userProfile.name + " " + userProfile.surname}</p>
        </div>
        <form onSubmit={submitProfile} className="flex flex-col gap-[24px] mt-[41px]">
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
            <Submit type={"btn-softBlack"} label="Modifier les informations"  />
          </div>
      </form>
    </div>
    );
}