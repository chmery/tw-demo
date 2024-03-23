import { useLoaderData, useSearchParams } from "react-router-dom";
import { ProductsList } from "../components/ProductsList";
import { Pagination } from "../components/Pagination/Pagination";
import { SearchBar } from "../components/SearchBar";
import { Select } from "../components/Select/Select";
import { useCallback, useEffect, useState } from "react";
import {
  PER_PAGE_OPTIONS,
  SORT_OPTIONS,
  SelectOption,
} from "../constants/constants";
import { getSortedProducts } from "../utils/getSortedProducts";

export const Search = () => {
  // page klik zmienia search params
  const [searchParams, setSearchParams] = useSearchParams();
  const [perPage, setPerPage] = useState(+PER_PAGE_OPTIONS[0].text);

  const { products: productsData, total: totalResults } =
    useLoaderData() as ProductsData;

  // search params zmieniony wiec state sie zmienia, products data sie zmienia

  const getInitialProducts = useCallback(() => {
    const order = searchParams.get("order");
    return order ? getSortedProducts(order, productsData) : productsData;
  }, [productsData, searchParams]);

  const [products, setProducts] = useState(getInitialProducts());

  const searchHandler = (inputValue: string) =>
    setSearchParams((prevState) => ({
      ...Object.fromEntries(prevState),
      q: inputValue,
      page: "1",
    }));

  const selectHandler = (option: SelectOption) => {
    const { text: limit, order } = option;

    if (typeof order === "string") {
      setProducts(getSortedProducts(order, products));
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
    setPerPage(+option);
  };

  console.log("render");

  useEffect(() => {
    setProducts(getInitialProducts());
  }, [getInitialProducts]);

  return (
    <div className="mt-4 border-default p-4 rounded-lg">
      <div className="flex items-center justify-between gap-x-2">
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
          <Pagination totalResults={totalResults} perPage={perPage} />
        </>
      )}
    </div>
  );
};
