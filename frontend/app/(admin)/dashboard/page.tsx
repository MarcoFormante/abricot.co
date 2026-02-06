import { AdminMainTitle } from "@/app/components/Dashboard/AdminMainTitle/AdminMainTitle";
import { Button } from "@/app/components/Button/Button";

import TasksSection from "@/app/components/Dashboard/Tasks/TasksSection";
import getDashboardTasks from "@/app/actions/dashboard";
import { cookies } from "next/headers";

export default async function Dashboard() {

    const userInfo =(await cookies()).get("user_info")?.value
    const userParsed = JSON.parse(userInfo as string)

    const response = await getDashboardTasks()
    const tasksResponse = await response.data
    
    return (
        <main className="pt-[89px] px-25 pb-[78px]">
            <div className="flex justify-between">
                <AdminMainTitle title={"Tableau de bord"} text={`Bonjour ${userParsed.name}, voici un aperçu de vos projets et tâches`}/>
                <div className="h-[50px] self-end">
                    <div className="w-[181px] h-[50px]">
                        <Button type={"btn-black"} label="+ Créer un projet"/>
                    </div>
                </div>
            </div>

           <TasksSection tasks={tasksResponse?.data?.tasks || []}/>
        </main>
    )
}