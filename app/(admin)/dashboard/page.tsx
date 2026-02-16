import { AdminMainTitle } from "@/app/components/Dashboard/AdminMainTitle/AdminMainTitle";
import TasksSection from "@/app/components/Dashboard/Tasks/TasksSection";
import getDashboardTasks from "@/app/actions/dashboard";
import { cookies } from "next/headers";
import { CreateProjectButton } from "@/app/components/Dashboard/CreateProjectButton/CreateProjectButton";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Tableau de bord',
  description:"Visualisez vos priorités en un clin d'œil. Accédez à vos tâches urgentes, gérez votre planning sur Kanban et suivez l'état d'avancement de vos projets assignés.",
};


export default async function Dashboard() {

    const userInfo = (await cookies()).get("user_info")?.value
    const userParsed = JSON.parse(userInfo as string)

    const response = await getDashboardTasks()
    const tasks = response?.tasks
    
    
    return (
        <main className="pt-[40px] px-5 lg:px-25 pb-[78px] max-sm:px-2">
            <div className="flex flex-col justify-center gap-8 lg:flex-row lg:justify-between">
                <AdminMainTitle title={"Tableau de bord"} text={`Bonjour ${userParsed?.name}, voici un aperçu de vos projets et tâches`}/>
                <CreateProjectButton />
            </div>

           <TasksSection tasks={tasks || []} errorMessage={response?.errorMessage}/>
        </main>
    )
}