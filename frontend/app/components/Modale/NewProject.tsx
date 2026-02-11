import { newProject } from "@/app/actions/project";
import { Input } from "../Input/Input";
import { getUsers } from "@/app/actions/members";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/context/UserContext";
import { Submit } from "../Submit/Submit";

export  function NewProject({closeModale}:{closeModale:()=>void}){
    const [users,setUsers] = useState<any[]>([])
    const [selectedUsers,setSelectedUser] = useState<any[]>([])
    const router = useRouter()
    const userInfo = useUser()
    
    const onSubmit = async (e:React.FormEvent)=>{
        e.preventDefault()
        const formdata = new FormData(e.currentTarget as HTMLFormElement)
        const response = await newProject(formdata,[...selectedUsers,userInfo.email])
        if (response?.success) {
            closeModale()
            document.body.style.overflowY = "visible"
            router.push("/projets/" + response.projectId)
        }        
    }

    useEffect(()=>{
        const getUsersData = async () => {
            const data = await getUsers()
            setUsers(data)
        }
        getUsersData()
    },[])

    const onChange = (value:string) => {
        if (!value) {
            return
        }

        if (!selectedUsers.includes(value)) {
            setSelectedUser(prev => [...prev,value])
        }else{
            setSelectedUser(selectedUsers.filter((email)=> email !== value))
        }
    }

    
    return (
      <div className="flex flex-col gap-[40px]">
        <h5 className="font-semibold text-[24px] text-[#1F1F1F]">
          Créer un projet
        </h5>
        <form onSubmit={onSubmit} className="flex flex-col gap-[24px]">
            <Input 
                type="text"
                name="name"
                label="Nom*"
                gap="6px" 
                required />
            <Input
                type="text"
                name="description"
                label="Description*"
                gap="6px"
                required
            />

            <div className="relative">
                <label htmlFor="collaborators" className="text-[14px]">Contributeurs</label>
            <div className="absolute h-[0px] top-[50%] left-[17px] text-[#6B7280] ">
              {selectedUsers.length
                ? selectedUsers.length +
                  ` collaborateur${selectedUsers.length === 1 ? "" : "s"}`
                : "Choisir un ou plusieurs collaborateurs"}
            </div>
            <select
              value={""}
              onChange={(e) => onChange(e.target.value)}
              name="collaborators"
              id="collaborators"
              className="select-container h-[53px]  pl-[17px] w-full text-[14px]  rounded-sm bg-[#FFFFFF] border border-[#E5E7EB] cursor-pointer  pl-1.5 text-[#6B7280]"
              defaultValue={""}
            >
              <option value=""></option>
              {users &&
                users?.length &&
                users.map((user) => {
                  const isSelected = selectedUsers.includes(user.email);
                  const isOwner = user.email === userInfo.email;
                  return !isOwner && (
                    <option
                      data-selected={isSelected}
                      key={user.id}
                      value={user.email}
                      className={"text-[#6B7280]"}
                    >
                      {user.name}
                    </option>
                  );
                })}
            </select>
          </div>

          <div className="w-[181px] h-[50px] mt-[32px]">
            <Submit type={"btn-grey"} label={"Ajouter un projet"}/>
          </div>
        </form>
      </div>
    );
}