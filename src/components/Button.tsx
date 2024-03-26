import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button = ({ children, onClick, disabled, className }: Props) => {
  return (
    <button
      className={`border-default rounded-md hover:bg-grey-hover py-2 px-2 transition disabled:bg-grey-hover disabled:cursor-not-allowed disabled:text-grey-dark outline-grey-dark ${
        className ? className : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
