export function NameTag({name,isOwner}:{
    name?:string,
    isOwner:boolean,
    
}){


    return (
        <div className={` capitalize ml-[5px] mr-[4px] bg-[${isOwner === true ? "#FFE8D9" : "#E5E7EB"}] text-[14px] text-[${isOwner === true ? "#D3590B" : "#6B7280"}] min-w-[109px] h-[25px] rounded-[50px] flex justify-center items-center px-[16px]`}>
            {isOwner ? "Propriétaire" : name}
        </div>
    )
}
