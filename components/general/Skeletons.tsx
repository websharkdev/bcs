import { Skeleton } from "../ui/skeleton"

export const ServicesSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-7xl mx-auto w-full px-4 sm:px-0">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="flex flex-col gap-5">
        <Skeleton className="aspect-video w-full rounded-2xl" />
        <div className="flex justify-between items-start gap-10">
          <div className="flex flex-col gap-2 w-full">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <Skeleton className="size-12 rounded-full shrink-0" />
        </div>
      </div>
    ))}
  </div>
)

export const BenefitsSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 w-full max-w-7xl mx-auto">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div key={i} className="flex flex-col items-center gap-4">
        <Skeleton className="size-16 rounded-xl" />
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    ))}
  </div>
)

export const ReviewsSkeleton = () => (
  <div className="bg-[#f5f5f5] rounded-[24px] p-6 lg:p-10 min-h-[500px] lg:min-h-[600px] flex flex-col justify-center items-center gap-5 max-w-7xl mx-auto w-full">
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Skeleton key={i} className="size-5 rounded-full" />
      ))}
    </div>
    <Skeleton className="h-10 w-3/4 mt-4" />
    <Skeleton className="h-10 w-1/2" />
    <div className="flex flex-col items-center mt-10">
      <Skeleton className="size-10 rounded-full mb-4" />
      <Skeleton className="h-5 w-32 mb-2" />
      <Skeleton className="h-4 w-24" />
    </div>
  </div>
)

export const FAQSkeleton = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-x-10 gap-y-5 items-start max-w-7xl">
    <div className="flex flex-col gap-5">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-16 w-full rounded-xl" />
      ))}
    </div>
    <div className="flex flex-col gap-5">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-16 w-full rounded-xl" />
      ))}
    </div>
  </div>
)
