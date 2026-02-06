'use client'
import { useState } from "react"
import { SwitchButton } from "../../Button/SwitchButton"
import { TaskList } from "./TaskList"
import { TaskKanban } from "./TaskKanban"



export default function TasksSection({tasks}:{
    tasks:[]
}){
    const [isList,setIsList] = useState(true)
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