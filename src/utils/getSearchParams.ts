export const getSearchParams = (request: Request) => {
  const url = new URL(request.url);

  const page = url.searchParams.get("page") || "1";
  const limit = url.searchParams.get("limit") || "5";
  const query = url.searchParams.get("q");

  const skip = page === "1" ? "0" : `${+page * +limit - +limit}`;

  return `${query ? `/search?q=${query}&` : `?`}skip=${skip}&limit=${limit}`;
};
