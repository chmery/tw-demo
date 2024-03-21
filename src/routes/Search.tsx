import { useLoaderData, useSearchParams } from "react-router-dom";
import { ItemsList } from "../components/ItemsList";
import { Pagination } from "../components/Pagination/Pagination";
import { SearchBar } from "../components/SearchBar";
import { Select } from "../components/Select/Select";
import { ProductsData } from "../utils/getProducts";
import { useState } from "react";

export const Search = () => {
  const [perPage, setPerPage] = useState(5);
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, total: totalResults } = useLoaderData() as ProductsData;

  const searchHandler = (inputValue: string) => {
    setSearchParams((prevState) => {
      return { ...Object.fromEntries(prevState), q: inputValue };
    });
  };

  const selectHandler = (option: string) => {
    if (isNaN(Number(option))) {
      // sort
      return;
    }

    setSearchParams((prevState) => {
      return { ...Object.fromEntries(prevState), limit: option };
    });
    setPerPage(+option);
  };

  return (
    <div className="mt-4 border-default p-4 rounded-lg">
      <div className="flex items-center justify-between gap-x-2">
        <SearchBar onSearch={searchHandler} />
        <div className="flex gap-x-2">
          <Select
            options={["5", "10", "15"]}
            name="Results"
            onSelect={selectHandler}
          />
          <Select
            options={["Asc.", "Desc."]}
            name="Sort"
            onSelect={selectHandler}
          />
        </div>
      </div>
      <ItemsList items={products} />
      <Pagination totalResults={totalResults} perPage={perPage} />
    </div>
  );
};
