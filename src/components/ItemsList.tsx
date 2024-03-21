import { IoMdAdd } from "react-icons/io";
import { Button } from "./Button";

interface Item {
  id: number;
  title: string;
  description: string;
  images: string[];
}

interface ItemProps {
  onAdd: (id: number) => void;
  item: Item;
}

interface ItemsListProps {
  items: Item[];
}

const Item = ({ item, onAdd }: ItemProps) => {
  const { id, title, images, description } = item;

  return (
    <div className="flex gap-x-4 items-center border-solid border-b border-grey-light py-6 last:border-b-0">
      <img className="w-20 h-20 rounded-lg" src={images[0]} alt={title} />
      <div className="text-left">
        <h3 className="font-medium">{title}</h3>
        <p className="text-grey-dark">{description}</p>
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

export const ItemsList = ({ items }: ItemsListProps) => {
  const addItemHandler = (id: number) => {};

  return (
    <div>
      {items.map((item) => (
        <Item item={item} key={item.id} onAdd={addItemHandler} />
      ))}
    </div>
  );
};
