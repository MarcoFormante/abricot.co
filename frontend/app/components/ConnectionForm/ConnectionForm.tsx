import { Button } from "../Button/Button";
import { Form } from "./Form/Form";

export function ConnectionForm({isRegisterPage}:{
    isRegisterPage:boolean,
}){
    return (
        <div className="w-70.5 flex flex-col gap-7.5">
            <h1 className="text-[#D3590B] font-bold text-[40px] text-center">{isRegisterPage ? "Inscription" : "Connexion"}</h1>
            <div>
                <Form>
                    <Button label={isRegisterPage ?"S’inscrire": "Se connecter"} type="btn-softBlack"/>
                </Form>
            </div>
        </div>
    )
}