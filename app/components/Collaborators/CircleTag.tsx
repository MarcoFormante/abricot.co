export function CircleTag({name,isOwner,classname,rightValue}:{
    name?:string,
    isOwner:boolean,
    classname?:string,
    rightValue?:number
}){
 
    return (
        <span title={name} data-right={rightValue} className={`circleTag uppercase rounded-full bg-[${isOwner === true ? "#FFE8D9" : "#E5E7EB"}] text-[10px] text-[#0F0F0F] px-[5px] py-[9px] w-[27px] h-[27px] flex justify-center items-center ${classname ?? ""}`}>
            {name?.split(" ").map((w:string) => w.at(0) )}
        </span>
    )
}