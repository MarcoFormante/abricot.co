export function CircleTag({name,isOwner}:{
    name?:string,
    isOwner:boolean,
}){
 
    return (
        <span className={`uppercase rounded-full bg-[${isOwner === true ? "#FFE8D9" : "#E5E7EB"}] text-[10px] text-[#0F0F0F] px-[5px] py-[9px] w-[27px] h-[27px] flex justify-center items-center`}>
            {name?.split(" ").map((w:string) => w.at(0) )}
        </span>
    )
}