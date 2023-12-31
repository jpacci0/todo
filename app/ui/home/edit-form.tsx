"use client";

import { createTodo } from "@/app/lib/actions";
import { updateTodo } from "@/app/lib/actions";
import { deleteTodo } from "@/app/lib/actions";
import { fetchPrios } from "@/app/lib/data";
import { Todo } from "@/app/lib/definitions";
import { useFormState } from "react-dom";

export function DeleteTodo({ id }: { id: number }) {
  const deleteTodoWithId = deleteTodo.bind(null, id);

  return (
    <form action={deleteTodoWithId} className="w-80">
      <button className="mt-4 border p-2 rounded hover:bg-slate-100 dark:hover:hover:bg-slate-700">
        Elimina
      </button>
    </form>
  );
}
const state = {
  message: "",
  errors: {
    titolo: "",
    descrizione: "",
  },
};
export default function Form({ todo, prios }: { todo: any; prios: any }) {
  // //@ts-ignore
  const [formState, formAction] = useFormState(
    updateTodo.bind(null, todo.id),
    state
  );

  console.log(todo);
  //console.log(prios[0].id);

  //const updateTodoWithId = updateTodo.bind(null, todo.id);
  return (
    <>
      <form action={formAction}>
        {/* <input type="hidden" name="id" value={todo.id} /> */}
        <label
          htmlFor="titolo"
          className="block mt-4 text-sm leading-6 text-gray-900 dark:text-white font-bold"
        >
          Descrizione
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="titolo"
            id="titolo"
            className="block w-80 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
            defaultValue={todo.titolo}
          />
          {formState?.errors?.titolo && (
            <p className="text-red-500 mt-2">{formState.errors.titolo}</p>
          )}
        </div>

        <label
          htmlFor="descrizione"
          className="block mt-4 text-sm leading-6 text-gray-900 dark:text-white font-bold"
        >
          Note
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="descrizione"
            id="descrizione"
            className="block w-80 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
            defaultValue={todo.descrizione}
          />
          {/* {formState?.errors?.descrizione && <p className="text-red-500 mt-2">{formState.errors.descrizione}</p>} */}
        </div>

        {/* <label htmlFor="titolo">Titolo</label>
        <input
          id="titolo"
          name="titolo"
          type="text"
          defaultValue={todo.titolo}
        />
        {formState?.errors?.titolo && <p>{formState.errors.titolo}</p>} */}

        {/* <label htmlFor="descrizione">Descrizione</label>
        <input
          id="descrizione"
          name="descrizione"
          type="text"
          defaultValue={todo.descrizione}
        />
        {formState?.errors?.descrizione && <p>{formState.errors.descrizione}</p>} */}

        <label
          htmlFor="priority"
          className="block mt-4 text-sm font-bold leading-6 text-gray-900 dark:text-white"
        >
          Priorità
        </label>
        <div className="mt-2">
          <select
            title="priority"
            id="prio"
            defaultValue={todo.priority_id}
            name="priority"
            autoComplete="prio"
            className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            {prios.map((prio: any) => (
              <option key={prio.id} value={prio.id}>
                {prio.prio}
              </option>
            ))}
          </select>
        </div>

        {/* <select
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
        </select> */}

        <div className="grid grid-cols-2 gap-4 mt-4">
          <button
            type="submit"
            className="w-full border p-2 rounded hover:bg-slate-100 dark:hover:hover:bg-slate-700"
          >
            Modifica
          </button>
          <button
            type="button"
            className="w-full border p-2 rounded hover:bg-slate-100 dark:hover:hover:bg-slate-700"
          >
            <a href="/home">Annulla</a>
          </button>
        </div>
      </form>
      <DeleteTodo id={todo.id} />
      {/* {formState?.message === "invalid" && (
        <div className="error">{formState.message}</div>
      )} */}
    </>
  );
}
