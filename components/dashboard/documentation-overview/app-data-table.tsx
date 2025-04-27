import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableDemo } from "@/components/dashboard/documentation-overview/app-table";
import Link from "next/link";

interface CardForDocumentationProps {
  width?: string;
  height?: string;
  buttonText?: string;
}

export function CardForDocumentation({
  width = "w-[350px]",
  height = "h-auto",
  buttonText = "Button",
}: CardForDocumentationProps) {
  return (
    <Card className={`${width} ${height} shadow-2xl`}>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center justify-between space-x-2">
            <h1>Your Documentation Overview</h1>
            <Link href="/documentation">
              <Button variant="default" className="cursor-pointer">
                {buttonText}
              </Button>
            </Link>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <TableDemo />
      </CardContent>
    </Card>
  );
}
