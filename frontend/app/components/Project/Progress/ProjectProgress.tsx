import { ProgressBar } from "./ProgressBar";

export function ProjectProgress({tasksDone,totalTasks}:{
    tasksDone:number,
    totalTasks:number
}){


    return (
        <div>
            <div className="flex justify-between text-[12px]">
              <p className="text-[#6B7280]">Progression</p>
              <span className="text-[#1F1F1F]">0%</span>
            </div>
            <ProgressBar value={ tasksDone * 20}/>
            <p className="text-[10px] text-[#6B7280]">{tasksDone}/{totalTasks} tâches terminées</p>
        </div>
    )
}