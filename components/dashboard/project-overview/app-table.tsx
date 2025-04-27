import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  import { Progress } from "@/components/ui/progress"
  import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

  
  const invoices = [
    {
      invoice: "1",
      ProjectTitle: "Skyline Havens",
      StatusBadge: "Quoted ",
      lastUpdated: "01/01/2023",
      progress: 50
    },
    {
      invoice: "2",
      ProjectTitle: "The Keystone Tower",
      StatusBadge: "Design",
      lastUpdated: "02/01/2023",
      progress: 75
    },
    {
      invoice: "3",
      ProjectTitle: "Aurora Heights",
      StatusBadge: "Fabrication",
      lastUpdated: "03/01/2023",
      progress: 90
    },
    {
      invoice: "4",
      ProjectTitle: "IronBridge Central",
      StatusBadge: "Transportation",
      lastUpdated: "04/01/2023",
      progress: 80
    },
    {
      invoice: "5",
      ProjectTitle: "Crescent Ridge Residences",
      StatusBadge: "Assembly",
      lastUpdated: "05/01/2023",
      progress: 70
    },
    {
      invoice: "6",
      ProjectTitle: "UrbanCore District",
      StatusBadge: "Bolting",
      lastUpdated: "06/01/2023",
      progress: 50
    },
    {
      invoice: "7",
      ProjectTitle: "The Foundation Project",
      StatusBadge: "Erection",
      lastUpdated: "07/01/2023",
      progress: 33
    },
  ]
  
  export function TableDemo() {
    return (
      <ScrollArea className="whitespace-nowrap rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>S.No</TableHead>
              <TableHead className="w-[200px]">Project Title</TableHead>
              <TableHead>Status Badge</TableHead>
              <TableHead>Last Updated Date</TableHead>
              <TableHead>Progress bar with percentage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.ProjectTitle}</TableCell>
                <TableCell>{invoice.StatusBadge}</TableCell>
                <TableCell>{invoice.lastUpdated}</TableCell>
                <TableCell>
                  <Progress value={invoice.progress} />
                  <span className="text-xs text-muted-foreground">{invoice.progress}%</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    )
  }
  