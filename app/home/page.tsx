import TableTodo from "@/app/ui/home/table";
import { Suspense } from "react";
import Loading from "@/app/home/loading";

export default function Page() {
  return (  
    <>
      <Suspense fallback={<Loading />}>
        <TableTodo />
      </Suspense>
    </>
  );

}
