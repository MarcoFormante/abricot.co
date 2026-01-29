import { Button } from "@/app/components/Button/Button";
import { CircleTag } from "@/app/components/Collaborators/CircleTag";
import { NameTag } from "@/app/components/Collaborators/NameTag";

export default async function SingleProject({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const param = await params;

  return (
    <main>
      <div className="mt-[78px] pl-[44px] flex justify-between pr-[113px] items-end">
        <div className="flex gap-[16px]">
          <button className="w-[57px] h-[57px] rounded-[10px] border border-[#E5E7EB] bg-[#FFFFFF] flex justify-center items-center cursor-pointer">
            <svg
              width="16"
              height="8"
              viewBox="0 0 16 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.146447 3.32845C-0.0488155 3.52372 -0.0488155 3.8403 0.146447 4.03556L3.32843 7.21754C3.52369 7.4128 3.84027 7.4128 4.03553 7.21754C4.2308 7.02228 4.2308 6.7057 4.03553 6.51043L1.20711 3.68201L4.03553 0.85358C4.2308 0.658318 4.2308 0.341735 4.03553 0.146473C3.84027 -0.0487893 3.52369 -0.0487893 3.32843 0.146473L0.146447 3.32845ZM0.5 3.68201V4.18201H15.5V3.68201V3.18201H0.5V3.68201Z"
                fill="black"
              />
            </svg>
          </button>
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[14px] mt-[4px]">
              <h1 className="text-[24px] text-[#1F1F1F] font-semibold leading-[100%]">
                Nom du projet
              </h1>
              <button className="cursor-pointer text-[#D3590B] text-[14px] underline">
                Modifier
              </button>
            </div>
            <p className="leading-[100%] text-[18px] text-[#6B7280]">{`Développement de la nouvelle version de l'API REST avec authentification JWT`}</p>
          </div>
        </div>

        <div className="flex gap-[12px]">
          <div className="w-[141px] h-[50px]">
            <Button type={"btn-softBlack"} label="Créer une tâche" />
          </div>
          <div className="w-[90px] h-[50px]">
            <Button
              type={"btn-orange"}
              label={
                <div className="flex justify-center items-center gap-[10px]">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.24333 0.574802C8.60336 -0.19163 9.69352 -0.19163 10.0535 0.574802L12.351 5.46554C12.4501 5.67658 12.6199 5.84634 12.8309 5.94548L17.7216 8.2429C18.4881 8.60293 18.4881 9.69309 17.7216 10.0531L12.8309 12.3505C12.6199 12.4497 12.4501 12.6194 12.351 12.8305L10.0535 17.7212C9.69352 18.4876 8.60336 18.4876 8.24333 17.7212L5.9459 12.8305C5.84677 12.6194 5.677 12.4497 5.46597 12.3505L0.575229 10.0531C-0.191203 9.69309 -0.191203 8.60293 0.575229 8.2429L5.46597 5.94547C5.677 5.84634 5.84677 5.67658 5.9459 5.46554L8.24333 0.574802Z"
                      fill="white"
                    />
                  </svg>
                  IA
                </div>
              }
            />
          </div>
        </div>
      </div>

      <section className="px-[112px]">
        <div className="bg-[#F3F4F6] mt-[49px] py-[21px] px-[50px] rounded-[10px] flex justify-between">
          <div>
            <p className="text-[#1F1F1F] text-[18px]">
              Contributeurs{" "}
              <span className="text-[#6B7280] ml-[8px]">{"3 personnes"}</span>
            </p>
          </div>

          <div>
            <div className="flex items-center">
                <CircleTag name={"Adine Deste"} isOwner={true}/>
                <NameTag isOwner={true}/>

                <CircleTag name={"Bertrand Dupont"} isOwner={true}/>
                <NameTag isOwner={false} name="Bertrand Dupont"/>
           
              <span className="border border-[#FFFFFF] bg-[#E5E7EB] text-[#0F0F0F] text-[10px]  rounded-full px-[5px] py-[9px] w-[27px] h-[27px] flex justify-center items-center">
                AD
              </span>

              <div className="ml-[5px] mr-[4px] bg-[#E5E7EB] text-[14px] text-[#6B7280] min-w-[109px] px-[16px] h-[25px] rounded-[50px] flex justify-center items-center">
                Anne Dupont
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
