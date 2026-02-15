import { useEffect, useState } from "react";
import { CircleTag } from "../../Collaborators/CircleTag";
import { NameTag } from "../../Collaborators/NameTag";
import { Tag } from "../../Dashboard/Tasks/Tag";
import { ProjectComments } from "./ProjectComments";
import { deleteTask } from "@/app/actions/task";
import { useRouter } from "next/navigation";
import { TaskInterface, TaskUserAssigned } from "@/app/types/globals";
import { useAlert } from "@/app/context/AlertContext";

export function ProjectTaskItem(
  {
    task, 
    onEdit, 
    onDeleteTask,
    isUserProject, 
    userIsContributor
  }:
  {
    task:TaskInterface,
    onEdit:()=>void,
    onDeleteTask:()=>void,
    isUserProject:boolean,
    userIsContributor:boolean
  }){
    
    const [showButtons,setShowButtons] = useState(false)
    const [deleted,setDeleted] = useState(false)
    const router = useRouter()
    const setAlert = useAlert()


    const removeTask = async ()=>{
        const response = await deleteTask(task.projectId ?? "",task.id ?? "")
        if (response?.success) {
            onDeleteTask()
            setDeleted(true)
            setAlert({type:"success",message:"La tâche a été supprimée avec succès."})
            router.refresh()
          }else{
              const errors = response?.errors || response?.errorMessage
              if (errors) {
                  setAlert({type:"error",message:errors})
              }
          }
    }


    const onEditClick = ()=>{
        setShowButtons(false)
        onEdit()
    }

    useEffect(()=>{
      if (showButtons) {
          const timeout = setTimeout(()=>{
            setShowButtons(false)
          },3000)

          return () => clearTimeout(timeout)
      }else{
        return
      }
    },[showButtons])

    useEffect(()=>{

    },[])
    
    
    return !deleted && (
                <li className="pl-[40px] pr-[35px] py-[25px] border border-[#E5E7EB] bg-[#FFFFFF] rounded-[10px] max-md:px-5 max-md:pt-1 max-sm:px-2">
                  <div className="flex items-start justify-between max-md:flex-col-reverse">
                    <div className="flex flex-col gap-[7px]">
                      <div className="flex gap-[8px] max-md:flex-col-reverse">
                        <h3 className="text-[18px] font-semibold text-[#000000] manrope-600">{task.title}</h3>
                        <Tag type={task.status}/>
                      </div>
                      <p className="text-[#6B7280] text-[14px]">{task.description}</p>
                    </div>
                  { (isUserProject || userIsContributor) &&  
                      <div className="relative max-md:self-end max-md:mt-2 ">
                            <button onClick={()=>setShowButtons(!showButtons)} className="w-[57px] h-[57px] max-md:w-[42px] max-md:h-[42px] cursor-pointer border border-[#E5E7EB] rounded-[10px] text-[#6B7280] font-bold text-[22px] bg-[#FFFFFF] max-md:float-right ">...</button>
                            {showButtons && 
                              <div className="absolute flex flex-col justify-between border border-[#1b1c1d] h-[120px] bg-[#FFFFFF] w-[150px] right-5 p-5 top-5 rounded-[10px]">
                                <button onClick={removeTask} className="block w-full font-semibold text-red-600  cursor-pointer">Supprimer</button>
                               { <button onClick={onEditClick}  className={`block w-full font-semibold   cursor-pointer text-green-600`}>Modifier</button>}
                              </div>
                            }
                      </div>}
                  </div>
                  <div>
                    <p className="flex items-center gap-[4px] text-[#6B7280] text-[12px] mt-[32px]">Échéance : 
                      <span className="text-[#1F1F1F] flex items-center gap-[8.38px]">
                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.42285 0C4.10746 0 3.8457 0.261761 3.8457 0.577148V1.17871C1.39505 1.38897 0 2.96789 0 5.57715V12.1152C0 14.9229 1.61522 16.538 4.42285 16.5381H10.5771C13.3847 16.538 15 14.9229 15 12.1152V5.57715C15 2.96794 13.6049 1.38901 11.1543 1.17871V0.577148C11.1543 0.261782 10.8925 3.47543e-05 10.5771 0C10.2618 0 10 0.261761 10 0.577148V1.15332H5V0.577148C5 0.261793 4.7382 5.25452e-05 4.42285 0ZM13.8457 12.1152C13.8457 14.3152 12.777 15.3847 10.5771 15.3848H4.42285C2.22293 15.3847 1.15332 14.3152 1.15332 12.1152V6.60742H13.8457V12.1152ZM10.4844 11.4082C10.1998 11.2852 9.86186 11.3541 9.64648 11.5693C9.61572 11.6078 9.57679 11.6461 9.55371 11.6846C9.52294 11.7307 9.49976 11.7771 9.48438 11.8232C9.46134 11.8693 9.44616 11.9159 9.43848 11.9697C9.43082 12.0157 9.42288 12.0693 9.42285 12.1152C9.42285 12.3152 9.50802 12.516 9.64648 12.6621C9.7926 12.8003 9.99256 12.8848 10.1924 12.8848C10.2923 12.8848 10.3922 12.8616 10.4844 12.8232C10.5765 12.7848 10.6615 12.7312 10.7383 12.6621C10.8075 12.5852 10.8619 12.5081 10.9004 12.4082C10.9389 12.3159 10.9619 12.2152 10.9619 12.1152C10.9618 11.9153 10.8767 11.7154 10.7383 11.5693C10.6614 11.5001 10.5766 11.4466 10.4844 11.4082ZM10.0381 8.66895C9.99208 8.67665 9.94639 8.69283 9.90039 8.71582C9.85434 8.73117 9.80777 8.75352 9.76172 8.78418C9.72332 8.8149 9.68489 8.84623 9.64648 8.87695C9.61572 8.9154 9.57679 8.95374 9.55371 8.99219C9.52294 9.03834 9.49976 9.08471 9.48438 9.13086C9.46134 9.17696 9.44616 9.22343 9.43848 9.26953C9.43081 9.32318 9.42288 9.3692 9.42285 9.42285C9.42285 9.62285 9.50802 9.82357 9.64648 9.96973C9.7926 10.108 9.99256 10.1924 10.1924 10.1924C10.2923 10.1924 10.3922 10.1693 10.4844 10.1309C10.5765 10.0925 10.6614 10.0388 10.7383 9.96973C10.8075 9.89286 10.8619 9.80804 10.9004 9.71582C10.9389 9.62351 10.9619 9.52285 10.9619 9.42285C10.9618 9.22293 10.8767 9.02305 10.7383 8.87695C10.6614 8.80777 10.5766 8.75426 10.4844 8.71582C10.3459 8.65431 10.1919 8.63818 10.0381 8.66895ZM8.0459 8.87695C7.83052 8.66172 7.48485 8.59282 7.20801 8.71582C7.10806 8.75426 7.03098 8.80778 6.9541 8.87695C6.8157 9.02304 6.73055 9.22294 6.73047 9.42285C6.73047 9.4767 6.7384 9.5233 6.74609 9.57715C6.75379 9.62325 6.76894 9.66972 6.79199 9.71582C6.80733 9.76177 6.83074 9.80757 6.86133 9.85352C6.8921 9.89198 6.92333 9.93126 6.9541 9.96973C7.03091 10.0388 7.10815 10.0925 7.20801 10.1309C7.30023 10.1693 7.4001 10.1924 7.5 10.1924C7.69983 10.1924 7.89978 10.108 8.0459 9.96973C8.07667 9.93126 8.1079 9.89198 8.13867 9.85352C8.16927 9.80756 8.19266 9.76177 8.20801 9.71582C8.23106 9.66972 8.2462 9.62325 8.25391 9.57715C8.2616 9.5233 8.26953 9.4767 8.26953 9.42285C8.26949 9.32299 8.2464 9.22305 8.20801 9.13086C8.16955 9.03855 8.11513 8.95388 8.0459 8.87695ZM10 2.88477C10.0001 3.20009 10.2618 3.46191 10.5771 3.46191C10.8925 3.46188 11.1542 3.20007 11.1543 2.88477V2.33789C12.9266 2.51306 13.806 3.53533 13.8418 5.4541H1.15723C1.193 3.53528 2.07336 2.51303 3.8457 2.33789V2.88477C3.84578 3.20009 4.10751 3.46191 4.42285 3.46191C4.73815 3.46186 4.99992 3.20006 5 2.88477V2.30762H10V2.88477Z" fill="#1F1F1F"/>
                        </svg>
                        {new Date(task.dueDate).toLocaleDateString("fr-FR",{
                          day:"numeric",month:"long"
                        })}
                      </span>
                    </p>
                  </div>
                  <div className="mt-[30px]">
                    <div className="flex items-center gap-[8px] text-[#6B7280] text-[12px] flex-wrap">Assigné à : 
                      {task?.assignees && task?.assignees?.map((a:TaskUserAssigned) => {
                        return (
                           <span className="flex" key={a.id}>
                            <CircleTag name={a.user.name} isOwner={false}/>
                            <NameTag name={a.user.name} isOwner={ false}/>
                          </span>
                        )
                      }
                       
                      ) }
                    </div>
                  </div>
                  <hr className="mt-[24px]  border-[#E5E7EB]" />
                      <ProjectComments comments={task?.comments || []} task={task}/>
                </li>
    )
}