import { ReactElement } from "react";

interface Props {
  number?: number;
  currentPage?: number;
  onClick: () => void;
  children?: ReactElement;
  disabled?: boolean;
}

export const PaginationButton = ({
  number,
  currentPage,
  onClick,
  children,
  disabled,
}: Props) => {
  const isPageButton = number && currentPage ? true : false;
  const isSwitchButton = children ? true : false;

  return (
    <button
      className={`size-10 mx-[1px] flex justify-center items-center text-grey-dark enabled:hover:bg-grey-hover enabled:hover:text-black rounded-md cursor-pointer disabled:cursor-not-allowed ${
        isPageButton &&
        currentPage === number &&
        "font-medium border-default !text-black"
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {isPageButton && number}
      {isSwitchButton && children}
    </button>
  );
};
