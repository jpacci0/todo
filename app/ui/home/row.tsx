"use client";
import Badge from 'react-bootstrap/Badge';
import { editCompletato } from '@/app/lib/actions';
import Link from 'next/link';
import {
  TableRow,
  TableCell,
} from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"

export default function Row(props: any) {
  const { toast } = useToast();

  const handlerRow = (jobId: number) => {
    console.log("click", jobId);
  };

  const handleEditCompletato = (id: number) => {
    // Logica per l'editCompletato con l'ID
    editCompletato(id);
    toast({
      title: "Completato",
      description: "Hai aggiornato lo stato della attività",
    })
  }
  // console.log(props);

  let badgeClass = ''; // Classe di default se la priorità non corrisponde a nessun caso
  switch (props.job.prio) {
    case 'bassa':
      badgeClass = 'bg-green-50 text-green-700 ring-green-600/20';
      break;
    case 'media':
      badgeClass = 'bg-blue-50 text-blue-700 ring-blue-700/10';
      break;
    case 'alta':
      badgeClass = 'bg-yellow-50 text-yellow-800 ring-yellow-600/20';
      break;
    case 'urgente':
      badgeClass = 'bg-red-50 text-red-700 ring-red-600/10';
      break;
    default:
      badgeClass = 'default'; // Aggiungi una classe di default nel caso in cui la priorità non sia gestita
      break;
  }

  return (
    <TableRow onClick={() => handlerRow(props.job.id)}>
      <TableCell className='p-2 w-1/6 text-center'>
        {props.job.completato ? (
          <button onClick={() => handleEditCompletato(props.job.id)} title="Edit Completato">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
            </svg>
          </button>
        ) : (
          <button onClick={() => handleEditCompletato(props.job.id)} title="Edit Completato">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-check-square"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
            </svg>
          </button>
        )}
      </TableCell>
      <TableCell className='p-2 w-3/6'><Link href={`home/${props.job.id}/edit`}>{props.job.titolo}</Link></TableCell>
      <TableCell className='p-2 w-1/6 text-center'><Link href={`home/${props.job.id}/edit`}><span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${badgeClass}`}>
        {props.job.prio}
      </span></Link></TableCell>
      <TableCell className='p-2 w-1/6 text-center hidden sm:table-cell'><Link href={`home/${props.job.id}/edit`}>{props.job.datascadenza ? props.job.datascadenza.toLocaleDateString() : ''}</Link></TableCell>
    </TableRow>
  );
}

// {jobs.map((job) => (
//     <tr key={job.id} onClick={() => handlerRow(job.id)}>
//         <td>{job.id}</td>
//         <td>{job.titolo}</td>
//         <td>priorità</td>
//         <td>{job.datascadenza.toDateString()}</td>
//     </tr>
// ))}
