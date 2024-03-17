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
    <div className="flex items-center gap-x-3">
      <LuSearch className="text-grey-dark text-2xl" />
      <input
        value={inputValue}
        className="p-4 rounded-lg outline-grey-dark w-full placeholder:text-grey-dark"
        placeholder="Search items..."
        name="search"
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClick={searchHandler} disabled={isEmpty}>
        Search
      </Button>
    </div>
  );
};
