import { CircleTag } from "../Collaborators/CircleTag";
import { NameTag } from "../Collaborators/NameTag";

export function ProjectContributors({members,ownerName}:{
  members:[any],
  ownerName:string
}){

    return (
      <section className="px-[112px]">
        <div className="bg-[#F3F4F6] mt-[49px] py-[21px] px-[50px] rounded-[10px] flex justify-between">
          <div>
            <p className="text-[#1F1F1F] text-[18px]">
              Contributeurs
              <span className="text-[#6B7280] ml-[8px]">{`${members.length} personnes`}</span>
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center flex-wrap gap-y-3 max-w-[700px]">
              <CircleTag name={ownerName} isOwner={true}/>
              <NameTag isOwner={true}/>
            {
              members && members.map((m,i) => 
                  <div className="flex" key={m.id}>
                    <CircleTag name={m.user.name} isOwner={false}/>
                    <NameTag isOwner={false} name={m.user.name}/>
                  </div>
                )
            } 
            </div>
          </div>
        </div>
      </section>
    )
}