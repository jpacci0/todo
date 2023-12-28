"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const todoSchema = z.object({
  id: z.number(),
  titolo: z.string().min(5, { message: "Inserire almeno cinque caratteri titolo" }),
  descrizione: z.string().min(5, { message: "Inserire almeno cinque caratteri desc" }),
  completato: z.boolean(),
  dataScadenza: z.date(),
  priority: z.coerce.number(),
});

const CreateTodo = todoSchema.omit({
  id: true,
  dataScadenza: true,
  //completato: true,
});

export async function createTodo(prevState: any, formData: FormData) {
  // CreateTodo.parse({
  //   titolo: formData.get("titolo"),
  //   descrizione: formData.get("descrizione"),
  //   priority: formData.get("priority"),
  //   completato: true
  // });
  try {
    // const { titolo, descrizione, priority } = {
    //   titolo: formData.get("titolo")?.toString(),
    //   descrizione: formData.get("descrizione")?.toString(),
    //   priority: formData.get("priority")?.toString(),
    // };

    const { titolo, descrizione, priority } = CreateTodo.parse({
      titolo: formData.get("titolo"),
      descrizione: formData.get("descrizione"),
      priority: formData.get("priority"),
      completato: true,
    });

    const completato: boolean = false;
    await sql`
    INSERT INTO jobs (titolo, descrizione, completato, priority_id)
    VALUES (${String(titolo)}, ${String(
      descrizione
    )}, ${completato}, ${priority})
    `;
    
    console.log("try");

  } catch (error) {
    const zodError = error as z.ZodError;
    const errorMap = zodError.flatten().fieldErrors;
    console.log(errorMap["titolo"]?.[0]);
    
    return {
      message: "invalid",
      errors: {
        titolo: errorMap["titolo"]?.[0] ?? null,
        descrizione: errorMap["descrizione"]?.[0] ?? null,
      }
    };
  }
  revalidatePath("/home");
  redirect("/home");
}

const UpdateTodo = todoSchema.omit({
  dataScadenza: true,
  id: true,
});

export async function updateTodo(id: number, formData: FormData) {
  const { titolo, descrizione, priority } = UpdateTodo.parse({
    titolo: formData.get("titolo"),
    descrizione: formData.get("descrizione"),
    priority: formData.get("priority"),
    completato: true,
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
