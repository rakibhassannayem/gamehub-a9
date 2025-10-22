import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import AllGames from "../pages/AllGames";

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
      {
        path: "/all-games",
        element: <AllGames />,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <p>Loading...</p>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);
