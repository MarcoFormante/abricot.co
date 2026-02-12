import { TaskInterface } from "@/app/types/globals";
import { Button } from "../../../Button/Button";
import { Tag } from "../Tag";
import { TaskItemProjectDetails } from "../TaskItemProjectDetails";

export function KanbanItem({task}:{task:TaskInterface}) {
  
  return (
    <li className="py-[25px] px-[20px] border border-[#E5E7EB] rounded-[10px] flex flex-col gap-[32px] w-[371px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[1px]">
          <h4 className="text-[18px] font-semibold max-w-max inline">
            {task.title}
          </h4>
          <p className="text-[14px] text-[#6B7280]">{task.description}</p>
        </div>
        <div>
          <Tag type={task.status} />
        </div>
      </div>
      <div>
        <div>
          <div>
          <TaskItemProjectDetails 
              projectName={task?.project?.name || ""} 
              dueDate={new Date(task?.dueDate)}
              commentsLength={task?.comments?.length || 0}
           />
          </div>
        </div>
      </div>

      <div>
        <div className="w-[121px] h-[50px]">
           <Button type={"btn-softBlack"} label="Voir" isLink={true} href={"/projets/" + task.projectId} />
        </div>
      </div>
    </li>
  );
}
