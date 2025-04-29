import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function GSTCalculatorLoading() {
  return (
    <div className="h-full w-full p-4 space-y-4">
      {/* Header */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-6 w-[150px]" />
      </div>

      {/* Calculator card */}
      <div className="w-full h-full flex items-center justify-center">
        <Skeleton className="w-[90%] md:w-[70%] h-[400px] rounded-xl" />
      </div>
    </div>
  );
}
