import { unstable_noStore as noStore } from "next/cache";
import { sql } from "@vercel/postgres";
import { log } from "console";

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
  // SELECT jobs.*, priority.prio AS prio
  // FROM jobs
  // JOIN priority ON jobs.priority_id = priority.id
  // WHERE jobs.completato = false;
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