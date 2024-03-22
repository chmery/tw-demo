export const getSearchParams = (url: string) => {
  const { searchParams } = new URL(url);

  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "5";
  const query = searchParams.get("q");

  const skip = `${+page * +limit - +limit}`;

  return `${query ? `/search?q=${query}&` : `?`}skip=${skip}&limit=${limit}`;
};
