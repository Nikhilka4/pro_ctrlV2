// "use client";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import Link from "next/link";

// interface DocumentationTableProps {
//   width?: string;
//   height?: string;
// }

// const invoices = [
//   {
//     invoice: "1",
//     ProjectTitle: "Skyline Havens",
//     DocumentBadge: "Quotation",
//     uploadedDate: "01/01/2023",
//   },
//   {
//     invoice: "2",
//     ProjectTitle: "The Keystone Tower",
//     DocumentBadge: "Agreement letter",
//     uploadedDate: "02/01/2023",
//   },
//   {
//     invoice: "3",
//     ProjectTitle: "Aurora Heights",
//     DocumentBadge: "Order confirmation",
//     uploadedDate: "03/01/2023",
//   },
//   {
//     invoice: "4",
//     ProjectTitle: "IronBridge Central",
//     DocumentBadge: "Advance payment receipt",
//     uploadedDate: "04/01/2023",
//   },
//   {
//     invoice: "5",
//     ProjectTitle: "Crescent Ridge Residences",
//     DocumentBadge: "Payment Due letter",
//     uploadedDate: "05/01/2023",
//   },
//   {
//     invoice: "6",
//     ProjectTitle: "UrbanCore District",
//     DocumentBadge: "Final invoice",
//     uploadedDate: "06/01/2023",
//   },
//   {
//     invoice: "7",
//     ProjectTitle: "The Foundation Project",
//     DocumentBadge: "Final invoice",
//     uploadedDate: "07/01/2023",
//   },
//   {
//     invoice: "8",
//     ProjectTitle: "Metro Plaza Complex",
//     DocumentBadge: "Quotation",
//     uploadedDate: "08/01/2023",
//   },
//   {
//     invoice: "9",
//     ProjectTitle: "Sunset Valley Towers",
//     DocumentBadge: "Agreement letter",
//     uploadedDate: "09/01/2023",
//   },
//   {
//     invoice: "10",
//     ProjectTitle: "Green Park Estate",
//     DocumentBadge: "Order confirmation",
//     uploadedDate: "10/01/2023",
//   },
//   {
//     invoice: "11",
//     ProjectTitle: "Ocean View Complex",
//     DocumentBadge: "Final invoice",
//     uploadedDate: "11/01/2023",
//   },
//   {
//     invoice: "12",
//     ProjectTitle: "Mountain Ridge Plaza",
//     DocumentBadge: "Quotation",
//     uploadedDate: "12/01/2023",
//   },
//   {
//     invoice: "13",
//     ProjectTitle: "Riverside Commons",
//     DocumentBadge: "Agreement letter",
//     uploadedDate: "13/01/2023",
//   },
//   {
//     invoice: "14",
//     ProjectTitle: "Silver Peak Plaza",
//     DocumentBadge: "Order confirmation",
//     uploadedDate: "14/01/2023",
//   },
//   {
//     invoice: "15",
//     ProjectTitle: "Heritage Square",
//     DocumentBadge: "Quotation",
//     uploadedDate: "15/01/2023",
//   },
// ];

// export function DocumentationTable({
//   width = "w-[350px]",
//   height = "min-h-[600px]",
// }: DocumentationTableProps) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;
//   const totalPages = Math.ceil(invoices.length / itemsPerPage);

//   const paginatedInvoices = invoices.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div className="flex flex-col space-y-4">
//       <ScrollArea
//         className={`${width} ${height} whitespace-nowrap rounded-md border`}
//       >
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>S.No</TableHead>
//               <TableHead className="w-[200px]">Project Title</TableHead>
//               <TableHead>Document Badge</TableHead>
//               <TableHead>Uploaded Date</TableHead>
//               <TableHead className="text-center">Action</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {paginatedInvoices.map((invoice) => (
//               <TableRow key={invoice.invoice}>
//                 <TableCell className="font-medium">{invoice.invoice}</TableCell>
//                 <TableCell>{invoice.ProjectTitle}</TableCell>
//                 <TableCell>{invoice.DocumentBadge}</TableCell>
//                 <TableCell>{invoice.uploadedDate}</TableCell>
//                 <TableCell className="text-center">
//                   <Link href={`/documentation/${invoice.ProjectTitle}`}>
//                     <Button variant="link" className="cursor-pointer">
//                       View all documents
//                     </Button>
//                   </Link>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//         <ScrollBar orientation="horizontal" />
//       </ScrollArea>
//       <div className="flex justify-end gap-2">
//         <Button
//           variant="outline"
//           onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </Button>
//         <Button
//           variant="outline"
//           onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </Button>
//       </div>
//     </div>
//   );
// }

"use client";

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
import { useState } from "react";
import Link from "next/link";

interface DocumentationTableProps {
  width?: string;
  height?: string;
}

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
  {
    invoice: "8",
    ProjectTitle: "Metro Plaza Complex",
    DocumentBadge: "Quotation",
    uploadedDate: "08/01/2023",
  },
  {
    invoice: "9",
    ProjectTitle: "Sunset Valley Towers",
    DocumentBadge: "Agreement letter",
    uploadedDate: "09/01/2023",
  },
  {
    invoice: "10",
    ProjectTitle: "Green Park Estate",
    DocumentBadge: "Order confirmation",
    uploadedDate: "10/01/2023",
  },
  {
    invoice: "11",
    ProjectTitle: "Ocean View Complex",
    DocumentBadge: "Final invoice",
    uploadedDate: "11/01/2023",
  },
  {
    invoice: "12",
    ProjectTitle: "Mountain Ridge Plaza",
    DocumentBadge: "Quotation",
    uploadedDate: "12/01/2023",
  },
  {
    invoice: "13",
    ProjectTitle: "Riverside Commons",
    DocumentBadge: "Agreement letter",
    uploadedDate: "13/01/2023",
  },
  {
    invoice: "14",
    ProjectTitle: "Silver Peak Plaza",
    DocumentBadge: "Order confirmation",
    uploadedDate: "14/01/2023",
  },
  {
    invoice: "15",
    ProjectTitle: "Heritage Square",
    DocumentBadge: "Quotation",
    uploadedDate: "15/01/2023",
  },
];

export function DocumentationTable({
  width = "w-[350px]",
  height = "min-h-[600px]",
}: DocumentationTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(invoices.length / itemsPerPage);

  const paginatedInvoices = invoices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col space-y-4">
      <ScrollArea
        className={`${width} ${height} whitespace-nowrap rounded-md border`}
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">S.No</TableHead>
              <TableHead className="w-[200px] text-left">Project Title</TableHead>
              <TableHead className="text-left">Document Badge</TableHead>
              <TableHead className="text-left">Uploaded Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedInvoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium text-left">{invoice.invoice}</TableCell>
                <TableCell className="text-left">{invoice.ProjectTitle}</TableCell>
                <TableCell className="text-left">{invoice.DocumentBadge}</TableCell>
                <TableCell className="text-left">{invoice.uploadedDate}</TableCell>
                <TableCell>
                  <Link href={`/documentation/${invoice.ProjectTitle}`}>
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
      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

