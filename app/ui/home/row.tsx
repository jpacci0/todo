"use client";
import Badge from 'react-bootstrap/Badge';
import { editCompletato } from '@/app/lib/actions';
import Link from 'next/link';

export default function Row(props: any) {
  const handlerRow = (jobId: number) => {
    console.log("click", jobId);
  };

  // console.log(props);

  let badgeClass = ''; // Classe di default se la priorità non corrisponde a nessun caso
  switch (props.job.prio) {
    case 'bassa':
      badgeClass = 'success';
      break;
    case 'media':
      badgeClass = 'primary';
      break;
    case 'alta':
      badgeClass = 'warning';
      break;
    case 'urgente':
      badgeClass = 'danger';
      break;
    default:
      badgeClass = 'default'; // Aggiungi una classe di default nel caso in cui la priorità non sia gestita
      break;
  }

  return (
    <tr onClick={() => handlerRow(props.job.id)}>
      <td>
        {props.job.completato ? (
          <button onClick={() => editCompletato(props.job.id)} title="Edit Completato">
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
          <button onClick={() => editCompletato(props.job.id)} title="Edit Completato">
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
      </td>
      <td><Link href={`home/${props.job.id}/edit`}>{props.job.titolo}</Link></td>
      <td><Link href={`home/${props.job.id}/edit`}><Badge bg={badgeClass}>{props.job.prio}</Badge></Link></td>
      <td><Link href={`home/${props.job.id}/edit`}>{props.job.datascadenza ? props.job.datascadenza.toLocaleDateString() : ''}</Link></td>
    </tr>
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
