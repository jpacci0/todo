import Table from "react-bootstrap/Table";
import { fetchJobs } from "@/app/lib/data";
import Row from "./row";

export default async function TableTodo() {

  const {jobsC, jobsU} = await fetchJobs();
  //console.log(jobsC, jobsU);
  
  return (
    <>
      <h2>Da fare</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Titolo</th>
            <th>Priorità</th>
            <th>Data Scadenza</th>
          </tr>
        </thead>
        <tbody>
          {jobsU.map((job) => (
            <Row key={job.id} job={job} />
          ))}
        </tbody>
      </Table>
      <h2>Completati</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Titolo</th>
            <th>Priorità</th>
            <th>Data Scadenza</th>
          </tr>
        </thead>
        <tbody>
          {jobsC.map((job) => (
            <Row key={job.id} job={job} />
          ))}
        </tbody>
      </Table>
    </>
  );
}
