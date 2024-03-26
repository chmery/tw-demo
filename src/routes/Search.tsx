import { useLoaderData } from "react-router-dom";
import { ProductsList } from "../components/ProductsList";
import { Pagination } from "../components/Pagination/Pagination";
import { ProductsData } from "../utils/getProducts";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export const Search = () => {
  const {
    products,
    total: totalResults,
    limit: perPage,
    page: currentPage,
  } = useLoaderData() as ProductsData;

  return (
    <>
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
      {!totalResults && (
        <div className="flex flex-col items-center py-28">
          <HiMiniMagnifyingGlass className="text-grey-dark text-3xl" />
          <h3 className="text-grey-dark">No results found</h3>
        </div>
      )}
    </>
  );
};
