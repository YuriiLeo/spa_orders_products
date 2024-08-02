import { createBrowserRouter } from "react-router-dom";
import AppEntrypoint from "./providers/StoreProvider";
import ErrorPage from "./error-page";
import { RouterProvider } from "react-router-dom";
import Orders from "./pages/Orders";
import Products from "./pages/Products";

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

export const AppRoutes = () => <RouterProvider router={router} />;
