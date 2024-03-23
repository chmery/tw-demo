import { IoMdAdd } from "react-icons/io";
import { Button } from "./Button";

interface ProductProps {
  onAdd: (id: number) => void;
  product: Product;
}

interface ProductsListProps {
  products: Product[];
}

const Product = ({ product, onAdd }: ProductProps) => {
  const { id, title, images, description, price } = product;

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
      <Button
        className="ml-auto flex items-center gap-x-1"
        onClick={() => onAdd(id)}
      >
        Add <IoMdAdd />
      </Button>
    </div>
  );
};

export const ProductsList = ({ products }: ProductsListProps) => {
  const addProductHandler = (id: number) => {};

  return (
    <div>
      {products.map((product) => (
        <Product product={product} key={product.id} onAdd={addProductHandler} />
      ))}
    </div>
  );
};
