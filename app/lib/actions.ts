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
  priority: z.coerce.number(),
});

const CreateTodo = todoSchema.omit({
  id: true,
  dataScadenza: true,
  completato: true,
});

export async function createTodo(formData: FormData) {
  const { titolo, descrizione, priority } = CreateTodo.parse({
    titolo: formData.get("titolo"),
    descrizione: formData.get("descrizione"),
    priority: formData.get("priority"),
  });
  const completato: boolean = false;
  await sql`
    INSERT INTO jobs (titolo, descrizione, completato, priority_id)
    VALUES (${titolo}, ${descrizione}, ${completato}, ${priority})
  `;

  revalidatePath("/home");
  redirect("/home");
}

const UpdateTodo = todoSchema.omit({
  dataScadenza: true,
  id: true,
  completato: true,
});

export async function updateTodo(id: number, formData: FormData) {
  const { titolo, descrizione, priority } = UpdateTodo.parse({
    titolo: formData.get("titolo"),
    descrizione: formData.get("descrizione"),
    priority: formData.get("priority"),
  });

  try {
    await sql`
          UPDATE jobs
          SET titolo = ${titolo}, descrizione = ${descrizione}, priority = ${priority}
          WHERE id = ${id}
        `;
  } catch (error) {
    return { message: "Database Error: Failed to Update Jobs." };
  }

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
