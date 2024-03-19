import { Button } from "../components/Button";
import { SearchBar } from "../components/SearchBar";
import { Select } from "../components/Select/Select";

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
      <div className="flex items-center justify-between gap-x-2 mt-4">
        <SearchBar />
        <div className="flex gap-x-2">
          <Select options={["5", "10", "15"]} name="Results" />
          <Select options={["Asc", "Desc"]} name="Sort" />
        </div>
      </div>
    </div>
  );
};
