import { Link, NavLink } from "react-router";
import logo from "/logo.jpg";
import { use } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, logOutFunc } = use(AuthContext);

  const handleLogout = () => {
    logOutFunc()
      .then(() => {
        toast.success("Logout successful.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // simple animation variants
  const linkMotion = {
    hover: { scale: 1.1, color: "#A855F7" },
    tap: { scale: 0.95 },
  };

  return (
    <div className="bg-base-100 shadow-sm bg-linear-to-r">
      <div className="navbar container mx-auto flex-col sm:flex-row gap-4">
        <div className="navbar-start">
          <Link
            to={"/"}
            className="btn btn-ghost bg-none outline-0 border-0 text-white font-bold text-2xl"
          >
            <img className="w-10 rounded-xl" src={logo} alt="" />
            GameHub
          </Link>
        </div>

        <div className="navbar-end flex-col gap-4 md:flex-row">
          <ul className="flex flex-wrap justify-center text-lg font-semibold text-white gap-3">
            <motion.div whileHover="hover" whileTap="tap" variants={linkMotion}>
              <NavLink to={"/"}>Home</NavLink>
            </motion.div>
            <motion.div whileHover="hover" whileTap="tap" variants={linkMotion}>
              <NavLink to={"/all-games"}>All-Games</NavLink>
            </motion.div>
            <motion.div whileHover="hover" whileTap="tap" variants={linkMotion}>
              <NavLink to={"/about"}>About</NavLink>
            </motion.div>
          </ul>
          {user ? (
            <div className="flex items-center justify-center gap-3">
              <Link to={"/my-profile"}>
                <img
                  className="w-10 rounded-full cursor-pointer hover:scale-110 transition"
                  src={user.photoURL}
                  alt=""
                />
              </Link>
              <Link
                onClick={handleLogout}
                to={""}
                className="btn bg-purple-800 text-white rounded-lg text-lg"
              >
                Logout
              </Link>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to={"/auth/login"}
                className="btn bg-purple-800 text-white rounded-lg text-lg"
              >
                Login
              </Link>

              <Link
                to={"/auth/register"}
                className="btn bg-purple-800 text-white rounded-lg text-lg"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
