import { redirect } from "next/navigation";

export function NotAuthReturn(status:number){
    if (status && [401,403].includes(status)) {
        redirect("/")
    }
}