import { ChangeEventHandler } from "react"

export function Input({label,type,name,placeholder,gap,required,onChange,value}:{
    label?:string,
    type: "text" | "password" | "search" | "date",
    name:string,
    placeholder?:string,
    gap?:string,
    required?:boolean,
    onChange?:ChangeEventHandler<HTMLInputElement>,
    value?:string 
}){
    return(
        <div className={`flex flex-col w-full gap-[${gap}]`}>
            <label hidden={!label} htmlFor={name} className="font-normal text-[14px]">{label || placeholder}</label>
            <input onChange={onChange} required={required} placeholder={placeholder} id={name} name={name} type={type} value={value ?? ""} className={`h-13.25 pl-[17px] rounded-sm bg-[#FFFFFF] border border-[#E5E7EB] pl-1.5 w-full ${type === "search" ? "pl-[32px] text-[14px] h-[63px] " : ""}`} />
        </div>
    )   
}