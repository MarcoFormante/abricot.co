'use client'
import { AdminMainTitle } from "@/app/components/Dashboard/AdminMainTitle/AdminMainTitle";
import { Button } from "@/app/components/Button/Button";
import { SwitchButton } from "@/app/components/Button/SwitchButton";
import { useState } from "react";
import { TaskList } from "@/app/components/Dashboard/Tasks/TaskList";
import { TaskKanban } from "@/app/components/Dashboard/Tasks/TaskKanban";

export default function Dashboard() {
    const [isList,setIsList] = useState(true)

    return (
        <main className="pt-[89px] px-25 pb-[78px]">
            <div className="flex justify-between">
                <AdminMainTitle title={"Tableau de bord"} text="Bonjour Alice Dupont, voici un aperçu de vos projets et tâches"/>
                <div className="h-[50px] self-end">
                    <div className="w-[181px] h-[50px]">
                        <Button type={"btn-black"} label="+ Créer un projet"/>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center gap-[10px] mt-[60px]">
                <SwitchButton svgName={"listeSvg"} label={"Liste"} isActive={isList} onClick={()=>setIsList(true)}/>
                <SwitchButton svgName={"kanbanSvg"} label={"Kanban"} isActive={!isList} onClick={()=>setIsList(false)}/>
            </div>


            {isList ? <TaskList/> : <TaskKanban/> }

        </main>
    )
}