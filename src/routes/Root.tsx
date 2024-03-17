import { Button } from "../components/Button";
import { ItemsList } from "../components/ItemsList";

const TEST_DATA = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
];

export const Root = () => {
  return (
    <div className="text-center">
      <h1 className="font-extrabold text-5xl mx-auto">
        Welcome to
        <br />
        the Platform
      </h1>
      <p className="text-grey-dark mx-auto py-4 text-lg">
        Explore, Discover, and Save with Our Dynamic Search and Add App Designed
        to Enhance Your Favorites Collection.
      </p>
      <Button className="w-[300px]">Start Searching</Button>
      <ItemsList items={TEST_DATA} />
    </div>
  );
};
