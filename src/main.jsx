import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import { createBrowserRouter } from "react-router-dom";
import Orders from "./components/Orders.jsx";
import Products from "./components/Products.jsx";
import AppEntrypoint from "./AppEntrypoint.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppEntrypoint />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
