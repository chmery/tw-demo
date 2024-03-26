const SkeletonElement = () => {
  return (
    <div className="gap-x-4 py-6 animate-pulse w-full h-32 flex justify-between items-center">
      <div className=" w-20 h-20 rounded-lg bg-grey-light"></div>
      <div className="mr-auto ">
        <div className="bg-grey-light w-16 h-4 rounded-md mb-2"></div>
        <div className="bg-grey-light w-64 h-4 rounded-md"></div>
        <div className="bg-grey-light w-12 h-4 rounded-md mt-2"></div>
      </div>
      <div className="bg-grey-light w-16 h-9 rounded-md"></div>
    </div>
  );
};

export const SkeletonElements = ({ amount }: { amount: number }) =>
  Array.from({ length: amount }, (_, index) => <SkeletonElement key={index} />);
