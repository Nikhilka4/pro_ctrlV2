import React from "react";

const formatDisplayTitle = (title: string) => {
  return title
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const DetailedDocumentation = async ({
  params,
}: {
  params: Promise<{ documentProjectTitle: string }>;
}) => {
  const rawProjectTitle = (await params).documentProjectTitle;
  const projectTitle = formatDisplayTitle(rawProjectTitle);

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Detailed Documentation for {projectTitle}
      </h1>
      <p className="mt-4">
        This is the detailed documentation page for the project titled:{" "}
        {projectTitle}
      </p>
      {/* Add more detailed documentation content here */}
    </div>
  );
};

export default DetailedDocumentation;

