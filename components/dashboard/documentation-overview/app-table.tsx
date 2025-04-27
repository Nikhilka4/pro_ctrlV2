import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const formatUrlPath = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, "-");
};

const invoices = [
  {
    invoice: "1",
    ProjectTitle: "Skyline Havens",
    DocumentBadge: "Quotation",
    uploadedDate: "01/01/2023",
  },
  {
    invoice: "2",
    ProjectTitle: "The Keystone Tower",
    DocumentBadge: "Agreement letter",
    uploadedDate: "02/01/2023",
  },
  {
    invoice: "3",
    ProjectTitle: "Aurora Heights",
    DocumentBadge: "Order confirmation",
    uploadedDate: "03/01/2023",
  },
  {
    invoice: "4",
    ProjectTitle: "IronBridge Central",
    DocumentBadge: "Advance payment receipt",
    uploadedDate: "04/01/2023",
  },
  {
    invoice: "5",
    ProjectTitle: "Crescent Ridge Residences",
    DocumentBadge: "Payment Due letter",
    uploadedDate: "05/01/2023",
  },
  {
    invoice: "6",
    ProjectTitle: "UrbanCore District",
    DocumentBadge: "Final invoice",
    uploadedDate: "06/01/2023",
  },
  {
    invoice: "7",
    ProjectTitle: "The Foundation Project",
    DocumentBadge: "Final invoice",
    uploadedDate: "07/01/2023",
  },
];

export function TableDemo() {
  return (
    <ScrollArea className="whitespace-nowrap rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>S.No</TableHead>
            <TableHead className="w-[200px]">Project Title</TableHead>
            <TableHead>Document Badge</TableHead>
            <TableHead>Uploaded Date</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.ProjectTitle}</TableCell>
              <TableCell>{invoice.DocumentBadge}</TableCell>
              <TableCell>{invoice.uploadedDate}</TableCell>
              <TableCell>
                <Link
                  href={`/documentation/${formatUrlPath(invoice.ProjectTitle)}`}
                >
                  <Button variant="link" className="cursor-pointer">
                    View all documents
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
