export function Input({label,type,name,placeholder,gap,required}:{
    label?:string,
    type: "text" | "password" | "search" | "date",
    name:string,
    placeholder?:string,
    gap?:string,
    required?:boolean
}){
    return(
        <div className={`flex flex-col w-full gap-[${gap}]`}>
            <label hidden={!label} htmlFor={name} className="font-normal text-[14px]">{label || placeholder}</label>
            <input required={required} placeholder={placeholder} id={name} name={name} type={type} className={`h-13.25 rounded-sm bg-[#FFFFFF] border border-[#E5E7EB] pl-1.5 w-full ${type === "search" ? "pl-[32px] text-[14px] h-[63px] " : ""}`} />
        </div>
    )   
}