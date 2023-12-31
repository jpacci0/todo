import TableTodo from "@/app/ui/home/table";
import { Suspense } from "react";
import Loading from "@/app/home/loading";
import { CreateTodo } from "@/app/ui/home/button";

export default function Page() {
  return (  
    <>
      <Suspense fallback={<Loading />}>
        <TableTodo />
      </Suspense>
      <CreateTodo />
    </>
  );

}
