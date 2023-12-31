"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { set } from "zod";

export default function NotFound() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/home");
  }, 20000);

  return (
    <>
      <main className="grid h-full w-full place-items-cente dark:bg-dark px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-gray-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Pagina non trovata
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Non riusciamo a trovare la pagina a cui vuoi accedere.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/home"
              className="border p-2 rounded hover:bg-slate-100 dark:hover:hover:bg-slate-700"

            >
              Torna alla Home
            </Link>
            {/* <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a> */}
          </div>
        </div>
      </main>
    </>
  );
}
