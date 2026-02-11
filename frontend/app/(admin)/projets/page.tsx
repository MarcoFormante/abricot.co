/* eslint-disable @typescript-eslint/no-explicit-any */
import { AdminMainTitle } from "@/app/components/Dashboard/AdminMainTitle/AdminMainTitle";
import { Project } from "@/app/components/Project/Project";
import { getProjects } from "@/app/actions/project";
import { CreateProjectButton } from "@/app/components/Dashboard/CreateProjectButton/CreateProjectButton";

export default async function Projets(){
    const data = await getProjects()
    
    return(
        <main className="pt-[89px] px-25 pb-[78px]">
            <div className="flex justify-between">
                <AdminMainTitle title={"Mes projets"} text={"Gérez vos projets "}/>
                <CreateProjectButton />
            </div>

            <section className="mt-[64px]">
                <ul className="grid grid-cols-3 gap-[14px] text-[#1F1F1F]">
                    {data.projects && data.projects.map((project:any)=>
                        <Project key={project.id} project={project}/>
                    )}
                </ul>
            </section>
        </main>    
        )
}