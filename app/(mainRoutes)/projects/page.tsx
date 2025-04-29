"use client";
import { ProjectTable } from "@/components/projects/projects-overview-table";

const ProjectPage = () => {
  return (
    <div className="flex flex-col w-full h-full p-4 gap-4">
      <div className="flex h-full w-full items-center justify-center">
        <ProjectTable width="w-full" height="h-[95%]" />
      </div>
    </div>
  );
};

export default ProjectPage;
