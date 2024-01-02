import { unstable_noStore as noStore } from "next/cache";
import { sql } from "@vercel/postgres";
import { log } from "console";
import { notFound, redirect } from "next/navigation";

export async function fetchJobs() {
  noStore();

  try {
    const jobsCompleted = sql`
      SELECT jobs.*, priority.prio AS prio
      FROM jobs
      JOIN priority ON jobs.priority_id = priority.id
      WHERE jobs.completato = true;    
    `;
    const jobsUncompleted = sql`
      SELECT jobs.*, priority.prio AS prio
      FROM jobs
      JOIN priority ON jobs.priority_id = priority.id
      WHERE jobs.completato = false;
    `;

    const jobsC = (await jobsCompleted).rows;
    const jobsU = (await jobsUncompleted).rows;

    return { jobsC, jobsU };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch jobs.");
  }
}

export async function fetchPrios() {
  noStore();

  try {
    const priorities = sql`
      SELECT *
      FROM priority
    `;

    const prios = (await priorities).rows;
    return prios;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch prio.");
  }
}

export async function fetchTodoById(id: number) {
  noStore();

  const checkId = await sql`
  SELECT COUNT(*)
  FROM jobs
  WHERE id = ${id}
`;

// Ottieni il numero di righe restituite dalla query di verifica
  const count = checkId.rows[0].count;

  if (count === '0') {
    redirect(notFound());
    // throw new Error("L'ID non esiste nel database.");
  }

  try {
    const data = await sql`
      SELECT jobs.*, priority.prio AS prio
      FROM jobs
      JOIN priority ON jobs.priority_id = priority.id
      WHERE jobs.id = ${id}
    `;

    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch todo.");
  }
}