'use client'
import { Input } from '../Input/Input';
import { Tag } from '../Dashboard/Tasks/Tag';
import { useState } from 'react';
import { editTask } from '@/app/actions/task';
import { useRouter } from "next/navigation";
import { Submit } from '../Submit/Submit';
import { MemberInterface, TaskInterface, TaskUserAssigned } from '@/app/types/globals';
import { useAlert } from '@/app/context/AlertContext';

export function EditTask({task,members,setShowModale}:
    {
        task:TaskInterface,
        members:MemberInterface[],
        setShowModale:React.Dispatch<React.SetStateAction<{type:string}>>
    }){
        
    const [newDate,setNewDate] = useState(task?.dueDate)
    const [selectedUsers,setSelectedUser] = useState<string[]>(task?.assignees ? task.assignees.map((a: TaskUserAssigned) => a.user.id) : [])
    const router = useRouter()
    const setAlert = useAlert()

    /**
     * Edit Task
     * @param event FormEvent
     * @return void
     */
    async function onSubmit(event: React.SubmitEvent) {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const title = formData.get('title')
        const desc = formData.get('desc')
        const date = formData.get('date')

        if (!title && !desc && !date) {
            return
        }
        
        const formValues: Pick<TaskInterface,"title" | "description" | "dueDate" | "assignees" | "status" | "projectId"| "assigneeIds" | "id"> = {
            title: formData.get('title') as string,
            description: formData.get('desc') as string,
            dueDate: new Date(newDate).toISOString(),
            assigneeIds: selectedUsers,
            status: (formData.get('status[]') || task.status) as "TODO" | "IN_PROGRESS" | "DONE",
            projectId:task.projectId,
            id:task.id
        }

        const response = await editTask(formValues)
        
        if (response.success) {
            setShowModale({type:""})
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
     * Handle Date
     * @param value string   Due date
     * @return void
     */
    const onDateChange = (value:string)=>{
        if (!value) {
            return 
        }

        const date = new Date(value)
        if (!isNaN(date.getTime())) {
            const isoDate = new Date(date).toISOString()
            setNewDate(isoDate)
        }else{
            setNewDate(new Date().toISOString())
        }
       
    }
  
    /**
     * Select users
     * @param value string  users's Email
     * @return void
     */
      const onSelectChange = (value:string) => {
          if (!value) {
              return
          }
          if (!selectedUsers.includes(value)) {
              setSelectedUser(prev => [...prev,value])
          }else{
              setSelectedUser(prev =>  prev.filter((email)=> email !== value))
          }
      }


    return (
        <div className="flex flex-col gap-[46px] max-md:gap-[12px]">
            <h5 className="font-semibold text-[24px] text-[#1F1F1F] manrope-600">Modifier</h5>

            <form onSubmit={onSubmit} className='flex flex-col gap-[24px]'>
                <Input type='text' name='title' label='Title*' gap='6px' value={task.title ?? ""} required/>
                <Input type='text' name='desc' label='Description*' gap='6px' value={task.description ?? ""} required/>
                <div className='relative'>
                    <Input type={"date"} name='date' label='Échéance*'  onChange={(e) => onDateChange(e.target.value)} value={new Date(newDate).toString()}  />
                    <input name='isoDate' id='isoDate' disabled className='absolute top-[50%] left-0.5 h-max rounded-sm bg-[#FFFFFF]  border-[#E5E7EB] pl-1.5 w-[80%] focus:outline-0' type={"text"} value={new Date(newDate).toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"})}/>
                </div>
                
                <div className='relative'>
                    <label htmlFor="collaborators" className='text-[14px]'>Assigné à :</label>
                    <div className="absolute top-[50%] pointer-events-none left-[17px] text-[#6B7280] ">{selectedUsers?.length ? selectedUsers.length + " collaborateurs" : "Choisir un ou plusieurs collaborateurs"}</div>
                    <select value="" onChange={(e)=>onSelectChange(e.target.value)} name="collaborators" id="collaborators" className="select-container h-[53px]  pl-[17px] w-full text-[14px]  rounded-sm bg-[#FFFFFF] border border-[#E5E7EB]  pl-1.5 text-[#6B7280]" >
                        <option value=""></option>
                        {
                            (members && members?.length) && 
                                members?.map((m:MemberInterface)=> 
                                <option 
                                    data-selected={selectedUsers?.includes(m.user.id)}  
                                    key={m.id} 
                                    value={m.user.id} 
                                    className="text-[#6B7280]"
                                    >{m.user.name}
                                </option> 
                            )
                        }

                        {
                            (task.assignees && task.assignees?.length) && 
                                task.assignees?.map((a:TaskUserAssigned)=> 
                                !members.find((coll) => coll.user.id === a.user.id ) && 
                                <option 
                                    data-selected={selectedUsers?.includes(a.user.id)}  
                                    key={a.id} 
                                    value={a.user.id} 
                                    className="text-[#6B7280]"
                                    >{a.user.name}
                                </option> 
                            )
                        }
                        
                    </select>   
                </div>

                <div>
                    <span className='text-[14px]'>Statut :</span>
                    <div className='flex items-center gap-[8px] mt-[15px]'>
                        <input type="radio" name="status[]" id="to-do" value={"TODO"}  defaultChecked={task.status === "TODO"}/>
                        <label htmlFor="to-do">
                            <Tag type='TODO'/>
                        </label>
                        
                        <input type="radio" name="status[]" id="in-progress" value={"IN_PROGRESS"} defaultChecked={task.status === "IN_PROGRESS"} />
                        <label htmlFor="in-progress">
                            <Tag type='IN_PROGRESS'/>
                        </label>

                        <input type="radio" name="status[]" id="done" value={"DONE"} defaultChecked={task.status === "DONE"} />
                        <label htmlFor="done">
                            <Tag type='DONE'/>
                        </label>
                    </div>
                </div>

                <div className='w-[181px] h-[50px] mt-[32px]'>
                     <Submit type={"btn-grey"} label={"Modifier"}/>
                </div>
            </form>
        </div>
    )
}