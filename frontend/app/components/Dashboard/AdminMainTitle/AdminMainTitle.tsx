export function AdminMainTitle({title,text}:{
    title:string,
    text:string
}){
    return (
        <div className="flex flex-col gap-3.5">
            <h1 className="text-[#1F1F1F] text-[22px] font-semibold">{title}</h1>
            <p className="text-[18px] text-[#000000] w-[85%] lg:w-full">{text}</p>
        </div>
    )
}