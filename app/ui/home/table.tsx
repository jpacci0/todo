// import Table from "react-bootstrap/Table";
import { fetchJobs } from "@/app/lib/data";
import Row from "./row";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default async function TableTodo() {
  const { jobsC, jobsU } = await fetchJobs();
  //console.log(jobsC, jobsU);

  return (
    <div className="w-full p-5">
      <Accordion type="single" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Da fare</AccordionTrigger>
          <AccordionContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/6 p-2"></TableHead>
                  <TableHead className="w-3/6 p-2">Titolo</TableHead>
                  <TableHead className="w-1/6 p-2 text-center">Priorità</TableHead>
                  <TableHead className="w-1/6 p-2 text-center hidden sm:table-cell">Data Scadenza</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobsU.map((job) => (
                  <Row key={job.id} job={job} />
                ))}
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Completati</AccordionTrigger>
          <AccordionContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/6 p-2"></TableHead>
                  <TableHead className="w-3/6 p-2">Titolo</TableHead>
                  <TableHead className="w-1/6 p-2 text-center">Priorità</TableHead>
                  <TableHead className="w-1/6 p-2 text-center hidden sm:table-cell">Data Scadenza</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobsC.map((job) => (
                  <Row key={job.id} job={job} />
                ))}
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
