"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Progress } from "@/components/ui/progress";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProjectTableProps {
  width?: string;
  height?: string;
}

const invoices = [
  {
    invoice: "1",
    ProjectTitle: "Skyline Havens",
    StatusBadge: "Quoted ",
    StartDate: "01/01/2023",
    EndDate: "30/01/2023",
    Quarter: "Q1",
    Type: "Conventional Construction",
    ContantNumber: "XXXXXX3452",
    Address: "visakhapatnam",
    progress: 50,
    isActive: false,
  },
  {
    invoice: "2",
    ProjectTitle: "The Keystone Tower",
    StatusBadge: "Design",
    StartDate: "02/01/2023",
    EndDate: "30/01/2023",
    Quarter: "Q1",
    Type: "Conventional Construction",
    ContantNumber: "XXXXXX3452",
    Address: "visakhapatnam",
    progress: 75,
    isActive: true,
  },
  {
    invoice: "3",
    ProjectTitle: "Aurora Heights",
    StatusBadge: "Fabrication",
    StartDate: "03/01/2023",
    EndDate: "30/01/2023",
    Quarter: "Q1",
    Type: "Conventional Construction",
    ContantNumber: "XXXXXX3452",
    Address: "visakhapatnam",
    progress: 90,
    isActive: true,
  },
  {
    invoice: "4",
    ProjectTitle: "IronBridge Central",
    StatusBadge: "Transportation",
    StartDate: "04/01/2023",
    EndDate: "30/01/2023",
    Quarter: "Q1",
    Type: "PEB Construction ",
    ContantNumber: "XXXXXX3452",
    Address: "visakhapatnam",
    progress: 80,
    isActive: true,
  },
  {
    invoice: "5",
    ProjectTitle: "Crescent Ridge Residences",
    StatusBadge: "Assembly",
    StartDate: "05/01/2023",
    EndDate: "30/01/2023",
    Quarter: "Q1",
    Type: "PEB Construction ",
    ContantNumber: "XXXXXX3452",
    Address: "visakhapatnam",
    progress: 70,
    isActive: true,
  },
  {
    invoice: "6",
    ProjectTitle: "UrbanCore District",
    StatusBadge: "Bolting",
    StartDate: "06/01/2023",
    EndDate: "30/01/2023",
    Quarter: "Q1",
    Type: "PEB Construction ",
    ContantNumber: "XXXXXX3452",
    Address: "visakhapatnam",
    progress: 50,
    isActive: true,
  },
  {
    invoice: "7",
    ProjectTitle: "The Foundation Project",
    StatusBadge: "Erection",
    StartDate: "07/01/2023",
    EndDate: "30/01/2023",
    Quarter: "Q1",
    Type: "PEB Construction",
    ContantNumber: "XXXXXX3452",
    Address: "visakhapatnam",
    progress: 33,
    isActive: true,
  },
  {
    invoice: "8",
    ProjectTitle: "Metro Heights",
    StatusBadge: "Design",
    StartDate: "08/01/2023",
    EndDate: "30/01/2023",
    Quarter: "Q1",
    Type: "PEB Construction",
    ContantNumber: "XXXXXX3452",
    Address: "visakhapatnam",
    progress: 45,
    isActive: true,
  },
  {
    invoice: "9",
    ProjectTitle: "Sunset Valley",
    StatusBadge: "Quoted",
    StartDate: "09/01/2023",
    EndDate: "30/01/2023",
    Quarter: "Q1",
    Type: "Conventional Construction",
    ContantNumber: "XXXXXX3452",
    Address: "visakhapatnam",
    progress: 20,
    isActive: true,
  },
  {
    invoice: "10",
    ProjectTitle: "Green Plaza",
    StatusBadge: "Assembly",
    StartDate: "10/01/2023",
    EndDate: "30/01/2023",
    Quarter: "Q1",
    Type: "PEB Construction",
    ContantNumber: "XXXXXX3452",
    Address: "visakhapatnam",
    progress: 65,
    isActive: true,
  },
  {
    invoice: "11",
    ProjectTitle: "Steel Heights",
    StatusBadge: "Fabrication",
    StartDate: "11/01/2023",
    EndDate: "30/01/2023",
    Quarter: "Q1",
    Type: "PEB Construction",
    ContantNumber: "XXXXXX3452",
    Address: "visakhapatnam",
    progress: 30,
    isActive: true,
  },
  {
    invoice: "12",
    ProjectTitle: "Crystal Tower",
    StatusBadge: "Design",
    StartDate: "12/01/2023",
    EndDate: "30/01/2023",
    Quarter: "Q1",
    Type: "Conventional Construction",
    ContantNumber: "XXXXXX3452",
    Address: "visakhapatnam",
    progress: 15,
    isActive: true,
  },
  {
    invoice: "13",
    ProjectTitle: "Golden Gate Complex",
    StatusBadge: "Quoted",
    StartDate: "13/01/2023",
    EndDate: "30/01/2023",
    Quarter: "Q1",
    Type: "PEB Construction",
    ContantNumber: "XXXXXX3452",
    Address: "visakhapatnam",
    progress: 10,
    isActive: true,
  },
  {
    invoice: "14",
    ProjectTitle: "Silver Springs",
    StatusBadge: "Transportation",
    StartDate: "14/01/2023",
    EndDate: "30/01/2023",
    Quarter: "Q1",
    Type: "PEB Construction",
    ContantNumber: "XXXXXX3452",
    Address: "visakhapatnam",
    progress: 85,
    isActive: true,
  },
  {
    invoice: "15",
    ProjectTitle: "Diamond Plaza",
    StatusBadge: "Erection",
    StartDate: "15/01/2023",
    EndDate: "30/01/2023",
    Quarter: "Q1",
    Type: "Conventional Construction",
    ContantNumber: "XXXXXX3452",
    Address: "visakhapatnam",
    progress: 95,
    isActive: true,
  },
];

