/* eslint-disable @typescript-eslint/no-explicit-any */
import { TaskInterface } from "@/app/types/globals";
import { KanbanItem } from "./KanbanItem/KanbanItem";

export function TaskKanban({tasks}:{tasks:[]}){

    const filteredTasks: {toDo: any[], inProgress: any[], done: any[]} = {
        toDo:[],
        inProgress:[],
        done:[]
    }
    
    tasks.forEach((t:TaskInterface)=>{
        if (t.status === "TODO") {
            filteredTasks.toDo.push(t)
        }else if(t.status === "IN_PROGRESS"){
              filteredTasks.inProgress.push(t)
        }else{
            filteredTasks.done.push(t)
        }
    })


    return (
        <section className="flex gap-[22px] mt-[51px] max-[1421px]:flex-wrap max-[1421px]:justify-center">
            <div className="bg-[#FFFFFF] border border-[#FFE0E0] w-[419px] min-h-[30vh] pt-[40px] px-[24px] rounded-[10px] max-sm:px-[12px]">
                <div>
                    <h3 className="text-[18px] font-semibold max-w-max inline">À faire</h3>
                    <span className="bg-[#E5E7EB] text-[#6B7280] py-[4px] px-[16px] w-[41px] h-[25px] rounded-[50px] ml-[8px] text-[14px]"> {filteredTasks?.toDo?.length}</span>
                </div>

                {/** TO DO LIST */}
                <ul className="mt-[41px] flex flex-col gap-[16px] pb-[40px]">
                    {
                        filteredTasks.toDo &&
                        filteredTasks.toDo?.map((task:any)=><KanbanItem key={task.id} task={task} />)
                    }
                </ul>
            </div>

            <div className="bg-[#FFFFFF] border border-[#FFE0E0] w-[419px] min-h-[30vh] pt-[40px] px-[24px] rounded-[10px]">
                <div>
                    <h3 className="text-[18px] font-semibold max-w-max inline">En cours</h3>
                    <span className="bg-[#E5E7EB] text-[#6B7280] py-[4px] px-[16px] w-[41px] h-[25px] rounded-[50px] ml-[8px] text-[14px]">{filteredTasks?.inProgress.length}</span>
                </div>

                   {/** IN_PROGRESS LIST */}
                <ul className="mt-[41px] flex flex-col gap-[16px] pb-[40px]">
                    {
                        filteredTasks.inProgress &&
                        filteredTasks.inProgress?.map((task:any)=><KanbanItem key={task.id} task={task} />)
                    }
                </ul>
            </div>

             <div className="bg-[#FFFFFF] border border-[#FFE0E0] w-[419px] min-h-[30vh] pt-[40px] px-[24px] rounded-[10px]">
                <div>
                    <h3 className="text-[18px] font-semibold max-w-max inline">Terminées</h3>
                    <span className="bg-[#E5E7EB] text-[#6B7280] py-[4px] px-[16px] w-[41px] h-[25px] rounded-[50px] ml-[8px] text-[14px]">{filteredTasks?.done.length}</span>
                </div>

                  {/** DONE LIST */}
                <ul className="mt-[41px] flex flex-col gap-[16px] pb-[40px]">
                    {
                        filteredTasks.done &&
                        filteredTasks.done?.map((task:any)=><KanbanItem key={task.id} task={task} />)
                    }
                </ul>
            </div>

        </section>
    )
}