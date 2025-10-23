import { use } from "react";
import { Navigate, useLocation } from "react-router";
import LoadingComp from "../components/LoadingComp";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

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
