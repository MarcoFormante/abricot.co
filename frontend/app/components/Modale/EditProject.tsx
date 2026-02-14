import { addContributorToProject, removeContributor, updateProject } from "@/app/actions/project";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { getUsers } from "@/app/actions/members";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/context/UserContext";
import { ContributorInterface, MemberInterface, ProjectInterface, UserInterface } from "@/app/types/globals";
import { useAlert } from "@/app/context/AlertContext";

export function EditProject({closeModale,project,members}:
    {
        closeModale:()=>void,
        project:Pick<ProjectInterface,"name"|"description" |"members"| "id">,
        members:MemberInterface[],
    }){

    const [users,setUsers] = useState<UserInterface[]>([])
    const [selectedUsers,setSelectedUser] = useState<string[]>(members?.map((m) => m.user.email))
    const router = useRouter()
    const userInfo = useUser()
    const setAlert = useAlert()
    
    /**
     * Edit Project
     * @param e FormData
     * @return void
     */
    const onSubmit = async (e:React.FormEvent)=>{
        e.preventDefault()
        const formdata = new FormData(e.currentTarget as HTMLFormElement)
        formdata.append("projectId",project.id)
        const response = await updateProject(formdata)
        
        if (response?.success) {
            closeModale()
            document.body.style.overflowY = "visible"
            setAlert({type:"success",message:response.message})
            router.refresh()
        }else{
            const errors = response?.errors || response?.errorMessage
            if (errors) {
                setAlert({type:"error",message:errors})
            }
        }        
    }

    /**
     * Get user Data
     * check if selected user exists inside data or push in to the filteredUsers array
     * @return void
     */
    useEffect(()=>{
        const getUsersData = async () => {
            const data = await getUsers()
            if (data && data.length) {
                const filteredUsers= members.map((m:MemberInterface)=>m.user)
                data.filter((u:UserInterface)=>{
                if (!selectedUsers.includes(u.email)) {
                        filteredUsers.push(u)
                }
                })
                setUsers([...filteredUsers])
            }
        }
        getUsersData()
    },[])


    /**
     * Edit project members
     * @param value string  User's Email
     * @returns 
     */
    const onChange = async (value:string) => {
        if (!value ) {
            return
        }
        if (!selectedUsers.includes(value)) {
            setSelectedUser(prev => [...prev,value])
            const response = await addContributorToProject(value,project.id)
            
            if (response?.success) {
                setAlert({type:"success",message:"L'utilisateur a été ajouté au projet avec succès."})
                router.refresh()
            }
        }else{
            const userToRemove = users.find((u:UserInterface)=> u.email === value) 
            const response = await removeContributor(userToRemove as ContributorInterface,project.id)
            
            if (response.success) {
                setAlert({type:"success",message:"Contributeur retiré avec succès."})
                setSelectedUser(selectedUsers.filter((email)=> email !== value))
                router.refresh()

            }else{
                const errors = response?.errors || response?.errorMessage
                if (errors) {
                    setAlert({type:"error",message:errors})
                }
            }
        }
    }
    
    
    return (
        <div className="flex flex-col gap-[40px]">
            <h5 className="font-semibold text-[24px] text-[#1F1F1F]">Modifier un projet</h5>
            <form onSubmit={onSubmit} className='flex flex-col gap-[24px]'>
                <Input type='text' name='name' label='Nom*' gap='6px' required value={project?.name || ""}/>
                <Input type='text' name='description' label='Description*' gap='6px' required  value={project?.description || ""}/>

                    <div className="relative">
                        <label htmlFor="collaborators" className='text-[14px]'>Contributeurs</label>
                        <div className="absolute h-[0px] pointer-events-none top-[50%] left-[17px] text-[#6B7280] ">{selectedUsers.length ? selectedUsers.length + ` collaborateur${selectedUsers.length === 1 ? "" : "s"}` : "Choisir un ou plusieurs collaborateurs"}</div>
                        <select value={""} onChange={(e)=>onChange(e.target.value)} name="collaborators" id="collaborators" className="select-container h-[53px]  pl-[17px] w-full text-[14px]  rounded-sm bg-[#FFFFFF] border border-[#E5E7EB] cursor-pointer  pl-1.5 text-[#6B7280]" defaultValue={""}>
                            <option value=""></option>

                            {(users && users?.length) && 
                                users.map((user:UserInterface)=>{
                                    const isOwner = user.id === userInfo?.id
                                    return !isOwner && (
                                        <option 
                                            data-selected={selectedUsers.includes(user.email)} 
                                            key={user.id} 
                                            value={user.email} 
                                            className="text-[#6B7280]"
                                        >
                                            {user.name}
                                        </option>
                                    )
                                } 
                            )}
                        </select>
                    </div>

                    <div className='w-[181px] h-[50px] mt-[32px]'>
                        <Button type={"btn-grey"} label={"Modifier"} />
                    </div>
            </form>
        </div>
    )
}