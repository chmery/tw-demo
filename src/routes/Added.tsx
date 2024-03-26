import { useContext } from "react";
import { Pagination } from "../components/Pagination/Pagination";
import { ProductsList } from "../components/ProductsList";
import { AddedProductsContext } from "../components/Layout";
import { getSearchParams } from "../utils/getSearchParams";
import { LinkButton } from "../components/LinkButton";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export const Added = () => {
  const { addedProducts } = useContext(AddedProductsContext);

  const {
    page: currentPage,
    limit: perPage,
    query,
    order,
  } = getSearchParams(window.location.href);

  const isSearching = query;
  const isSorted = order;
  const isAddedProductsEmpty = addedProducts.products.length === 0;

  const paginationStart = +currentPage * +perPage - +perPage;
  const paginationEnd = paginationStart + +perPage;

  const paginatedProducts = addedProducts[
    isSearching ? "searchResults" : isSorted ? "sortedProducts" : "products"
  ].slice(paginationStart, paginationEnd);

  return (
    <>
      {!isAddedProductsEmpty && (
        <>
          <ProductsList products={paginatedProducts} />
          <Pagination
            currentPage={+currentPage}
            totalResults={
              isSearching
                ? addedProducts.searchResults.length
                : addedProducts.products.length
            }
            perPage={+perPage}
          />
        </>
      )}
      {isSearching && isAddedProductsEmpty && (
        <div className="flex flex-col items-center py-28">
          <HiMiniMagnifyingGlass className="text-grey-dark text-3xl" />
          <h3 className="text-grey-dark">No results found</h3>
        </div>
      )}
      {!isSearching && isAddedProductsEmpty && (
        <div className="flex flex-col items-center py-28 gap-y-4">
          <h3 className="text-grey-dark text-center px-4">
            You haven't added any products yet. Why not explore our search
            section and find something that catches your eye?
          </h3>
          <LinkButton to="/search" text="Start Searching" />
        </div>
      )}
    </>
  );
};
