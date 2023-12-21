import { createTodo } from "@/app/lib/actions";
import { fetchPrios } from "@/app/lib/data";

export default async function Form() {

  const prios = await fetchPrios();
console.log(prios);

  return (
    <>
      <form action={createTodo}>
        <label htmlFor="titolo">Titolo</label>
        <input id="titolo" name="titolo" type="text" />
        <label htmlFor="descrizione">Descrizione</label>
        <input id="descrizione" name="descrizione" type="text" />
        <button type="submit">Add</button>
        <button type="button"><a href="/home">Annulla</a></button>

        <select
          title="priority"
          id="prio"
          name="priority"
          defaultValue="1"
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
    </>
  );
}
