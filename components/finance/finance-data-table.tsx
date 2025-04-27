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

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FinanceTableProps {
  width?: string;
  height?: string;
}

const invoices = [
  {
    invoice: "1",
    ProjectTitle: "Skyline Havens",
    Budget: 500000,
    Paid: 250000,
    Balance: 250000,
    isActive: true,
  },
  {
    invoice: "2",
    ProjectTitle: "The Keystone Tower",
    Budget: 750000,
    Paid: 750000,
    Balance: 0,
    isActive: true,
  },
  {
    invoice: "3",
    ProjectTitle: "Aurora Heights",
    Budget: 600000,
    Paid: 400000,
    Balance: 200000,
    isActive: true,
  },
  {
    invoice: "4",
    ProjectTitle: "IronBridge Central",
    Budget: 800000,
    Paid: 400000,
    Balance: 400000,
    isActive: true,
  },
  {
    invoice: "5",
    ProjectTitle: "Crescent Ridge Residences",
    Budget: 700000,
    Paid: 700000,
    Balance: 0,
    isActive: true,
  },
  {
    invoice: "6",
    ProjectTitle: "UrbanCore District",
    Budget: 500000,
    Paid: 250000,
    Balance: 250000,
    isActive: true,
  },
  {
    invoice: "7",
    ProjectTitle: "The Foundation Project",
    Budget: 330000,
    Paid: 100000,
    Balance: 230000,
    isActive: true,
  },
  {
    invoice: "8",
    ProjectTitle: "Metro Heights",
    Budget: 450000,
    Paid: 200000,
    Balance: 250000,
    isActive: true,
  },
  {
    invoice: "9",
    ProjectTitle: "Sunset Valley",
    Budget: 200000,
    Paid: 50000,
    Balance: 150000,
    isActive: true,
  },
  {
    invoice: "10",
    ProjectTitle: "Green Plaza",
    Budget: 650000,
    Paid: 400000,
    Balance: 250000,
    isActive: true,
  },
  {
    invoice: "11",
    ProjectTitle: "Steel Heights",
    Budget: 300000,
    Paid: 100000,
    Balance: 200000,
    isActive: true,
  },
  {
    invoice: "12",
    ProjectTitle: "Crystal Tower",
    Budget: 150000,
    Paid: 50000,
    Balance: 100000,
    isActive: true,
  },
  {
    invoice: "13",
    ProjectTitle: "Golden Gate Complex",
    Budget: 100000,
    Paid: 25000,
    Balance: 75000,
    isActive: true,
  },
  {
    invoice: "14",
    ProjectTitle: "Silver Springs",
    Budget: 850000,
    Paid: 500000,
    Balance: 350000,
    isActive: true,
  },
  {
    invoice: "15",
    ProjectTitle: "Diamond Plaza",
    Budget: 950000,
    Paid: 950000,
    Balance: 0,
    isActive: true,
  },
];

export function FinanceTable({
  width = "w-[350px]",
  height = "min-h-[600px]",
}: FinanceTableProps) {
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
      <ScrollArea className="p-4 shadow-2xl whitespace-nowrap rounded-md border">
        <Table className="relative h-full ">
          <TableHeader>
            <TableRow>
              <TableHead>S.No</TableHead>
              <TableHead className="w-[200px]">Project Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Budget</TableHead>
              <TableHead>Paid</TableHead>
              <TableHead>Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="align-top">
            {currentItems.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.ProjectTitle}</TableCell>
                <TableCell>
                  {invoice.isActive ? "Active" : "Inactive"}
                </TableCell>
                <TableCell>₹{invoice.Budget.toLocaleString()}</TableCell>
                <TableCell>₹{invoice.Paid.toLocaleString()}</TableCell>
                <TableCell>₹{invoice.Balance.toLocaleString()}</TableCell>
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
