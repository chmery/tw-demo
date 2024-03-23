import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PaginationButton } from "./PaginationButton";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useGetPages } from "../../hooks/useGetPages";

interface Props {
  totalResults: number;
  perPage: number;
}

export const Pagination = ({ totalResults, perPage }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getInitialPage = useCallback(() => {
    const page = searchParams.get("page");
    return page === null ? 1 : +page;
  }, [searchParams]);

  const [currentPage, setCurrentPage] = useState(getInitialPage());

  const maxPage = Math.ceil(totalResults / perPage);

  const isAtBeginning = currentPage < 4;
  const isInMiddle = currentPage >= 4 && currentPage < maxPage - 3;
  const isAtEnd = currentPage >= maxPage - 3;

  const isExtendedPagination = maxPage > 6;

  const pages = useGetPages(maxPage);

  const incrementPageHandler = () => {
    if (currentPage === maxPage) return;
    setCurrentPage((prevState) => prevState + 1);
    setSearchParams((prevState) => {
      return { ...Object.fromEntries(prevState), page: `${currentPage + 1}` };
    });
  };

  const decreasePageHandler = () => {
    if (currentPage === 1) return;
    setCurrentPage((prevState) => prevState - 1);
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

  useEffect(() => {
    setCurrentPage(getInitialPage());
  }, [getInitialPage]);

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
