export function Tag({type}:{
    type:"to-do" | "in-progress" | "done"
}){
    return (
        <span className={`${type === "to-do" ? "text-[#EF4444] bg-[#FFE0E0]" : type === "in-progress" ? "text-[#E08D00] bg-[#FFF0D7]" : "text-[#27AE60] bg-[#F1FFF7]"} task-tag  w-[75px] min-w-[75px] text-center pt-[4px] pb-[2px]  rounded-[50px] text-[14px] block`}>
            {
                type === "to-do" ? "À faire" : type === "in-progress" ? "En cours" : "Terminée"
            }
        </span>
    )
}