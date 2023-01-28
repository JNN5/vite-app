import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/loadable";
import { ErrorPage } from "../pages/error/loadable";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);
