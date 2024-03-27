import { Link, useLocation } from "react-router-dom";

const NavItem = ({ text }: { text: string }) => {
  const { pathname } = useLocation();
  const isActive = pathname.replace("/", "") === text.toLowerCase();

  const className = `border-default p-2 sm:p-4 rounded-lg hover:bg-grey-hover text-center cursor-pointer transition-all ease-in-out ${
    isActive ? "bg-grey-light w-3/5" : "w-2/5"
  }`;

  return (
    <Link className={className} to={`/${text.toLowerCase()}`}>
      {text}
    </Link>
  );
};

export const Nav = () => {
  return (
    <nav className="p-4 pb-2 sm:pb-4 sm:border-default sm:rounded-xl">
      <ul className="flex gap-x-2 sm:gap-x-2 align items-center">
        <NavItem text="Search" />
        <NavItem text="Added" />
      </ul>
    </nav>
  );
};
