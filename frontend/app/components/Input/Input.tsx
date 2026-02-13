'use client'
import { ChangeEventHandler, useState } from "react"

export function Input({label,type,name,placeholder,gap,required,onChange,value,styles}:{
    label?:string,
    type: "text" | "password" | "search" | "date" | "email",
    name:string,
    placeholder?:string,
    gap?:string,
    required?:boolean,
    onChange?:ChangeEventHandler<HTMLInputElement>,
    value?:string,
    styles?:string
}){
    
    const [inputValue,setInputValue] = useState(value)
    

    return(
        <div className={`flex flex-col w-full gap-[${gap}]`}>
            <label hidden={!label} htmlFor={name} className="font-normal text-[14px]">{label || placeholder}</label>
            <input onChange={onChange} onInput={(e)=>setInputValue(e.currentTarget.value)} required={required} placeholder={placeholder} id={name} name={name} type={type} value={inputValue ?? ""} className={`h-13.25 pl-[17px] rounded-sm bg-[#FFFFFF] border border-[#E5E7EB] pl-1.5 w-full text-[#6B7280] ${type === "search" ? "pl-[32px] text-[14px] h-[63px] pr-10 [&::-webkit-search-cancel-button]:hidden " : ""} ${styles ? styles : ""}`} />
        </div>
    )   
}