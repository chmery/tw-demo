import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PaginationButton } from "./PaginationButton";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  // temporary - change to dynamic value in future
  const MAX_PAGE = 30;

  const isAtBeginning = currentPage < 4;
  const isInMiddle = currentPage >= 4 && currentPage < MAX_PAGE - 3;
  const isAtEnd = currentPage >= MAX_PAGE - 3;

  const pages = useMemo(() => {
    const array = [];

    for (let i = 1; i <= MAX_PAGE; i++) {
      array.push(i);
    }

    return array;
  }, []);

  const incrementPageHandler = () => {
    if (currentPage === MAX_PAGE) return;
    setCurrentPage((prevState) => ++prevState);
    setSearchParams({ p: `${currentPage + 1}` });
  };

  const decreasePageHandler = () => {
    if (currentPage === 1) return;
    setCurrentPage((prevState) => --prevState);
    setSearchParams({ p: `${currentPage - 1}` });
  };

  const switchPageHandler = (number: number) => {
    setSearchParams({ p: `${number}` });
    setCurrentPage(number);
  };

  return (
    <nav className="flex justify-center items-center">
      <PaginationButton onClick={decreasePageHandler}>
        <MdKeyboardArrowLeft />
      </PaginationButton>

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
          .slice(MAX_PAGE - 5, MAX_PAGE - 1)
          .map((number) => (
            <PaginationButton
              number={number}
              currentPage={currentPage}
              onClick={() => switchPageHandler(number)}
              key={number}
            />
          ))}

      {currentPage < MAX_PAGE - 3 && (
        <span className="text-grey-dark">...</span>
      )}

      <PaginationButton
        number={MAX_PAGE}
        currentPage={currentPage}
        onClick={() => switchPageHandler(MAX_PAGE)}
      />

      <PaginationButton onClick={incrementPageHandler}>
        <MdKeyboardArrowRight />
      </PaginationButton>
    </nav>
  );
};
