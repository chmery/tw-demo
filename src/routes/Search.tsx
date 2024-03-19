import { ItemsList } from "../components/ItemsList";
import { Pagination } from "../components/Pagination/Pagination";
import { SearchBar } from "../components/SearchBar";
import { Select } from "../components/Select/Select";

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

export const Search = () => {
  const searchHandler = (inputValue: string) => {};
  const selectHandler = (option: string) => {};

  return (
    <div className="mt-4 border-default p-4 rounded-lg">
      <div className="flex items-center justify-between gap-x-2">
        <SearchBar onSearch={searchHandler} />
        <div className="flex gap-x-2">
          <Select
            options={["5", "10", "15"]}
            name="Results"
            onSelect={selectHandler}
          />
          <Select
            options={["Asc.", "Desc."]}
            name="Sort"
            onSelect={selectHandler}
          />
        </div>
      </div>
      <ItemsList items={TEST_DATA} />
      <Pagination />
    </div>
  );
};
