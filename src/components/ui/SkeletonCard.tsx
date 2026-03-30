export function SkeletonCard() {
  return (
    <div className="bg-white border border-gray-100 animate-pulse">
      <div className="h-64 bg-gray-200" />
      <div className="p-8 space-y-4">
        <div className="h-3 bg-gray-200 rounded w-1/3" />
        <div className="h-6 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-4 bg-gray-200 rounded w-4/6" />
        <div className="mt-8 h-10 bg-gray-100 rounded w-full" />
      </div>
    </div>
  );
}

export function SkeletonFundingCard() {
  return (
    <div className="bg-white/5 border border-white/10 p-8 animate-pulse">
      <div className="flex gap-8">
        <div className="w-24 h-24 bg-white/10 shrink-0" />
        <div className="flex-1 space-y-3">
          <div className="h-6 bg-white/10 rounded w-1/2" />
          <div className="h-4 bg-white/10 rounded w-full" />
          <div className="h-4 bg-white/10 rounded w-5/6" />
          <div className="h-3 bg-white/10 rounded w-1/4 mt-4" />
        </div>
      </div>
    </div>
  );
}
