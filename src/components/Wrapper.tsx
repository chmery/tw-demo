import { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

export const Wrapper = ({ children }: Props) => {
  return <div className="m-auto px-2 max-w-[600px] mt-16">{children}</div>;
};
