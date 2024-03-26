import { useMemo } from "react";

export const usePaginationCalculations = (
  totalResults: number,
  perPage: number
) => {
  const maxPage = useMemo(
    () => Math.ceil(totalResults / perPage),
    [perPage, totalResults]
  );

  const pages = useMemo(() => {
    const array = [];

    for (let i = 1; i <= maxPage; i++) {
      array.push(i);
    }

    return array;
  }, [maxPage]);

  return { maxPage, pages };
};
