

import { useState } from "react";
import { Button } from "../Button/Button";
import { Tag } from "../Dashboard/Tasks/Tag";
import { Input } from "../Input/Input";

const fakeData = {
    id:"1523",
    title:"Authentification JWT",
    desc: "Implémenter le système d'authentification avec tokens JWT",
    date:"2026/03/09",
    collabs : [
        {
        id:"225",
        name:"Ciccio Banana" 
        },
        {
            id:"335",
            name:"Stefano Bellavita"
        }
    ],
    status:"to-do"
}

export function EditTask(){
     const [newDate,setNewDate] = useState(new Date(fakeData.date).toLocaleDateString("fr-FR",{month:"long",day:"numeric",year:"numeric"}) ?? "")
    
        function onSubmit(event: React.FormEvent) {
            event.preventDefault()
            console.log(event);
            
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


    return (
        <div className="flex flex-col gap-[46px]">
            <h5 className="font-semibold text-[24px] text-[#1F1F1F]">Modifier</h5>  
                <form onSubmit={onSubmit} className='flex flex-col gap-[24px]'>
                    <Input type='text' name='title' label='Title*' gap='6px' required value={fakeData.title ?? ""}/>
                    <Input type='text' name='desc' label='Description*' gap='6px' required value={fakeData.desc ?? ""}/>
                    <div className='relative'>
                        <Input type={"date"} name='date' label='Échéance*' required  onChange={(e) => onDateChange(e.target.value)} value={"2026-03-26"} />
                        <input name='isoDate' id='isoDate' disabled className='absolute top-[50%] left-0.5 h-max rounded-sm bg-[#FFFFFF]  border-[#E5E7EB] pl-[17px] w-[80%] focus:outline-0' type={"text"} value={newDate || fakeData.date }/>
                    </div>
                    
                    <div>
                        <label htmlFor="collaborators" className='text-[14px]'>Assigné à :</label>
                        <select name="collaborators" id="collaborators" className="select-container h-[53px]  pl-[17px] w-full text-[14px]  rounded-sm bg-[#FFFFFF] border border-[#E5E7EB]  pl-1.5 text-[#6B7280]" defaultValue={""}>
                            <option value="" className="text-[#6B7280] ">{fakeData.collabs.length ? `${fakeData.collabs.length < 2 ? "1 collaborateur" : fakeData.collabs.length + " collaborateurs" } ` : "Choisir un ou plusieurs collaborateurs"}</option>
                            {fakeData.collabs.map((c) => <option style={{background:"orange"}} key={c.id} value={c.id} className="text-[#6B7280]">{c.name}</option> ) }
                        </select>
                    </div>
        
                    <div>
                        <span className='text-[14px]'>Statut :</span>
                        <div className='flex items-center gap-[8px] mt-[15px]'>
                            <input type="radio" name="status[]" id="to-do" value={"to-do"} checked={fakeData.status === "to-do"} />
                            <label htmlFor="to-do">
                                <Tag type='to-do'/>
                            </label>
                            
                            <input type="radio" name="status[]" id="in-progress" value={"in-progress"} checked={fakeData.status === "in-progress"} />
                            <label htmlFor="in-progress">
                                <Tag type='in-progress'/>
                            </label>
        
                         <input type="radio" name="status[]" id="done" value={"done"} checked={fakeData.status === "done"} />
                            <label htmlFor="done">
                                <Tag type='done'/>
                            </label>
                        </div>
                    </div>
        
                    <div className='w-[181px] h-[50px] mt-[32px]'>
                        <Button type={"btn-grey"} label={"Enregistrer"} />
                    </div>
                </form>
        </div>
    )
}