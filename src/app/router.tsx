import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/homepage/loadable";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
