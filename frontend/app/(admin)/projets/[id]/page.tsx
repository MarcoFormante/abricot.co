

import { ProjectHeader } from "@/app/components/SingleProject/ProjectHeader";
import { ProjectContributors } from "@/app/components/SingleProject/ProjectContributors";
import { ProjectTasks } from "@/app/components/SingleProject/ProjectTasks/ProjectTasks";
import {getProjectByID} from "@/app/actions/project";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export default async function SingleProject({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const param = await params;
  const project = await getProjectByID(param.id);

  const userInfo =(await cookies()).get("user_info")?.value
  const userParsed = JSON.parse(userInfo as string)

  if (!project.data) {
    notFound()
  }
  
  return (
    <main className="pb-[78px]">
      {project?.data && (
        <>
            <ProjectHeader 
              id={param.id} 
              name={project.data.name} 
              description={project.data.description} 
              members={project.data.members}
              isUserProject={project.data.owner.id === userParsed.id}
            /> 
            <ProjectContributors 
              members={project.data.members}
              owner={project.data.owner}
            />
            <ProjectTasks 
              tasks={project.tasks} 
              projectMembers={project.data.members} 
              isUserProject={project.data.owner.id === userParsed.id}
            />
          </>
      )}
    </main>
  );
}