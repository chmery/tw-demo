import { getSearchParams } from "./getSearchParams";
import { getSortedProducts } from "./getSortedProducts";

export interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
}

interface ProductsDataJSON {
  products: Product[];
  total: number;
  limit: number;
}

export interface ProductsData extends ProductsDataJSON {
  page: number;
}

export const getProducts = async (request: Request): Promise<ProductsData> => {
  const { query, skip, limit, order, page } = getSearchParams(request.url);

  const searchParamsString = `${
    query ? `/search?q=${query}&` : `?`
  }skip=${skip}&limit=${limit}`;

  const fetchUrl = `https://dummyjson.com/products${searchParamsString}`;

  try {
    const res = await fetch(fetchUrl);
    if (!res.ok)
      throw new Error(`Failed to fetch data. Status: ${res.status}.`);

    const productsDataJSON: ProductsDataJSON | undefined = await res.json();
    if (!productsDataJSON) throw new Error("Failed to parse JSON data.");

    const { products, total } = productsDataJSON;

    const productsData = {
      products: order ? getSortedProducts(order, products) : products,
      total,
      limit: +limit,
      page: +page,
    };

    return productsData;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error(String(error));
    }
  }
};
