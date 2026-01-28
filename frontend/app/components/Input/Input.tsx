export function Input({label,type,name,placeholder}:{
    label?:string,
    type: "text" | "password" | "search",
    name:string,
    placeholder:string
}){
    return(
        <div className="flex flex-col w-full">
            <label htmlFor={name} className="font-normal text-[14px]">{label}</label>
            <input placeholder={placeholder} type={type} className={`h-13.25 rounded-sm bg-[#FFFFFF] border border-[#E5E7EB] pl-1.5 w-full ${type === "search" ? "pl-[32px] text-[14px] h-[63px]" : ""}`} name={name} id={name} />
        </div>
    )   
}