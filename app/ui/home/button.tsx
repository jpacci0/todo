import Link from "next/link";
// import Button from 'react-bootstrap/Button';
import { Button } from "@/components/ui/button"

export function CreateTodo() {

  return (
    <Link href="/home/create">
      <Button variant="outline" size="sm">
        Crea attività
      </Button>
    </Link>
  );
}

// export function UpdateTodo({ id }: { id: string }) {
//   return (
//     <Link
//       href={`/dashboard/invoices/${id}/edit`}
//       className="rounded-md border p-2 hover:bg-gray-100"
//     >
//       <PencilIcon className="w-5" />
//     </Link>
//   );
// }

// export function DeleteTodo({ id }: { id: string }) {
//   const deleteInvoiceWithId = deleteInvoice.bind(null, id);

//   return (
//     <form action={deleteInvoiceWithId}>
//       <button className="rounded-md border p-2 hover:bg-gray-100">
//         <span className="sr-only">Delete</span>
//         <TrashIcon className="w-4" />
//       </button>
//     </form>
//   );
// }
