import { MemberInterface, UserInterface } from "@/app/types/globals";
import { CircleTag } from "../Collaborators/CircleTag";
import { NameTag } from "../Collaborators/NameTag";

export function ProjectContributors({members,owner}:{
  members:MemberInterface[],
  owner:UserInterface
}){
  
    return (
      <section className="px-[112px] max-lg:px-5 max-sm:px-2">
        <div className="bg-[#F3F4F6] mt-[49px] py-[21px] px-[50px] rounded-[10px] flex justify-between max-sm:px-2 max-[1200px]:flex-col max-md:gap-2 max-lg:px-5" >
          <div>
            <p className="text-[#1F1F1F] text-[18px]">
              Contributeurs
              <span className="text-[#6B7280] ml-[8px]">{`${members.length} personnes`}</span>
            </p>
          </div>
          <div>
            <div className="flex items-center justify-end flex-wrap gap-y-3 max-w-[700px] max-[1200px]:justify-start max-[1200px]:mt-2">
            {
              members && members.map((m) => 
                {
                  return (
                    <div key={m.id} className="flex">
                      <CircleTag name={m.user.name} isOwner={m.user.id === owner.id }/>
                      <NameTag name={m.user.name} isOwner={m.user.id === owner.id}/>
                    </div>
                  )
                }
              )
            } 
            </div>
          </div>
        </div>
      </section>
    )
}