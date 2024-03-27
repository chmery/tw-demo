import { useMemo } from "react";

export const usePaginationCalculations = (
  totalResults: number,
  perPage: number
) => {
  const maxPage = useMemo(
    () => Math.ceil(totalResults / perPage),
    [perPage, totalResults]
  );

  const pages = useMemo(
    () => Array.from({ length: maxPage }, (_, index) => ++index),
    [maxPage]
  );

  return { maxPage, pages };
};
