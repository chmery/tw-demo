import { useLoaderData, useSearchParams } from "react-router-dom";
import { ProductsList } from "../components/ProductsList";
import { Pagination } from "../components/Pagination/Pagination";
import { SearchBar } from "../components/SearchBar";
import { Select } from "../components/Select/Select";
import {
  PER_PAGE_OPTIONS,
  SORT_OPTIONS,
  SelectOption,
} from "../constants/constants";
import { ProductsData } from "../utils/getProducts";

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    products,
    total: totalResults,
    limit: perPage,
    page: currentPage,
  } = useLoaderData() as ProductsData;

  const searchHandler = (inputValue: string) =>
    setSearchParams((prevState) => ({
      ...Object.fromEntries(prevState),
      q: inputValue,
      page: "1",
    }));

  const selectHandler = (option: SelectOption) => {
    const { text: limit, order } = option;

    if (order) {
      setSearchParams((prevState) => ({
        ...Object.fromEntries(prevState),
        order,
      }));
      return;
    }

    setSearchParams((prevState) => ({
      ...Object.fromEntries(prevState),
      limit,
      page: "1",
    }));
  };

  return (
    <div className="mt-4 border-default p-4 rounded-lg">
      <div className="flex items-start justify-between gap-x-2">
        <SearchBar onSearch={searchHandler} />
        <div className="flex gap-x-2">
          <Select
            options={PER_PAGE_OPTIONS}
            selectText="Results"
            onSelect={selectHandler}
          />
          <Select
            options={SORT_OPTIONS}
            selectText="Sort"
            onSelect={selectHandler}
          />
        </div>
      </div>
      {totalResults > 0 && (
        <>
          <ProductsList products={products} />
          <Pagination
            currentPage={currentPage}
            totalResults={totalResults}
            perPage={perPage}
          />
        </>
      )}
    </div>
  );
};
