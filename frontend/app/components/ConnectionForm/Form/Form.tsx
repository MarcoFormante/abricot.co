import React from "react";
import { Input } from "../../Input/Input";

export function Form({children}:{children:React.ReactNode}){
    return (
        <form className="flex flex-col gap-7.25" method="POST">
            <Input label="Email" type="text" name="email"/>
            <Input label="Mot de passe" type="password" name="password"/>
            <div className="h-12.5 px-[32.5px]">
                {children}
            </div>
        </form>
    )
}