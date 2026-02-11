'use client'

import { useCallback, useEffect, useState } from "react";
import { SwitchButton } from "../../Button/SwitchButton";
import { Input } from "../../Input/Input";
import { EditTask } from "../../Modale/EditTask";
import { ModaleContainer } from "../../Modale/ModaleContainer";
import { ProjectTaskItem } from "./ProjectTaskItem";
import { useUser } from "@/app/context/UserContext";


export function ProjectTasks({tasks,projectMembers,isUserProject}:{tasks:any[],projectMembers:any[],isUserProject:any}){
    const [projectTasks,setProjectsTasks] = useState<any[]>([])
    const [showModale,setShowModale] = useState<{type:string,task?:any}>({type:""})
    const [searchValue,setSearchValue] = useState("")
    const [filter,setFilter] = useState({type:"",value:""})
    const userInfo = useUser()
    

    const onFilterChange = (type:string,value:string)=>{
        setFilter({type,value})
    }
    
    const getFilteredTasks = useCallback(() => {
        let newFilteredTasks = []

        switch (filter.type) {
            case "":
                newFilteredTasks = projectTasks
                break;

            case "date":
                newFilteredTasks = projectTasks.filter((f)=>{
                    return new Date(f.dueDate) < new Date(filter.value)
                })
                
                break;

            case "search":
                    newFilteredTasks = projectTasks.filter((f)=>{
                    return f.title.toLowerCase().includes(filter.value.toLowerCase())
                })
                break;

            case "status":
                if (!filter.value) {
                    newFilteredTasks = projectTasks
                }else{
                    newFilteredTasks = projectTasks.filter((f)=>{
                        return f.status === filter.value
                    })
                }
                break;
        
            default:
                 newFilteredTasks = projectTasks
                break;
        }

        return newFilteredTasks
    },[filter,projectTasks])

    const filteredTasks = getFilteredTasks()


    const onEditTask = (task:any)=>{
        setShowModale({type:"editTask",task})
    }


    const onDeleteTask = (id:string)=>{
        setProjectsTasks(projectTasks.filter((t:any)=> t.id !== id))
    }

    useEffect(() => {
        setProjectsTasks(tasks);
    }, [tasks]);
    

    

    return (
    <section className="mt-[34px] border border-[#E5E7EB] bg-[#FFFFFF] py-[40px] max-w-[1240px] m-auto"> 
        <div className="px-[59px] flex justify-between items-center">
            <div className="flex flex-col gap-[8px] ">
                <h2 className="text-[18px] text-[#1F1F1F]">Tâches</h2>
                <p className="text-[#6B7280]">Par ordre de priorité</p>
            </div>
            <div className="flex items-center gap-[16px]">
                <div className="flex items-center">
                    <SwitchButton svgName={"listeSvg"} label={"Liste"} isActive={true}  />
                 
                    <label htmlFor="dueDate" className="relative">
                        <SwitchButton svgName={"date"} label={"Calendrier"} isActive={false}  />
                        <input type="date" name="dueDate" id="dueDate" className="dueDate-input absolute top-3 left-0 " onChange={(e)=>onFilterChange("date",e.target.value)} />
                    </label>
                    
                </div>
                <div className="flex items-center gap-[16px]">
                    <select onChange={(e)=>onFilterChange("status",e.target.value)} name="status" id="status" className="min-h-[63px] h-[63px] max-w-[152px] pl-[32px] text-[14px]  w-[152px] rounded-sm bg-[#FFFFFF] border border-[#E5E7EB]  pl-1.5 text-[#6B7280]">
                        <option value="" className="text-[#6B7280]">Status</option>
                        <option value="TODO" className="text-[#6B7280]">à faire</option>
                        <option value="IN_PROGRESS" className="text-[#6B7280]">En cours</option>
                        <option value="DONE" className="text-[#6B7280]">Terminée</option>
                    </select>
                    <div >
                        <form className='relative w-[283px] flex h-[63px]' onSubmit={(e)=>{
                            e.preventDefault()
                            onFilterChange("search",searchValue)
                            }}>
                            <Input 
                                type={"search"} 
                                name='searchTask' 
                                placeholder={"Rechercher une tâche"}
                                value={searchValue}
                                onChange={(e)=>{
                                    if (!e.target.value) {
                                        onFilterChange("search","")
                                    }else{
                                        setSearchValue(e.target.value)
                                    }
                                }}
                            />
                        <span role="button" className='searchSvg' onClick={()=>onFilterChange("search",searchValue)}></span>
                        </form>
                    </div> 
                </div>
            </div>
        </div>
            { showModale?.type === "editTask" && 
                  <ModaleContainer setShowModale={setShowModale} showModale={showModale}>
                    <EditTask task={showModale.task} members={projectMembers} setShowModale={setShowModale} />
                  </ModaleContainer>
                  }
   
        <div className="mt-[41px] min-h-[30vh]">
            <ul className="px-[59px] flex flex-col gap-[17px]">
                {filteredTasks && filteredTasks.map((task)=>
                    <ProjectTaskItem 
                        key={task.id} 
                        task={task} 
                        onEdit={()=>onEditTask(task)} 
                        onDeleteTask={()=>onDeleteTask(task.id)}
                        isUserProject={isUserProject}
                        userIsContributor={projectMembers.find((c)=> c.user.id === userInfo.id )}
                    />
                )}
            </ul>
        </div>
    </section>
        
    )
}