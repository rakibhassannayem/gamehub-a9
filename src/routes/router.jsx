import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import AllGames from "../pages/AllGames";
import GameDetails from "../pages/GameDetails";
import PrivateRoute from "../provider/PrivateRoute";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import About from "../pages/About";
import ResetPassword from "../pages/ResetPassword";

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
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/my-profile",
        element: <MyProfile />,
      },
      {
        path: "/profile/update",
        element: <UpdateProfile />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
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
    path: "/game-details/:id",
    element: (
      <PrivateRoute>
        <GameDetails />
      </PrivateRoute>
    ),
    loader: () => fetch("/data.json"),
    hydrateFallbackElement: <p>Loading...</p>,
  },
  {
    path: "/*",
    element: <NotFoundPage />,
  },
]);
