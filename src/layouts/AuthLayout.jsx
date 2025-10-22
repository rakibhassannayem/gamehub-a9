import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <header>
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
