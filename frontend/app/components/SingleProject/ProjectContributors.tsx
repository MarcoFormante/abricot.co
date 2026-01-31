import { CircleTag } from "../Collaborators/CircleTag";
import { NameTag } from "../Collaborators/NameTag";

export function ProjectContributors(){
    return (
      <section className="px-[112px]">
        <div className="bg-[#F3F4F6] mt-[49px] py-[21px] px-[50px] rounded-[10px] flex justify-between">
          <div>
            <p className="text-[#1F1F1F] text-[18px]">
              Contributeurs
              <span className="text-[#6B7280] ml-[8px]">{"3 personnes"}</span>
            </p>
          </div>

          <div>
            <div className="flex items-center">
                <CircleTag name={"Adine Deste"} isOwner={true}/>
                <NameTag isOwner={true}/>

                <CircleTag name={"Bertrand Dupont"} isOwner={false}/>
                <NameTag isOwner={false} name="Bertrand Dupont"/>

                <CircleTag name={"Anne Dupont"} isOwner={false}/>
                <NameTag isOwner={false} name="Anne Dupont"/>
            </div>
          </div>
        </div>
      </section>
    )
}