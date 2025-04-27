import { ProjectTable } from "@/components/projects/projects-overview-table";
import React from "react";

const ProjectPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <ProjectTable width="w-[95%]" height="h-[95%]" />
    </div>
  );
};

export default ProjectPage;
