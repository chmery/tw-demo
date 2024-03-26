import { Product } from "./getProducts";

export const getSearchResults = (query: string, products: Product[]) =>
  products.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
  );
