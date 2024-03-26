import { Link, useLocation } from "react-router-dom";

const NavItem = ({ text }: { text: string }) => {
  const { pathname } = useLocation();
  const isActive = pathname.replace("/", "") === text.toLowerCase();

  const activeClasses = "bg-grey-light w-3/5";
  const notActiveClasses = "w-2/5";

  const className = `border-default p-4 rounded-xl hover:bg-grey-hover text-center cursor-pointer transition-all ease-in-out ${
    isActive ? activeClasses : notActiveClasses
  }`;

  return (
    <Link className={className} to={`/${text.toLowerCase()}`}>
      {text}
    </Link>
  );
};

export const Nav = () => {
  return (
    <nav className="p-4 border-default rounded-xl">
      <ul className="flex gap-x-4 align items-center">
        <NavItem text="Search" />
        <NavItem text="Added" />
      </ul>
    </nav>
  );
};
