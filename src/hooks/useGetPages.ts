import { useMemo } from "react";

export const useGetPages = (maxPage: number) => {
  const pages = useMemo(() => {
    const array = [];

    for (let i = 1; i <= maxPage; i++) {
      array.push(i);
    }

    return array;
  }, [maxPage]);

  return pages;
};
