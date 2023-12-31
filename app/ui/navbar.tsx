import { ModeToggle } from "@/components/toggle-theme";

export default function Navbar() {
  return (
    <nav className="fixed top-0 flex w-full h-20 border-b-2 dark:bg-dark">
      <ul className="flex w-full items-center px-3 md:px-5">
        <li className="mr-auto">
          <a className="font-bold text-xl" href="/home">Todo</a>
        </li>
        <li className="mx-5">Utente</li>
        <li><ModeToggle /></li>
      </ul>
    </nav>
  );
}
