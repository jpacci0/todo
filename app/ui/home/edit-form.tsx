'use client';

import { createTodo } from "@/app/lib/actions";
import { updateTodo } from "@/app/lib/actions";
import { deleteTodo } from "@/app/lib/actions";
import { fetchPrios } from "@/app/lib/data";
import { Todo } from "@/app/lib/definitions";
import { useFormState } from "react-dom";

export function DeleteTodo({ id }: { id: number }) {
  const deleteTodoWithId = deleteTodo.bind(null, id);

  return (
    <form action={deleteTodoWithId}>
      <button>Delete</button>
    </form>
  );
}

export default function Form({ todo, prios }: { todo: any; prios: any }) {
  // //@ts-ignore
  const [formState, formAction] = useFormState(updateTodo.bind(null, todo.id), {message: ""});

  console.log(todo);
  //console.log(prios[0].id);

  //const updateTodoWithId = updateTodo.bind(null, todo.id);
  return (
    <>
      <form action={formAction}>
        {/* <input type="hidden" name="id" value={todo.id} /> */}
        <label htmlFor="titolo">Titolo</label>
        <input
          id="titolo"
          name="titolo"
          type="text"
          defaultValue={todo.titolo}
        />
        <label htmlFor="descrizione">Descrizione</label>
        <input
          id="descrizione"
          name="descrizione"
          type="text"
          defaultValue={todo.descrizione}
        />
        <button type="submit">Edit</button>
        <button type="button">
          <a href="/home">Annulla</a>
        </button>

        <select
          title="priority"
          id="prio"
          name="priority"
          defaultValue={todo.prio}
        >
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
      {formState?.message === "invalid" && (
          <div className="error">
            {formState.message}
          </div>
        )}
      <DeleteTodo id={todo.id} />
    </>
  );
}
