import { createTodo } from "@/app/lib/actions";
import { updateTodo } from '@/app/lib/actions';
import { fetchPrios } from "@/app/lib/data";
import { Todo } from "@/app/lib/definitions";
import { useFormState } from "react-dom";

export default async function Form({todo, prios}:{todo: any, prios: any}) {
    console.log(todo);
    console.log(prios[0].id);
    
    const updateTodoWithId = updateTodo.bind(null, todo.id);
  return (
    <>
      <form action={updateTodoWithId}>
        <input type="hidden" name="id" value={todo.id} />
        <label htmlFor="titolo">Titolo</label>
        <input id="titolo" name="titolo" type="text" defaultValue={todo.titolo} />
        <label htmlFor="descrizione">Descrizione</label>
        <input id="descrizione" name="descrizione" type="text" defaultValue={todo.descrizione} />
        <button type="submit">Add</button>
        <button type="button">
          <a href="/home">Annulla</a>
        </button>

        <select title="priority" id="prio" name="priority" defaultValue={todo.prio}>
          <option value="" disabled>
            Select a prio
          </option>
          {prios.map((prio: any) => (
            <option key={prio.id} value={prio.id}>
              {prio.prio}
            </option>
          ))}
        </select>
      </form>
    </>
  );
}
