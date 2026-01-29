import { Button } from "../../../Button/Button";
import { Tag } from "../Tag";
import { TaskItemProjectDetails } from "../TaskItemProjectDetails";

export function ListItem({tagType}:{
    tagType:"to-do" | "in-progress" | "done"
}) {
  return (
    <li className="border border-[#E5E7EB] rounded-[10px] bg-[#FFFFFF] pt-[32.23px] h-[162px] px-[40px]">
      <div className="flex justify-between h-[112px]">
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[7px]">
            <h3 className="text-[18px] font-semibold">Nom de la tâche</h3>
            <p className="text-[14px] text-[#6B7280]">
              Description de la tâche
            </p>
          </div>
           <TaskItemProjectDetails/>
        </div>
        <div className="flex flex-col justify-between items-end">
          <Tag type={tagType} />
          <div className="w-[121px] h-[50px]">
            <Button type={"btn-softBlack"} label="Voir" />
          </div>
        </div>
      </div>
    </li>
  );
}
