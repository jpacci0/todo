import Form from '@/app/ui/home/edit-form';
import { fetchTodoById, fetchPrios } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const [todo, prios] = await Promise.all([
        fetchTodoById(id),
        fetchPrios(),
    ]);
console.log(prios);

  return (
    <>
      <Form todo={todo} prios={prios} />
    </>
  );
}
