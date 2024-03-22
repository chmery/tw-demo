import { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

export const Wrapper = ({ children }: Props) => {
  return <div className="m-auto my-16 px-2 max-w-[600px]">{children}</div>;
};
