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

  const { pending } = useFormStatus();

  //const prios = fetchPrios();  
  //console.log(prios);

  return (
    <>
      <form action={formAction}>
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
