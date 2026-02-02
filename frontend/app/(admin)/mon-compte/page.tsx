import { Button } from "@/app/components/Button/Button";
import { Input } from "@/app/components/Input/Input";

export default function MonCompte(){
    return (
        <main className="px-25 pb-[78px]">
           <div className="mt-[57px] bg-[#FFFFFF] px-[49px] py-[40px] rounded-[10px]">
                <div>
                    <h1 className="text-[18px] text-[#1F1F1F] font-semibold">Mon compte</h1>
                    <p className="mt-[8px] text-[#6B7280]">Amélie Dupont</p>
                </div>
                <form className="flex flex-col gap-[24px] mt-[41px]">
                    <Input name="name" label="Nom" type={"text"} gap={"7px"} value="Dupont" />
                    <Input name="surname" label="Prénom" type={"text"} gap={"7px"} value="Amelie" />
                    <Input name="email" label="Email" type={"email"} gap={"7px"} value="a.dupont@mail.com" />
                    <Input name="password" label="Mot de passe" type={"password"} gap={"7px"} value="58apenjksjabdSj!" />

                    <div className="w-[242px] h-[50px] mt-[17px]">
                        <Button type={"btn-softBlack"} label="Modifier les informations"/>
                    </div>
                </form>
           </div>
        </main>
    )
}