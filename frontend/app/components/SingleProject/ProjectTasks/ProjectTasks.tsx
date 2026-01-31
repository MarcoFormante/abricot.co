import { SwitchButton } from "../../Button/SwitchButton";
import { CircleTag } from "../../Collaborators/CircleTag";
import { NameTag } from "../../Collaborators/NameTag";
import { Tag } from "../../Dashboard/Tasks/Tag";
import { Input } from "../../Input/Input";
import { ProjectTaskItem } from "./ProjectTaskItem";

export function ProjectTasks(){
    return (
    <section className=" mt-[34px] border border-[#E5E7EB] bg-[#FFFFFF] py-[40px] max-w-[1240px] m-auto"> 
        <div className="px-[59px] flex justify-between items-center">
            <div className="flex flex-col gap-[8px] ">
                <h2 className="text-[18px] text-[#1F1F1F]">Tâches</h2>
                <p className="text-[#6B7280]">Par ordre de priorité</p>
            </div>
            <div className="flex items-center gap-[16px]">
                <div className="flex items-center">
                    <SwitchButton svgName={"listeSvg"} label={"Liste"} isActive={true}  />
                    <SwitchButton svgName={"date"} label={"Calendrier"} isActive={false}  />
                </div>
                <div className="flex items-center gap-[16px]">
                    <select name="status" id="status" className="min-h-[63px] h-[63px] max-w-[152px] pl-[32px] text-[14px]  w-[152px] rounded-sm bg-[#FFFFFF] border border-[#E5E7EB]  pl-1.5 text-[#6B7280]">
                        <option value="" className="text-[#6B7280]">Status</option>
                        <option value="to-do" className="text-[#6B7280]">à faire</option>
                    </select>
                    <div className='relative w-[283px] flex h-[63px]'>
                        <Input 
                            type={"search"} 
                            name='searchTask' 
                            placeholder={"Rechercher une tâche"}
                        />
                        <span className='searchSvg'></span>
                    </div> 
                </div>
            </div>
        </div>

        <div className="mt-[41px] min-h-[30vh]">
            <ul className="px-[59px] flex flex-col gap-[17px]">
                <ProjectTaskItem/>
                <ProjectTaskItem/>
                <ProjectTaskItem/>
                <ProjectTaskItem/>
            </ul>
        </div>
    </section>
        
    )
}