export function Input({label,type,name}:{
    label:string,
    type: "text" | "password",
    name:string
}){
    return(
        <div className="flex flex-col">
            <label htmlFor={name} className="font-normal text-[14px]">{label}</label>
            <input type={type} className="h-13.25 rounded-sm bg-[#FFFFFF] border border-[#E5E7EB] pl-1.5" name={name} id={name} />
        </div>
    )
}