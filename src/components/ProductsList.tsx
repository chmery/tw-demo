import { IoMdAdd } from "react-icons/io";
import { Button } from "./Button";
import { Product } from "../utils/getProducts";
import { useContext } from "react";
import { AddedProductsContext } from "./Layout";
import { MdOutlineClose } from "react-icons/md";

const ProductItem = ({ product }: { product: Product }) => {
  const { title, images, description, price, id } = product;
  const { addedProducts, setAddedProducts } = useContext(AddedProductsContext);
  const isAdded = addedProducts.products.some((product) => product.id === id);

  const addProductHandler = () =>
    setAddedProducts((prevState) => ({
      ...prevState,
      products: [...prevState.products, product],
    }));

  const removeProductHandler = () =>
    setAddedProducts((prevState) => ({
      ...prevState,
      products: prevState.products.filter((product) => product.id !== id),
      sortedProducts: prevState.sortedProducts.filter(
        (product) => product.id !== id
      ),
    }));

  return (
    <div className="sm:basis-[calc(50%-0.5rem)] flex flex-col gap-y-4 py-6">
      <img
        className="w-full aspect-square object-cover rounded-lg max-w-none"
        src={images[0]}
        alt={title}
      />

      <div className=" flex flex-col h-full">
        <h3 className="font-medium">{title}</h3>
        <p className="text-grey-dark">{description}</p>
        <div className="flex justify-between items-center mt-auto pt-4">
          <p className="text-lg font-medium">${price}</p>
          <Button
            className={`ml-auto items-center gap-x-1 flex px-4 ${
              isAdded && "bg-red hover:bg-red-hover text-white"
            }`}
            onClick={isAdded ? removeProductHandler : addProductHandler}
          >
            {isAdded ? "Remove" : "Add"}
            {isAdded ? <MdOutlineClose /> : <IoMdAdd />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div className="sm:flex flex-wrap gap-x-4">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};
