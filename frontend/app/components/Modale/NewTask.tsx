'use client'
import { Input } from '../Input/Input';
import { Tag } from '../Dashboard/Tasks/Tag';
import { Button } from '../Button/Button';
import {useState } from 'react';


export function NewTask(){
    const [newDate,setNewDate] = useState("")
    const [collab,setCollab] = useState<any[]>([])

    function onSubmit(event: React.FormEvent) {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const title = formData.get('title')
        const desc = formData.get('desc')
        const date = formData.get('date')

        if (!title && !desc && !date) {
            return
        }

        const formValues = {
            title: formData.get('title'),
            desc: formData.get('desc'),
            date: formData.get('date'),
            collabs: formData.get('collaborators'),
            status: formData.get('status[]')
        }

        console.log(formValues);
    }

    const onDateChange = (value:string)=>{
        const date = new Date(value)
        const isoDate = date.toLocaleDateString("fr-FR",{
            month:"long",day:"numeric",year:"numeric"
        })
        setNewDate(isoDate)
    }


    const onChange = (value:any) => {
       
        setCollab(prev => [...prev,value])
    }

    console.log(collab);
    


    return (
        <div className="flex flex-col gap-[46px]">
            <h5 className="font-semibold text-[24px] text-[#1F1F1F]">Créer une tâche</h5>
            <form onSubmit={onSubmit} className='flex flex-col gap-[24px]'>
                <Input type='text' name='title' label='Title*' gap='6px' required/>
                <Input type='text' name='desc' label='Description*' gap='6px' required/>
                <div className='relative'>
                    <Input type={"date"} name='date' label='Échéance*' required  onChange={(e) => onDateChange(e.target.value)} />
                    <input name='isoDate' id='isoDate' disabled className='absolute top-[50%] left-0.5 h-max rounded-sm bg-[#FFFFFF]  border-[#E5E7EB] pl-1.5 w-[80%] focus:outline-0' type={"text"} value={newDate}/>
                </div>
                
                <div>
                    <label htmlFor="collaborators" className='text-[14px]'>Assigné à :</label>
                    <select onChange={(e) => onChange(e.target.value)} multiple name="collaborators" id="collaborators" className="select-container h-[53px]  pl-[6px] w-full text-[14px]  rounded-sm bg-[#FFFFFF] border border-[#E5E7EB]  pl-1.5 text-[#6B7280]">
                        <option value="" className="text-[#6B7280]">{collab.length} collaborators</option>
                        <option value="c" className="text-[#6B7280]">Ciccio</option>
                        <option value="d" className="text-[#6B7280]">Marco</option>
                    </select>
                </div>

                <div>
                    <span className='text-[14px]'>Statut :</span>
                    <div className='flex items-center gap-[8px] mt-[15px]'>
                        <input type="radio" name="status[]" id="to-do" value={"to-do"} />
                        <label htmlFor="to-do">
                            <Tag type='TODO'/>
                        </label>
                        
                        <input type="radio" name="status[]" id="in-progress" value={"in-progress"} />
                        <label htmlFor="in-progress">
                            <Tag type='IN_PROGRESS'/>
                        </label>

                        <input type="radio" name="status[]" id="done" value={"done"} />
                        <label htmlFor="done">
                            <Tag type='DONE'/>
                        </label>
                    </div>
                </div>

                <div className='w-[181px] h-[50px] mt-[32px]'>
                    <Button type={"btn-grey"} label={"+ Ajouter une tâche"} />
                </div>
            </form>
        </div>
    )
}