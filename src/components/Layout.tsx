import { Outlet, useNavigation, useSearchParams } from "react-router-dom";
import { Nav } from "./Nav";
import { createContext, useState } from "react";
import { Product } from "../utils/getProducts";
import {
  PER_PAGE_OPTIONS,
  SORT_OPTIONS,
  SelectOption,
} from "../constants/constants";
import { Select } from "./Select/Select";
import { SearchBar } from "./SearchBar";
import { getSortedProducts } from "../utils/getSortedProducts";
import { getSearchResults } from "../utils/getSearchResults";
import { SkeletonElements } from "./SkeletonElements";

interface AddedProducts {
  products: Product[];
  searchResults: Product[];
  sortedProducts: Product[];
}

interface AddedProductsContext {
  addedProducts: AddedProducts;
  setAddedProducts: React.Dispatch<React.SetStateAction<AddedProducts>>;
}

const initialAddedProductsState = {
  products: [],
  searchResults: [],
  sortedProducts: [],
};

export const AddedProductsContext = createContext<AddedProductsContext>({
  addedProducts: initialAddedProductsState,
  setAddedProducts: () => {},
});

export const Layout = () => {
  const [addedProducts, setAddedProducts] = useState<AddedProducts>(
    initialAddedProductsState
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const navigation = useNavigation();

  const limit = searchParams.get("limit");
  const skeletonElementsAmount = limit ? +limit : +PER_PAGE_OPTIONS[0].text;

  const searchHandler = (inputValue: string) => {
    setSearchParams((prevState) => ({
      ...Object.fromEntries(prevState),
      q: inputValue,
      page: "1",
    }));

    const searchResults = getSearchResults(inputValue, addedProducts.products);
    setAddedProducts((prevState) => ({ ...prevState, searchResults }));
  };

  const sortSelectHandler = (option: SelectOption) => {
    const { order } = option;
    if (!order) return;

    const isSearching = searchParams.get("q");

    setSearchParams((prevState) => ({
      ...Object.fromEntries(prevState),
      order,
    }));

    setAddedProducts((prevState) => {
      const sortedProducts = getSortedProducts(order, prevState.products);
      const sortedSearchResults = getSortedProducts(
        order,
        prevState.searchResults
      );

      return {
        ...prevState,
        sortedProducts: isSearching ? prevState.products : sortedProducts,
        searchResults: isSearching
          ? sortedSearchResults
          : prevState.searchResults,
      };
    });
  };

  const perPageSelectHandler = (option: SelectOption) => {
    setSearchParams((prevState) => ({
      ...Object.fromEntries(prevState),
      limit: option.text,
      page: "1",
    }));
  };

  return (
    <AddedProductsContext.Provider value={{ addedProducts, setAddedProducts }}>
      <Nav />
      <div className="sm:mt-4 sm:border-default p-4 pt-0 sm:pt-4 rounded-lg">
        <SearchBar onSearch={searchHandler} />
        <div className="flex gap-x-2 mt-2 sm:mt-4  justify-between">
          <Select
            options={PER_PAGE_OPTIONS}
            selectName="Results"
            onSelect={perPageSelectHandler}
          />
          <Select
            options={SORT_OPTIONS}
            selectName="Sort"
            onSelect={sortSelectHandler}
          />
        </div>
        {navigation.state === "loading" ? (
          <SkeletonElements amount={skeletonElementsAmount} />
        ) : (
          <Outlet />
        )}
      </div>
    </AddedProductsContext.Provider>
  );
};
