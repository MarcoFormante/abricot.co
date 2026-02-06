import { getUserProfile } from "@/app/actions/auth";
import { UserForm } from "@/app/components/monCompte/UserForm";

export default async function MonCompte(){
    const profile = await getUserProfile()

    return (
        <main className="px-25 pb-[78px]">
            <UserForm user={profile?.data?.user}/>
        </main>
    )
}