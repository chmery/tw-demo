import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Wrapper } from "./components/Wrapper/Wrapper.tsx";
import { Root } from "./routes/Root.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  </React.StrictMode>
);
