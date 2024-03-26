import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Wrapper } from "./components/Wrapper.tsx";
import { Root } from "./routes/Root.tsx";
import { Layout } from "./components/Layout.tsx";
import { Search } from "./routes/Search.tsx";
import { getProducts } from "./utils/getProducts.ts";
import { ErrorElement } from "./components/ErrorElement.tsx";
import { Added } from "./routes/Added.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElement />,
  },
  {
    element: <Layout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/search",
        element: <Search />,
        loader: ({ request }) => getProducts(request),
      },
      {
        path: "/added",
        element: <Added />,
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
