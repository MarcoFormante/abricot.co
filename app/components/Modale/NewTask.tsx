'use client'
import { Input } from '../Input/Input';
import { Tag } from '../Dashboard/Tasks/Tag';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { createTask } from '@/app/actions/task';
import { Submit } from '../Submit/Submit';
import { AiTask, MemberInterface, TaskInterface } from '@/app/types/globals';
import { useAlert } from '@/app/context/AlertContext';


export function NewTask({members,closeModale,aiTask,deleteAiTaskAfterSuccess}:
    {
        members:MemberInterface[],
        closeModale:()=>void,
        aiTask?:AiTask,
        deleteAiTaskAfterSuccess?:()=>void
    }){
         
    const [newDate,setNewDate] = useState("")
    const [selectedUsers,setSelectedUser] = useState<string[]>([])
    const params = useParams()
    const router = useRouter()
    const setAlert = useAlert()
    

    /**
     * Create New Task
     * @param event FormEvent
     * @returns void
     */
    async function onSubmit(event: React.FormEvent) {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const title = formData.get('title')
        const desc = formData.get('desc')
        const date = formData.get('date')

        if (!title && !desc && !date) {
            setAlert({type:"error",message:"Veuillez renseigner le titre, la description et la date."})
            return
        }

        const formValues:TaskInterface = {
            title: formData.get('title') as string,
            description: formData.get('desc') as string,
            dueDate: new Date(formData.get('date') as string).toISOString(),
            assigneeIds: selectedUsers,
            status: (formData.get('status[]') ?? "TODO") as string,
            id:params.id as string
        }
        const response = await createTask(formValues)
        
        if (response.success) {
            document.body.style.overflowY = "visible"
            closeModale()
            setAlert({type:"success",message:response.message})
            if (aiTask?.id && deleteAiTaskAfterSuccess) {
                deleteAiTaskAfterSuccess()
            }
            router.refresh()
        }else{
          const errors = response?.errors || response?.errorMessage
            if (errors) {
                setAlert({type:"error",message:errors})
            }
        }
    }

    /**
     * Handle due Date
     * @param value string  Date value
     * @return void
     */
    const onDateChange = (value:string)=>{
        const date = new Date(value)
        const isoDate = date.toLocaleDateString("fr-FR",{
            month:"long",day:"numeric",year:"numeric"
        })
        setNewDate(isoDate)
    }
  
  
    /**
     * Handle Selected User
     * @param value string  Email of the user
     * @return void
     */
    const onSelectChange = (value:string) => {
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
        <div className="flex flex-col gap-[46px] max-md:gap-[12px]">
            <h5 className="font-semibold text-[24px] text-[#1F1F1F] manrope-600">Créer une tâche</h5>

            <form onSubmit={onSubmit} className='flex flex-col gap-[24px]'>
                <Input type='text' name='title' label='Title*' gap='6px' required  value={aiTask?.title ?? ""}/>
                <Input type='text' name='desc' label='Description*' gap='6px' required value={aiTask?.description ?? ""}/>
                <div className='relative cursor-pointer'>
                    <Input type={"date"} name='date' label='Échéance*' required  onChange={(e) => onDateChange(e.target.value)} />
                    <div className='absolute pointer-events-none top-[50%] left-2 h-max rounded-sm bg-[#FFFFFF]  border-[#E5E7EB] pl-1.5 w-[80%] focus:outline-0'>{newDate}</div>
                </div>
                
                <div className='relative'>
                    <label htmlFor="collaborators" className='text-[14px]'>Assigné à :</label>
                    <div className="absolute top-[50%] pointer-events-none left-[17px] text-[#6B7280]" >{selectedUsers.length ? selectedUsers.length + " collaborateurs" : "Choisir un ou plusieurs collaborateurs"}</div>
                    <select value="" onChange={(e)=>onSelectChange(e.target.value)} name="collaborators" id="collaborators" className="select-container cursor-pointer h-[53px]  pl-[17px] w-full text-[14px]  rounded-sm bg-[#FFFFFF] border border-[#E5E7EB]  pl-1.5 text-[#6B7280]" >
                        <option value="" ></option>
                        {
                            (members && members?.length) && 
                                members.map((m)=> 
                                <option 
                                    data-selected={selectedUsers.includes(m.user.id)}  
                                    key={m.id} 
                                    value={m.user.id} 
                                    className="text-[#6B7280]"
                                >
                                    {m.user.name}
                                </option> 
                            )
                        }
                    </select>   
                </div>

                <div>
                    <span className='text-[14px]'>Statut :</span>
                    <div className='flex items-center gap-[8px] mt-[15px]'>
                        <input type="radio" name="status[]" id="to-do" value={"TODO"}  />
                        <label htmlFor="to-do">
                            <Tag type='TODO'/>
                        </label>
                        
                        <input type="radio" name="status[]" id="in-progress" value={"IN_PROGRESS"}  />
                        <label htmlFor="in-progress">
                            <Tag type='IN_PROGRESS'/>
                        </label>

                        <input type="radio" name="status[]" id="done" value={"DONE"}/>
                        <label htmlFor="done">
                            <Tag type='DONE'/>
                        </label>
                    </div>
                </div>

                <div className='w-[181px] h-[50px] mt-[32px]'>
                    <Submit type={"btn-grey"} label={"+ Ajouter une tâche"} />
                </div>
            </form>
        </div>
    )
}