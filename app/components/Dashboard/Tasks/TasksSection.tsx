'use client'
import { useEffect, useState } from "react"
import { SwitchButton } from "../../Button/SwitchButton"
import { TaskList } from "./TaskList"
import { TaskKanban } from "./TaskKanban"
import { useAlert } from "@/app/context/AlertContext"



export default function TasksSection({tasks,errorMessage}:{
    tasks:[],
    errorMessage:string
}){
    const [isList,setIsList] = useState(true)
    const setAlert = useAlert()


    useEffect(()=>{
        if (errorMessage) {
            setAlert({type:"error",message:errorMessage})
        }
    },[errorMessage,setAlert])
    

    return (
        <>
          <div className="flex items-center gap-[10px] mt-[60px]">
                <SwitchButton svgName={"listeSvg"} label={"Liste"} isActive={isList} onClick={()=>setIsList(true)}/>
                <SwitchButton svgName={"kanbanSvg"} label={"Kanban"} isActive={!isList} onClick={()=>setIsList(false)}/>
            </div>


            {isList ? <TaskList tasks={tasks}/> : <TaskKanban tasks={tasks}/> }
        </>
    )
}