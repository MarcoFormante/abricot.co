import { Button } from "../../../Button/Button";
import { Tag } from "../Tag";
import { TaskItemProjectDetails } from "../TaskItemProjectDetails";

export function KanbanItem({tagType}:{
    tagType:"to-do" | "in-progress" | "done"
}) {
  return (
    <li className="py-[25px] px-[40px] border border-[#E5E7EB] rounded-[10px] flex flex-col gap-[32px] w-[371px]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[1px]">
          <h4 className="text-[18px] font-semibold max-w-max inline">
            Nom de la tâche
          </h4>
          <p className="text-[14px] text-[#6B7280]">Description de la tâche</p>
        </div>
        <div>
          <Tag type={tagType} />
        </div>
      </div>
      <div>
        <div>
          <div>
           <TaskItemProjectDetails/>
          </div>
        </div>
      </div>

      <div>
        <div className="w-[121px] h-[50px]">
          <Button type={"btn-softBlack"} label="Voir" />
        </div>
      </div>
    </li>
  );
}
