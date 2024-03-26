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
    <div className="flex gap-x-4 items-center border-solid border-b border-grey-light py-6 last:border-b-0">
      <img
        className=" w-20 h-20 rounded-lg object-cover"
        src={images[0]}
        alt={title}
      />
      <div className="text-left">
        <h3 className="font-medium">{title}</h3>
        <p className="text-grey-dark">{description}</p>
        <p className="mt-2">${price}</p>
      </div>
      {!isAdded && (
        <Button
          className="ml-auto flex items-center gap-x-1"
          onClick={addProductHandler}
        >
          Add <IoMdAdd />
        </Button>
      )}
      {isAdded && (
        <Button
          className="ml-auto flex items-center gap-x-1 bg-red hover:bg-red-hover text-white"
          onClick={removeProductHandler}
        >
          Remove <MdOutlineClose />
        </Button>
      )}
    </div>
  );
};

export const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};
