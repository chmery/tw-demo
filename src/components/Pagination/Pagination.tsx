import { useSearchParams } from "react-router-dom";
import { PaginationButton } from "./PaginationButton";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { usePaginationCalculations } from "../../hooks/usePaginationCalculations";

interface Props {
  totalResults: number;
  perPage: number;
  currentPage: number;
}

export const Pagination = ({ totalResults, perPage, currentPage }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pages, maxPage } = usePaginationCalculations(totalResults, perPage);

  const isAtBeginning = currentPage < 4;
  const isInMiddle = currentPage >= 4 && currentPage < maxPage - 3;
  const isAtEnd = currentPage >= maxPage - 3;
  const isExtendedPagination = maxPage > 6;

  const updatePageNumber = (pageNumber: number) => {
    setSearchParams((prevState) => ({
      ...Object.fromEntries(prevState),
      page: `${pageNumber}`,
    }));
  };

  const incrementPageHandler = () => {
    if (currentPage === maxPage) return;
    updatePageNumber(currentPage + 1);
  };

  const decreasePageHandler = () => {
    if (currentPage === 1) return;
    updatePageNumber(currentPage - 1);
  };

  const switchPageHandler = (number: number) => updatePageNumber(number);

  const generatePaginationButtons = (start: number, end: number) => {
    return pages
      .slice(start, end)
      .map((number) => (
        <PaginationButton
          number={number}
          currentPage={currentPage}
          onClick={() => switchPageHandler(number)}
          key={number}
        />
      ));
  };

  return (
    <nav className="flex justify-center items-center">
      <PaginationButton onClick={decreasePageHandler}>
        <MdKeyboardArrowLeft />
      </PaginationButton>

      {!isExtendedPagination && generatePaginationButtons(0, maxPage)}

      {isExtendedPagination && (
        <>
          <PaginationButton
            number={1}
            currentPage={currentPage}
            onClick={() => switchPageHandler(1)}
          />

          {currentPage >= 5 && <span className="text-grey-dark">...</span>}

          {isAtBeginning && generatePaginationButtons(1, 5)}
          {isInMiddle &&
            generatePaginationButtons(currentPage - 3, currentPage + 2)}
          {isAtEnd && generatePaginationButtons(maxPage - 5, maxPage - 1)}

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
