import { ProjectHeader } from "@/app/components/SingleProject/ProjectHeader";
import { ProjectContributors } from "@/app/components/SingleProject/ProjectContributors";
import { ProjectTasks } from "@/app/components/SingleProject/ProjectTasks/ProjectTasks";
import {getProjectByID} from "@/app/actions/project";

export default async function SingleProject({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const param = await params;
  const project = await getProjectByID(param.id)
  
  return (
    <main className="pb-[78px]">
    {  project && 
      <>
        <ProjectHeader id={param.id} name={project.data.name} description={project.data.description}/> 
        <ProjectContributors ownerName={project.data.owner.name} members={project.data.members}/>
        <ProjectTasks tasks={project.tasks}/>
       </>
    }
    </main>
  );
}
