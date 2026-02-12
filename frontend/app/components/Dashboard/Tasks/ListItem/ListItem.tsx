import { TaskInterface } from "@/app/types/globals";
import { Button } from "../../../Button/Button";
import { Tag } from "../Tag";
import { TaskItemProjectDetails } from "../TaskItemProjectDetails";

export function ListItem({task}:{task:TaskInterface}) {

  return (
    <li className="border border-[#E5E7EB] rounded-[10px] bg-[#FFFFFF] pt-[32.23px] md:h-[162px] px-[40px] max-md:pb-5  max-md:pt-5 max-sm:px-3">
      <div className="flex justify-between md:h-[112px] max-md:flex-col">
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[7px]">
            <h3 className="text-[18px] font-semibold">{task.title}</h3>
            <p className="text-[14px] text-[#6B7280]">
              {task.description}
            </p>
          </div>
           <TaskItemProjectDetails 
              projectName={task?.project?.name || ""} 
              dueDate={new Date(task?.dueDate || "")}
              commentsLength={task?.comments?.length || 0}
           />
        </div>
        <div className="flex flex-col justify-between md:items-end max-md:gap-5 max-md:gap-1 max-sm:mt-[12px] max-md:mt-[32px]">
          <Tag type={task?.status} />
          <div className=" w-full min-[490px]:w-[121px] h-[50px] max-md:self-end">
            <Button type={"btn-softBlack"} label="Voir" isLink={true} href={"/projets/" + task?.projectId} />
          </div>
        </div>
      </div>
    </li>
  );
}
