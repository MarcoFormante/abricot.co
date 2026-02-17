import { addContributorToProject, deleteProject, removeContributor, updateProject } from "@/app/actions/project";
import { Button } from '../Button/Button';
import { Input } from "../Input/Input";
import { getUsers } from "@/app/actions/members";
import { useEffect, useMemo, useState } from "react";
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
     * Get Users from DB
     */
    useEffect(() => {
    const fetchInitialData = async () => {
        const data = await getUsers();
        if (data) setUsers(data);
    };
    fetchInitialData();
}, []); 



    /**
     * Edit project members
     * @param value string  User's Email
     * @returns void
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
                setSelectedUser(prev => prev.filter((p)=> p !== value))

            }else{
                const errors = response?.errors || response?.errorMessage
                if (errors) {
                    setAlert({type:"error",message:errors})
                }
            }
        }

    }


    const deleteProj = async ()=>{
        const response = await deleteProject(project?.id)
         if (response?.success) {
            closeModale()
            document.body.style.overflowY = "visible"
            setAlert({type:"success",message:response.message})
            router.refresh()
            router.push("/projets")
        }else{
            const errors = response?.errors || response?.errorMessage
            if (errors) {
                setAlert({type:"error",message:errors})
            }
        }    
    }
    
    
    return (
        <div className="flex flex-col gap-[40px] relative">
             <div className="w-[200px] h-[40px] absolute  top-[-50px]">
                <button onClick={deleteProj} className="cursor-pointer absolute" aria-label="supprimer le projet">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                      <g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#ff1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M14 12V17" stroke="#ff1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M4 7H20" stroke="#ff1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#ff1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#ff1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
                      </svg>
                  </button>
            </div>
            <h6 className="font-semibold text-[24px] text-[#1F1F1F] manrope-600">Modifier un projet</h6>
            <form onSubmit={onSubmit} className='flex flex-col gap-[24px]'>
                <Input type='text' name='name' label='Nom*' gap='6px' required value={project?.name || ""} max={50}/>
                <Input type='text' name='description' label='Description*' gap='6px' required  value={project?.description || ""} max={255}/>

                    <div className="relative">
                        <label htmlFor="collaborators" className='text-[14px]'>Contributeurs</label>
                        <div className="absolute h-[0px] pointer-events-none top-[50%] left-[17px] text-[#6B7280] ">{selectedUsers.length ? selectedUsers.length + ` collaborateur${selectedUsers.length === 1 ? "" : "s"}` : "Choisir un ou plusieurs collaborateurs"}</div>
                        <select  onChange={(e)=>onChange(e.target.value)} name="collaborators" id="collaborators" className="select-container h-[53px] text-transparent  pl-[17px] w-full text-[14px]  rounded-sm bg-[#FFFFFF] border border-[#E5E7EB] cursor-pointer  pl-1.5 text-[#6B7280]" defaultValue={""}>
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