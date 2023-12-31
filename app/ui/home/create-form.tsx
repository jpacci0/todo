'use client';

import { createTodo } from "@/app/lib/actions";
import { fetchPrios } from "@/app/lib/data";
import { useFormState, useFormStatus } from "react-dom";

function Submit() {
  const status = useFormStatus();
  return <button disabled={status.pending}>Submit</button>
}

export default function Form() {
  // @ts-ignore
  const [formState, formAction] = useFormState(createTodo, {}); //ho aggiunto ts-ignore perché voleva una specifica

  //const prios = fetchPrios();  
  //console.log(prios);

  return (
    <>
      <form action={formAction}>
      <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
        Price
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">$</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0.00"
        />
        </div>
        <label htmlFor="titolo">Titolo</label>
        <input id="titolo" name="titolo" type="text" />
        {formState?.errors?.titolo && <p>{formState.errors.titolo}</p>}
        <label htmlFor="descrizione">Descrizione</label>
        <input id="descrizione" name="descrizione" type="text" />
        {formState?.errors?.descrizione && <p>{formState.errors.descrizione}</p>}
        <select title="priority" id="prio" name="priority" defaultValue="1">
          <option value="1">
            Select a prio
          </option>
          {/* {prios.map((prio: any) => (
            <option key={prio.id} value={prio.id}>
              {prio.prio}
            </option>
          ))} */}
          <option value="1">Bassa</option>
          <option value="2">Media</option>
          <option value="3">Alta</option>
          <option value="4">Urgente</option>
        </select>
        <Submit/>
        {/* <button type="submit">{pending ? "Submitting..." : "Submit"}</button> */}
        <button type="button">
          <a href="/home">Annulla</a>
        </button>
        {formState?.message === "invalid" && (
          <div className="error">
            {formState.message}
          </div>
        )}
      </form>
    </>
  );
}
