"use client";

import { DocumentationTable } from "@/components/documentation/documentation-overview";


export default function DocumentationPage() {
  return (
      <div className="w-full">
        <DocumentationTable width="w-full" height="min-h-[600px]" />
      </div>
  );
}
