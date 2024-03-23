import { useLoaderData, useSearchParams } from "react-router-dom";
import { ProductsList } from "../components/ProductsList";
import { Pagination } from "../components/Pagination/Pagination";
import { SearchBar } from "../components/SearchBar";
import { Select } from "../components/Select/Select";
import { useState } from "react";
import { PER_PAGE_OPTIONS, SORT_OPTIONS } from "../constants/constants";

export const Search = () => {
  const [perPage, setPerPage] = useState(+PER_PAGE_OPTIONS[0]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { products, total: totalResults } = useLoaderData() as ProductsData;

  const searchHandler = (inputValue: string) => {
    setSearchParams((prevState) => {
      return { ...Object.fromEntries(prevState), q: inputValue, page: "1" };
    });
  };

  const selectHandler = (option: string) => {
    if (isNaN(Number(option))) {
      // sort
      return;
    }

    setSearchParams((prevState) => {
      return { ...Object.fromEntries(prevState), limit: option, page: "1" };
    });
    setPerPage(+option);
  };

  return (
    <div className="mt-4 border-default p-4 rounded-lg">
      <div className="flex items-center justify-between gap-x-2">
        <SearchBar onSearch={searchHandler} />
        <div className="flex gap-x-2">
          <Select
            options={PER_PAGE_OPTIONS}
            name="Results"
            onSelect={selectHandler}
          />
          <Select options={SORT_OPTIONS} name="Sort" onSelect={selectHandler} />
        </div>
      </div>
      {totalResults > 0 && (
        <>
          <ProductsList products={products} />
          <Pagination totalResults={totalResults} perPage={perPage} />
        </>
      )}
    </div>
  );
};
