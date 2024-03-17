import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  width?: string;
  disabled?: boolean;
}

export const Button = ({ children, onClick, width, disabled }: Props) => {
  const widthClass = `w-[${width}]`;

  return (
    <button
      className={`border-default rounded-md hover:bg-hover py-2 px-4 transition disabled:bg-hover disabled:cursor-not-allowed disabled:text-grey-dark ${
        width && widthClass
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
