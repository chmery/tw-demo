import { PER_PAGE_OPTIONS } from "../constants/constants";

export const getSearchParams = (url: string) => {
  const { searchParams } = new URL(url);

  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || PER_PAGE_OPTIONS[0].text;
  const query = searchParams.get("q");
  const order = searchParams.get("order");

  const skip = `${+page * +limit - +limit}`;

  return { page, limit, query, order, skip };
};
