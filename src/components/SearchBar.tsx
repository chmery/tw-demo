import { Button } from "./Button";
import { useCallback, useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

interface Props {
  onSearch: (inputValue: string) => void;
}

export const SearchBar = ({ onSearch }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const inputValueBeforeSearch = useRef("");
  const isEmpty = inputValue === "";

  const searchHandler = useCallback(
    (undoSearch = false) => {
      onSearch(undoSearch ? "" : inputValue);
      inputValueBeforeSearch.current = undoSearch ? "" : inputValue;

      if (undoSearch) setInputValue("");
    },
    [onSearch, inputValue]
  );

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key !== "Enter") return;
      searchHandler();
    };
    document.addEventListener("keydown", keyDownHandler);
    return () => document.removeEventListener("keydown", keyDownHandler);
  }, [searchHandler]);

  return (
    <div className="flex flex-col gap-y-4 w-full">
      <div className="flex relative items-center ">
        <input
          value={inputValue}
          className="border-default py-4 pl-4 pr-14 rounded-lg outline-grey-dark w-full placeholder:text-grey-dark "
          placeholder="Search items..."
          name="search"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
        />
        {!isEmpty && (
          <Button
            onClick={() => setInputValue("")}
            className="absolute right-2 "
          >
            <IoMdClose className="text-grey-dark text-2xl" />
          </Button>
        )}
      </div>
      {inputValueBeforeSearch.current && (
        <p className="flex items-center gap-x-2">
          Results for:
          <span
            className="flex gap-x-1 items-center font-medium border-default py-2 px-4 hover:bg-grey-hover rounded-md cursor-pointer"
            onClick={() => searchHandler(true)}
          >
            {inputValueBeforeSearch.current}
            <IoMdClose className="text-lg" />
          </span>
        </p>
      )}
    </div>
  );
};
