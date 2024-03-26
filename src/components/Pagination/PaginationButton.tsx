import { ReactElement } from "react";

interface Props {
  number?: number;
  currentPage?: number;
  onClick: () => void;
  children?: ReactElement;
}

export const PaginationButton = ({
  number,
  currentPage,
  onClick,
  children,
}: Props) => {
  const isPageButton = number && currentPage ? true : false;
  const isSwitchButton = children ? true : false;

  return (
    <button
      className={`flex justify-center items-center text-grey-dark hover:bg-grey-hover hover:text-black rounded-md cursor-pointer ${
        isPageButton && "size-10"
      } ${isSwitchButton && "py-2 px-4"} ${
        isPageButton &&
        currentPage === number &&
        "font-medium border-default text-black"
      }`}
      onClick={onClick}
    >
      {isPageButton && number}
      {isSwitchButton && children}
    </button>
  );
};
