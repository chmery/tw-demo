const SkeletonElement = () => {
  return (
    <div className="py-6 animate-pulse w-full sm:basis-[calc(50%-0.5rem)]">
      <div className="w-full aspect-square object-cover rounded-lg bg-grey-light"></div>
      <div className="mr-auto mt-4">
        <div className="bg-grey-light w-16 h-4 rounded-md mb-2"></div>
        <div className="bg-grey-light w-3/4 h-4 rounded-md"></div>
        <div className="bg-grey-light w-1/2 h-4 rounded-md mt-2"></div>
        <div className="flex justify-between mt-4">
          <div className="bg-grey-light w-16 h-6 rounded-md"></div>
          <div className="bg-grey-light w-16 h-9 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonElements = ({ amount }: { amount: number }) => {
  return (
    <div className="sm:flex flex-wrap gap-x-4">
      {Array.from({ length: amount }, (_, index) => (
        <SkeletonElement key={index} />
      ))}
    </div>
  );
};
