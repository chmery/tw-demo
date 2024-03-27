import { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

export const Wrapper = ({ children }: Props) => {
  return (
    <div className="m-auto max-w-[600px] min-w-[250px] sm:px-2 sm:my-16">
      {children}
    </div>
  );
};
