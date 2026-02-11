import { AlertData } from "@/app/types/globals"


export function Alert({alert,setAlert}:{
    alert:AlertData | null
    setAlert: React.Dispatch<React.SetStateAction<AlertData | null>>
  
}){
    return alert && alert.message && (
        <div className={`alert rounded-[10px]  top-0 left-[50%] translate-x-[-50%] max-w-[1440px] m-auto fixed p-5 border bg-[#FFFFFF] w-full text-white ${alert.type === "error" ? "bg-red-800" : "bg-green-600"}`}>
            <button className="cursor-pointer float-right" aria-label="Fermer" onClick={()=>setAlert(null)}>X</button>
            <div>
                {Array.isArray(alert.message) ? 
                    alert.message.map((m,i:number) => <p key={m.message[0] + i}>{m.message}</p>) : 
                    <p>{alert.message}</p>
                }
            </div>
        </div>
    )
}