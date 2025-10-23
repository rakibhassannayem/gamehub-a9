import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AuthLayout = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-between p-3">
      <header>
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};

export default AuthLayout;
