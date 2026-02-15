import Link from "next/link";
import { CircleTag } from "../Collaborators/CircleTag";
import { NameTag } from "../Collaborators/NameTag";
import { ProjectProgress } from "./Progress/ProjectProgress";
import { MemberInterface, ProjectInterface } from "@/app/types/globals";

export function Project({project}:{project:ProjectInterface}) {

  return (
    <li className="border border-[#E5E7EB] h-[351px] rounded-[10px] px-[34px] py-[30px] bg-[#FFFFFF] w-[380px] max-[1370px]:w-[350px] max-[1280px]:w-[380px] max-lg:w-[350px] max-md:w-[80%] max-sm:w-full">
      <Link href={`projets/${project.id}`}>
      <div className="flex flex-col gap-[56px]">
        <div className="flex flex-col gap-[2px]">
          <h2 className="font-semibold text-[18px] manrope-600">{project.name}</h2>
          <p className="text-[14px] text-[#6B7280] max-h-[42px]">
            {
              project.description
            }
          </p>
        </div>

        <ProjectProgress  totalTasks={project._count.tasks} tasksDone={project.completedTasks.length || 0}/>
        
        <div className="flex flex-col gap-[15px]">
          <span className="text-[#6B7280] text-[10px] h-[12px] flex items-center gap-[8px]">
            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.52637 6.94727C9.78424 6.94727 11.579 8.74215 11.5791 11H3.47363C3.47372 8.74222 5.2686 6.94738 7.52637 6.94727ZM3.87891 5.21094C4.11047 5.73187 4.45811 6.19468 4.86328 6.54199C3.99485 7.06305 3.2998 7.81614 2.89453 8.68457H0C0 6.77405 1.56313 5.21099 3.47363 5.21094H3.87891ZM7.52637 0.579102C9.12507 0.579102 10.4208 1.87494 10.4209 3.47363C10.4209 5.07238 9.12511 6.36816 7.52637 6.36816C5.92769 6.36809 4.63184 5.07233 4.63184 3.47363C4.63189 1.87499 5.92772 0.579177 7.52637 0.579102ZM3.47363 0C3.99467 0 4.45802 0.173434 4.86328 0.462891C3.99488 1.15761 3.47367 2.25787 3.47363 3.47363C3.47363 3.8789 3.53167 4.28446 3.64746 4.63184H3.47363C2.19994 4.63182 1.1582 3.58913 1.1582 2.31543C1.15843 1.04192 2.20008 1.19457e-05 3.47363 0Z" fill="#6B7280"/>
            </svg>
            Équipe ({project.members.length})
          </span>
          <div>
            <div className="flex items-center">
              <CircleTag name={project.owner.name} isOwner/>
              <NameTag isOwner/>
              <div className="flex items-center">
                {project.members && project.members.map((m:MemberInterface,i:number)=> 
                  {
                    if (i === 0) {
                        return <CircleTag key={m.id} name={m.user.name} isOwner={false}/>
                    }else{
                         return <CircleTag key={m.id} name={m.user.name} isOwner={false} classname="relative" rightValue={8 * i}/>
                    }
                  }
                )}
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
    </li>
  );
}