export function ProjectTable({
  width = "w-[350px]",
  height = "min-h-[600px]",
}: ProjectTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<string>("all");
  const itemsPerPage = 10;

  // Filter items based on active status
  const filteredItems = invoices.filter((item) => {
    if (filter === "active") return item.isActive;
    if (filter === "inactive") return !item.isActive;
    return true;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  // Reset to first page when filter changes
  const handleFilterChange = (value: string) => {
    setFilter(value);
    setCurrentPage(1);
  };

  return (
    <div className={`${width} ${height} space-y-4 `}>
      <div className="flex justify-start">
        <Select onValueChange={handleFilterChange} defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Projects</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Non-Active</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ScrollArea
        className="p-4 shadow-2xl whitespace-nowrap rounded-md border"
      >
        <Table className="relative h-full ">
          <TableHeader>
            <TableRow>
              <TableHead>S.No</TableHead>
              <TableHead className="w-[200px]">Project Title</TableHead>
              <TableHead>Status Badge</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End date</TableHead>
              <TableHead>Quarter</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Contact Number</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Progress bar with percentage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="align-top">
            {currentItems.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.ProjectTitle}</TableCell>
                <TableCell>{invoice.StatusBadge}</TableCell>
                <TableCell>{invoice.StartDate}</TableCell>
                <TableCell>{invoice.EndDate}</TableCell>
                <TableCell>{invoice.Quarter}</TableCell>
                <TableCell>{invoice.Type}</TableCell>
                <TableCell>{invoice.ContantNumber}</TableCell>
                <TableCell>{invoice.Address}</TableCell>
                <TableCell>
                  <Progress value={invoice.progress} />
                  <span className="text-xs text-muted-foreground">
                    {invoice.progress}%
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter className="sticky bottom-0 bg-background border-t">
            <TableRow>
              <TableCell colSpan={10}>
                <div className="flex justify-end gap-2 py-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
