import { AdminMainTitle } from "@/app/components/Dashboard/AdminMainTitle/AdminMainTitle";
import TasksSection from "@/app/components/Dashboard/Tasks/TasksSection";
import getDashboardTasks from "@/app/actions/dashboard";
import { cookies } from "next/headers";
import { CreateProjectButton } from "@/app/components/Dashboard/CreateProjectButton/CreateProjectButton";

export default async function Dashboard() {

    const userInfo =(await cookies()).get("user_info")?.value
    const userParsed = JSON.parse(userInfo as string)

    const response = await getDashboardTasks()
    const tasks = response.tasks
    
    
    return (
        <main className="pt-[89px] px-25 pb-[78px]">
            <div className="flex justify-between">
                <AdminMainTitle title={"Tableau de bord"} text={`Bonjour ${userParsed.name}, voici un aperçu de vos projets et tâches`}/>
                <CreateProjectButton />
            </div>

           <TasksSection tasks={tasks || []} errorMessage={response?.errorMessage}/>
        </main>
    )
}