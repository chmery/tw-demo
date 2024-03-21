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
  const searchParams = getSearchParams(request);
  const fetchUrl = `https://dummyjson.com/products${searchParams}&select=title,description,images`;

  try {
    const response = await fetch(fetchUrl);
    const products = await response.json();
    return products;
  } catch (error) {
    throw error;
  }
};
