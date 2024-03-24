import { Link } from "react-router-dom";

interface Props {
  to: string;
  text: string;
  classname?: string;
}

export const LinkButton = ({ to, text, classname }: Props) => {
  return (
    <Link
      className={`border-default rounded-md hover:bg-hover py-2 px-2 transition inline-block ${
        classname ? classname : ""
      }`}
      to={to}
    >
      {text}
    </Link>
  );
};
