import { AdminMainTitle } from "@/app/components/Dashboard/AdminMainTitle/AdminMainTitle";
import { Project } from "@/app/components/Project/Project";
import { getProjects } from "@/app/actions/project";
import { CreateProjectButton } from "@/app/components/Dashboard/CreateProjectButton/CreateProjectButton";
import { Metadata } from "next";
import { ProjectInterface } from "@/app/types/globals";


export const metadata: Metadata = {
  title: 'Mes Projets',
  description:"Accédez à la liste de vos projets collaboratifs. Gérez vos équipes, suivez l'avancement des tâches et organisez vos priorités en tant qu'administrateur ou contributeur."
};

export default async function Projets(){
    const data = await getProjects()

    
    return(
        <main className="pt-[89px] px-5 lg:px-25 pb-[78px] max-sm:px-2 max-md:pt-[40px]">
            <div className="flex flex-col justify-center gap-8 lg:flex-row lg:justify-between">
                <AdminMainTitle title={"Mes projets"} text={"Gérez vos projets "}/>
                <CreateProjectButton />
            </div>

          {  data?.projects?.length > 0  ? 
            <section className="mt-[64px]">
                <ul className="grid grid-cols-3 max-[1280px]:grid-cols-2 max-[1280px]:place-items-center gap-[14px]  text-[#1F1F1F] max-md:grid-cols-1 ">
                    {  data.projects.map((project:ProjectInterface)=>
                        <Project key={project.id} project={project}/>
                    )}
                </ul>
            </section>
              : <p className="text-center mt-20 font-semibold text-xl">Aucun projet disponible</p>}
        </main>    
        )
}