import { Skeleton } from "@/components/ui/skeleton";

export function TodoSkeleton() {
  return (
    <div className="mx-2">
      <div className="flex space-y-4 space-x-4 w-full">
        <Skeleton className="h-6 w-1/6" />
        <Skeleton className="h-6 w-3/6" />
        <Skeleton className="h-6 w-1/6" />
        <Skeleton className="h-6 w-1/6" />
      </div>
      <div className="flex space-y-4 space-x-4 w-full">
        <Skeleton className="h-6 w-1/6" />
        <Skeleton className="h-6 w-3/6" />
        <Skeleton className="h-6 w-1/6" />
        <Skeleton className="h-6 w-1/6" />
      </div>
      <div className="flex space-y-4 space-x-4 w-full">
        <Skeleton className="h-6 w-1/6" />
        <Skeleton className="h-6 w-3/6" />
        <Skeleton className="h-6 w-1/6" />
        <Skeleton className="h-6 w-1/6" />
      </div>
      <div className="flex space-y-4 space-x-4 w-full">
        <Skeleton className="h-6 w-1/6" />
        <Skeleton className="h-6 w-3/6" />
        <Skeleton className="h-6 w-1/6" />
        <Skeleton className="h-6 w-1/6" />
      </div>
    </div>
  );
}

export function CreateSkeleton() {
  return (
    <>
      <div className="mt-4 w-80 mx-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-6 w-full mt-4" />
      </div>
      <div className="mt-4 w-80 mx-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-6 w-full mt-4" />
      </div>
      <div className="mt-4 w-80 mx-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-6 w-full mt-4" />
      </div>
      <div className="flex justify-between mt-4 w-80 mx-2">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-6 w-1/2" />
      </div>
    </>
  );
}

export function EditSkeleton() {
  return (
    <>
      <div className="mt-4 w-80 mx-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-6 w-full mt-4" />
      </div>
      <div className="mt-4 w-80 mx-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-6 w-full mt-4" />
      </div>
      <div className="mt-4 w-80 mx-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-6 w-full mt-4" />
      </div>
      <div className="flex justify-between mt-4 w-80 mx-2">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-6 w-1/2" />
      </div>
      <div className="flex justify-between mt-4 w-80 mx-2">
        <Skeleton className="h-6 w-full" />
      </div>
    </>
  );
}
