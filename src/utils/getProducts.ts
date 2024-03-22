import { getSearchParams } from "./getSearchParams";

export interface ProductsData {
  products: {
    id: number;
    title: string;
    description: string;
    images: string[];
  }[];
  total: number;
}

export const getProducts = async (request: Request): Promise<ProductsData> => {
  const searchParams = getSearchParams(request.url);
  const fetchUrl = `https://dummyjson.com/products${searchParams}`;

  try {
    const response = await fetch(fetchUrl);
    const products = await response.json();
    return products;
  } catch (error) {
    throw error;
  }
};
