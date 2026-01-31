import { ProjectHeader } from "@/app/components/SingleProject/ProjectHeader";
import { ProjectContributors } from "@/app/components/SingleProject/ProjectContributors";
import { ProjectTasks } from "@/app/components/SingleProject/ProjectTasks/ProjectTasks";

export default async function SingleProject({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const param = await params;

  return (
    <main className="pb-[78px]">
      <ProjectHeader/> 
      <ProjectContributors/>
      <ProjectTasks/>
    </main>
  );
}
