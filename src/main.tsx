import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Wrapper } from "./components/Wrapper.tsx";
import { Root } from "./routes/Root.tsx";
import { Layout } from "./components/Layout.tsx";
import { Search } from "./routes/Search.tsx";
import { getProducts } from "./utils/getProducts.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/search",
        element: <Search />,
        loader: ({ request }) => getProducts(request),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  </React.StrictMode>
);
