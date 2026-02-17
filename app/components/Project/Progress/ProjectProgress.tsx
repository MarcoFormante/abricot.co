import { ProgressBar } from "./ProgressBar";

export function ProjectProgress({tasksDone,totalTasks}:{
    tasksDone:number,
    totalTasks:number
}){
    const progressValue = totalTasks ? ((tasksDone / totalTasks) * 100).toFixed(0) : 0
    
    return (
        <div>
            <div className="flex justify-between text-[12px]">
              <p className="text-[#6B7280]">Progression</p>
              <span className="text-[#1F1F1F]">{progressValue}%</span>
            </div>
            <ProgressBar value={+progressValue}/>
            <p className="text-[10px] text-[#6B7280]">{tasksDone}/{totalTasks} tâches terminées</p>
        </div>
    )
}