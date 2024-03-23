export const getSortedProducts = (order: string, products: Product[]) => {
  const productsCopy = structuredClone(products);

  productsCopy.sort((a, b) =>
    order === "asc" ? a.price - b.price : b.price - a.price
  );

  return productsCopy;
};
