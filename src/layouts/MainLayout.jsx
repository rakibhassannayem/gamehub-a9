import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingComp from "../components/LoadingComp";

const MainLayout = () => {
  const { state } = useNavigation();
  return (
    <div className="bg-gray-900 flex flex-col justify-between min-h-screen pb-3">
      <Navbar />
      <div className="container mx-auto">
        {state == "loading" ? <LoadingComp /> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
