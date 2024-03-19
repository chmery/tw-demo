import { LuSearch } from "react-icons/lu";
import { Button } from "./Button";
import { useState } from "react";

interface Props {
  onSearch: (inputValue: string) => void;
}

export const SearchBar = ({ onSearch }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const isEmpty = inputValue === "";

  const searchHandler = () => {
    setInputValue("");
    onSearch(inputValue);
  };

  return (
    <div className="flex items-center gap-x-2 relative w-full">
      <input
        value={inputValue}
        className="border-default py-4 pl-4 pr-[6.5rem] rounded-lg outline-grey-dark w-full placeholder:text-grey-dark "
        placeholder="Search items..."
        name="search"
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      {!isEmpty && (
        <Button onClick={searchHandler} className="absolute right-2 ">
          <LuSearch className="text-grey-dark text-2xl" />
        </Button>
      )}
    </div>
  );
};
