import { LinkButton } from "../components/LinkButton";

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
      <LinkButton to="search" text="Start Searching" classname="w-[300px]" />
    </div>
  );
};
