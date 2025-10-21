import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <p>Loading...</p>,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);
