import { unstable_noStore as noStore } from "next/cache";
import { sql } from "@vercel/postgres";

export async function fetchJobs() {
  noStore();

  try {
    const jobsCompleted = sql`
            SELECT * FROM jobs WHERE completato = true
        `;
    const jobsUncompleted = sql`
        SELECT * FROM jobs WHERE completato = false
    `;

    const jobsC = (await jobsCompleted).rows;
    const jobsU = (await jobsUncompleted).rows;

    return { jobsC, jobsU };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch jobs.");
  }
}
