import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import LoadingComp from "../components/LoadingComp";

const PrivateRoute = ({ children }) => {
  const { user, loading, setLoading } = use(AuthContext);

  const location = useLocation();

  if (loading) {
    return <LoadingComp />;
  }

  if (user && user.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
  }
};

export default PrivateRoute;
