
export const MovieSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="aspect-[2/3] bg-slate-700 rounded-xl mb-3"></div>
      <div className="space-y-2">
        <div className="h-4 bg-slate-700 rounded w-3/4"></div>
        <div className="h-3 bg-slate-700 rounded w-1/2"></div>
      </div>
    </div>
  );
};
