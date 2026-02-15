import { getUserProfile } from "@/app/actions/auth";
import { UserForm } from "@/app/components/monCompte/UserForm";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Mon Compte',
};


export default async function MonCompte(){
    const userProfile = await getUserProfile()
    
    return (
        <main className="px-0 md:px-25 pb-[78px]">
            <UserForm user={userProfile?.user}/>
        </main>
    )
}