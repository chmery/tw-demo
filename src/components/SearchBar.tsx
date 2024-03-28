import { Button } from "./Button";
import { FormEvent, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { getSearchParams } from "../utils/getSearchParams";

interface Props {
  onSearch: (inputValue: string) => void;
}

export const SearchBar = ({ onSearch }: Props) => {
  const [inputValue, setInputValue] = useState("");
  const { query } = getSearchParams(window.location.href);
  const isEmpty = inputValue === "";

  const searchHandler = (
    e?: FormEvent<HTMLFormElement>,
    undoSearch = false
  ) => {
    e?.preventDefault();
    onSearch(undoSearch ? "" : inputValue);
    if (undoSearch) setInputValue("");
  };

  return (
    <>
      <form className="gap-y-4 w-full" onSubmit={(e) => searchHandler(e)}>
        <div className="flex relative items-center ">
          <input
            value={inputValue}
            className="border-default py-4 pl-4 pr-14 rounded-lg outline-grey-dark w-full placeholder:text-grey-dark "
            placeholder="Search items..."
            name="search"
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <input type="submit" className="hidden" />
          {!isEmpty && (
            <Button
              onClick={() => searchHandler(undefined, true)}
              className="absolute right-2 "
            >
              <IoMdClose className="text-grey-dark text-2xl" />
            </Button>
          )}
        </div>
      </form>
      {query && (
        <div
          className="flex items-center w-min max-w-full mt-2 sm:mt-4 gap-x-1 border-default py-2 px-4 hover:bg-grey-hover rounded-md cursor-pointer mr-auto"
          onClick={() => searchHandler(undefined, true)}
        >
          <span className="text-ellipsis overflow-hidden">{query}</span>
          <IoMdClose className="text-lg" />
        </div>
      )}
    </>
  );
};
