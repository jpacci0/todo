"use client";

import { createTodo } from "@/app/lib/actions";
import { fetchPrios } from "@/app/lib/data";
import { useFormState, useFormStatus } from "react-dom";

function Submit() {
  const status = useFormStatus();
  return (
    <button
      disabled={status.pending}
      className="border p-2 rounded hover:bg-slate-100 dark:hover:hover:bg-slate-700"
    >
      Invia
    </button>
  );
}

export default function Form() {
  // @ts-ignore
  const [formState, formAction] = useFormState(createTodo, {}); //ho aggiunto ts-ignore perché voleva una specifica

  //const prios = fetchPrios();
  //console.log(prios);

  return (
    <>
      <form action={formAction}>
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
            placeholder="Inserisci la descrizione"
          />
          {formState?.errors?.titolo && (
            <p className="text-red-500 mt-2">{formState.errors.titolo}</p>
          )}
        </div>
        {/* <label htmlFor="titolo">Titolo</label>
        <input id="titolo" name="titolo" type="text" />
        {formState?.errors?.titolo && <p>{formState.errors.titolo}</p>} */}

        <label
          htmlFor="descrizione"
          className="block mt-4 text-sm font-bold leading-6 text-gray-900 dark:text-white"
        >
          Note
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="descrizione"
            id="descrizione"
            className="block w-80 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
            placeholder="Inserisci le note"
          />
          {/* {formState?.errors?.descrizione && (
            <p className="text-red-500 mt-2">{formState.errors.descrizione}</p>
          )} */}
        </div>

        {/* <label htmlFor="descrizione">Descrizione</label>
        <input id="descrizione" name="descrizione" type="text" />
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
            defaultValue="1"
            name="priority"
            autoComplete="prio"
            className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option value="1">Seleziona la priorità</option>
            <option value="1">Bassa</option>
            <option value="2">Media</option>
            <option value="3">Alta</option>
            <option value="4">Urgente</option>
          </select>
        </div>

        {/* <select title="priority" id="prio" name="priority" defaultValue="1">
          <option value="1">
            Select a prio
          </option>
          {prios.map((prio: any) => (
            <option key={prio.id} value={prio.id}>
              {prio.prio}
            </option>
          ))}
          <option value="1">Bassa</option>
          <option value="2">Media</option>
          <option value="3">Alta</option>
          <option value="4">Urgente</option>
        </select> */}

        <div className="grid grid-cols-2 gap-4 mt-4">
          <Submit />
          <button
            type="button"
            className="w-full border p-2 rounded hover:bg-slate-100 dark:hover:hover:bg-slate-700"
          >
            <a href="/home">Annulla</a>
          </button>
        </div>

        {/* <button type="submit">{pending ? "Submitting..." : "Submit"}</button> */}
        {/* <button type="button" className="border p-2 rounded hover:bg-slate-100 dark:hover:hover:bg-slate-700">
          <a href="/home">Annulla</a>
        </button> */}
        {/* {formState?.message === "invalid" && (
          <div className="error">{formState.message}</div>
        )} */}
      </form>
    </>
  );
}
