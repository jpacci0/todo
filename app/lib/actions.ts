"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const todoSchema = z.object({
  id: z.number(),
  titolo: z.string(),
  descrizione: z.string(),
  completato: z.boolean(),
  dataScadenza: z.date(),
});

const CreateTodo = todoSchema.omit({
  id: true,
  dataScadenza: true,
  completato: true,
});

export async function createTodo(formData: FormData) {
  const { titolo, descrizione } = CreateTodo.parse({
    titolo: formData.get("titolo"),
    descrizione: formData.get("descrizione"),
  });
  const completato: boolean = false;
  await sql`
    INSERT INTO jobs (titolo, descrizione, completato)
    VALUES (${titolo}, ${descrizione}, ${completato})
  `;

  revalidatePath("/home");
  redirect("/home");
}

export async function editCompletato(id: number) {
  await sql`
        UPDATE jobs
        SET completato = NOT completato
        WHERE id = ${id};    
    `;
  revalidatePath("/home");
  redirect("/home");
}
