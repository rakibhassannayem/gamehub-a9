import { Link, NavLink } from "react-router";
import logo from "/logo.jpg";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { GiHamburgerMenu } from "react-icons/gi";

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
  return (
    <div className="bg-base-100 shadow-sm bg-linear-to-r ">
      <div className="navbar container mx-auto flex-col sm:flex-row gap-4">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <GiHamburgerMenu size={32} color="white" />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/all-games"}>All-Games</NavLink>
            </ul>
          </div>

          <Link
            to={"/"}
            className="btn btn-ghost bg-none outline-0 border-0 text-white font-bold text-2xl"
          >
            <img className="w-10" src={logo} alt="" />
            GameHub
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg font-semibold text-white gap-3 mr-3">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/all-games"}>All-Games</NavLink>
            </ul>
          </div>

          {user ? (
            <div className="flex items-center gap-3">
              <Link to={'/my-profile'}>
                <img className="w-10 rounded-full cursor-pointer hover:scale-110 transition" src={user.photoURL} alt="" />
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
            <div className="space-x-2">
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
