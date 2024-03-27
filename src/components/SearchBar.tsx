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
    <>
      <div className="gap-y-4 w-full">
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
      </div>
      {inputValueBeforeSearch.current && (
        <div
          className="flex items-center w-min max-w-full mt-2 sm:mt-4 gap-x-1 border-default py-2 px-4 hover:bg-grey-hover rounded-md cursor-pointer mr-auto"
          onClick={() => searchHandler(true)}
        >
          <span className="text-ellipsis overflow-hidden">
            {inputValueBeforeSearch.current}
          </span>
          <IoMdClose className="text-lg" />
        </div>
      )}
    </>
  );
};
