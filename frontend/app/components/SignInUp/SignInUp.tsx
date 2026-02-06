import Image from "next/image";
import { Logo } from "../Logo/Logo";
import { ConnectionForm } from "../ConnectionForm/ConnectionForm";
import signinImg from "../../assets/Signin.webp"
import Link from "next/link";

export function SignInUp({isRegisterPage}:{
    isRegisterPage:boolean
}){

    return (
         <div className="flex min-h-screen w-full">
          <div className="w-140.5 flex flex-col justify-center items-center gap-50.5">
              <div>
                <Logo fill={"#D3590B"} width="252" height="32.17"/>
              </div>
              <div>
                 <ConnectionForm isRegisterPage={isRegisterPage}/>
              </div>
              <div>
                <p className="text-[14px]">
                    {isRegisterPage ? "Déjà inscrit ?" : "Pas encore de compte ?"}
                    <Link 
                        className="text-[#D3590B] underline underline-offset-3 ml-2" 
                        href={isRegisterPage ? "/" :  "/inscription"}>
                        {isRegisterPage ? "Se connecter" :" Créer un compte" }
                    </Link></p> 
              </div>
          </div>
          <div className="max-w-219.5">
              <Image 
                src={signinImg} 
                alt="Abricot" 
                className="object-cover h-full object-right"
              />
          </div>
      </div>
    )
}