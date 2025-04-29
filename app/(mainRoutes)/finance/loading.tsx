import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function FinanceLoading() {
  return (
    <div className="h-full w-full p-4 space-y-4">
      {/* Header */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-6 w-[150px]" />
      </div>

      {/* Table loading */}
      <div className="space-y-4">
        <Skeleton className="h-10 w-full" /> {/* Table header */}
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-16 w-full" /> /* Table rows */
          ))}
      </div>
    </div>
  );
}
