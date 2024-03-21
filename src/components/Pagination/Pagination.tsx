import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PaginationButton } from "./PaginationButton";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  totalResults: number;
  perPage: number;
}

export const Pagination = ({ totalResults, perPage }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialPage = searchParams.get("page") ? +searchParams.get("page") : 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const maxPage = Math.ceil(totalResults / perPage);

  const isAtBeginning = currentPage < 4;
  const isInMiddle = currentPage >= 4 && currentPage < maxPage - 3;
  const isAtEnd = currentPage >= maxPage - 3;

  const isExtendedPagination = maxPage > 6;

  const pages = useMemo(() => {
    const array = [];

    for (let i = 1; i <= maxPage; i++) {
      array.push(i);
    }

    return array;
  }, [maxPage]);

  const incrementPageHandler = () => {
    if (currentPage === maxPage) return;
    setCurrentPage((prevState) => ++prevState);
    setSearchParams((prevState) => {
      return { ...Object.fromEntries(prevState), page: `${currentPage + 1}` };
    });
  };

  const decreasePageHandler = () => {
    if (currentPage === 1) return;
    setCurrentPage((prevState) => --prevState);
    setSearchParams((prevState) => {
      return { ...Object.fromEntries(prevState), page: `${currentPage - 1}` };
    });
  };

  const switchPageHandler = (number: number) => {
    setCurrentPage(number);
    setSearchParams((prevState) => {
      return { ...Object.fromEntries(prevState), page: `${number}` };
    });
  };

  return (
    <nav className="flex justify-center items-center">
      <PaginationButton onClick={decreasePageHandler}>
        <MdKeyboardArrowLeft />
      </PaginationButton>

      {!isExtendedPagination &&
        pages
          .slice(0, maxPage)
          .map((number) => (
            <PaginationButton
              number={number}
              currentPage={currentPage}
              onClick={() => switchPageHandler(number)}
              key={number}
            />
          ))}

      {isExtendedPagination && (
        <>
          <PaginationButton
            number={1}
            currentPage={currentPage}
            onClick={() => switchPageHandler(1)}
          />

          {currentPage >= 5 && <span className="text-grey-dark">...</span>}

          {isAtBeginning &&
            pages
              .slice(1, 5)
              .map((number) => (
                <PaginationButton
                  number={number}
                  currentPage={currentPage}
                  onClick={() => switchPageHandler(number)}
                  key={number}
                />
              ))}

          {isInMiddle &&
            pages
              .slice(currentPage - 3, currentPage + 2)
              .map((number) => (
                <PaginationButton
                  number={number}
                  currentPage={currentPage}
                  onClick={() => switchPageHandler(number)}
                  key={number}
                />
              ))}

          {isAtEnd &&
            pages
              .slice(maxPage - 5, maxPage - 1)
              .map((number) => (
                <PaginationButton
                  number={number}
                  currentPage={currentPage}
                  onClick={() => switchPageHandler(number)}
                  key={number}
                />
              ))}

          {currentPage < maxPage - 3 && (
            <span className="text-grey-dark">...</span>
          )}

          <PaginationButton
            number={maxPage}
            currentPage={currentPage}
            onClick={() => switchPageHandler(maxPage)}
          />
        </>
      )}

      <PaginationButton onClick={incrementPageHandler}>
        <MdKeyboardArrowRight />
      </PaginationButton>
    </nav>
  );
};
