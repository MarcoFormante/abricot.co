'use client'
import { useState } from "react";
import { Button } from "../Button/Button";
import { ModaleContainer } from "../Modale/ModaleContainer";
import { NewTask } from "../Modale/NewTask";
import { NewTaskAI } from "../Modale/NewTaskAi";
import { useRouter } from "next/navigation";
import { EditProject } from "../Modale/EditProject";
import { MemberInterface } from "@/app/types/globals";



export function ProjectHeader({id,name,description,members,isUserProject}:{
  id:string,
  name:string,
  description:string,
  members:MemberInterface[],
  isUserProject:boolean
}){

  const [showModale,setShowModale] = useState({type:""})
  const router = useRouter()

  const navigateBack = ()=>{
      router.back()
  }

    return (
      <div className="mt-[78px] pl-[44px] flex justify-between pr-[113px] items-end max-lg:px-5 max-lg:mt-5 max-lg:flex-col max-lg:gap-10 max-sm:px-2">
        <div className="flex gap-[16px] max-lg:flex-col w-full">
          <button onClick={navigateBack} aria-label="retour" className="w-[57px] h-[57px] min-w-[57px] rounded-[10px] border border-[#E5E7EB] bg-[#FFFFFF] flex justify-center items-center cursor-pointer">
            <svg
              aria-hidden="true"
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
          <div className="flex flex-col gap-[20px] min-lg:w-[50vw] max-lg:w-[80vw]">
            <div className="flex items-center gap-[14px] mt-[4px]  max-sm:items-start max-sm:flex-col-reverse min-lg:w-[50vw] max-lg:w-[80vw]">
              <h1 className=" text-[24px] text-[#1F1F1F] font-semibold leading-[100%] manrope-600 wrap-break-word min-lg:w-[50vw] max-lg:w-[80vw] max-w-max">
                {name}
              </h1>
             {isUserProject &&  <button onClick={()=>setShowModale({type:"editProject"})} className="cursor-pointer text-[#BD4F0A] text-[14px] underline">
                Modifier
              </button>}
            </div>
            <p className="leading-[100%] text-[18px] text-[#6B7280] max-lg:pr-2 min-lg:max-w-[60vw] wrap-break-word pr-20">{description}</p>
          </div>
        </div>

        <div className="flex gap-[12px] max-md:self-center">
          <div className="w-[141px] h-[50px]">

          { showModale?.type && 
            <ModaleContainer 
              setShowModale={setShowModale} 
              showModale={showModale}
              >
              {
                showModale.type === "newTask" 
                ? <NewTask members={members} closeModale={()=>setShowModale({type:""})}/>
                : showModale.type === "newAiTask" ? <NewTaskAI members={members}  />
                : <EditProject closeModale={()=>setShowModale({type:""})}  members={members} project={{name,description,members,id}}/>
              }
            </ModaleContainer>
          }
           
            <Button type={"btn-softBlack"} label="Créer une tâche" onClick={()=>setShowModale({type:"newTask"})} />
          </div>
          <div className="w-[90px] h-[50px]">
            <Button
              onClick={()=>setShowModale({type:"newAiTask"})}
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
    )
}