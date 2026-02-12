import { TaskStatusType } from "@/app/types/globals"

export function Tag({type}:{
    type:TaskStatusType
}){
    return (
        <span className={`${type === "TODO" ? "text-[#EF4444] bg-[#FFE0E0]" : type === "IN_PROGRESS" ? "text-[#E08D00] bg-[#FFF0D7]" : "text-[#27AE60] bg-[#F1FFF7]"} task-tag  w-[75px] min-w-[75px] text-center pt-[4px] pb-[2px]  rounded-[50px] text-[14px] block`}>
            {
                type === "TODO" ? "À faire" : type === "IN_PROGRESS" ? "En cours" : "Terminée"
            }
        </span>
    )
}