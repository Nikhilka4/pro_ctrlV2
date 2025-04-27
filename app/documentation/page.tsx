// import { DocumentationTable } from "@/components/documentation/documentation-overview";
// import React from "react";

// const DocumentationPage = () => {
//   return (
//     <div className="flex h-full w-full items-center justify-center">
//       <DocumentationTable width="w-[95%]" height="h-[95%]" />
//     </div>
//   );
// };

// export default DocumentationPage;

'use client';

import { DocumentationTable } from "@/components/documentation/documentation-overview";
import React from "react";

export default function DocumentationPage() {
  return (
    <div className="w-full flex flex-col items-start p-4 gap-6">
      <div className='w-full text-left'>
        <h1 className='text-3xl font-bold'>Documentation Hub</h1>
        <p className='text-lg'>All your documents at one place</p>
      </div>
      <div className="w-full">
        <DocumentationTable width="w-full" height="min-h-[600px]"/>
      </div>
    </div>
  );
}