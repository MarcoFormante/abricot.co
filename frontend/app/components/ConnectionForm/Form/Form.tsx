import { Input } from "../../Input/Input";

export function Form({ children,onSubmit }: 
    { 
        children: React.ReactNode 
        onSubmit:React.FocusEventHandler<HTMLFormElement>
    }){

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-7.25">
            <Input label="Email" type="email" name="email" required />
            <Input label="Mot de passe" type="password" name="password" required />
            <div className={`h-12.5 px-[32.5px]`}>
                {children}
            </div>
        </form>
    )
}