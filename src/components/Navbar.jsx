import { Link } from "react-router";
import logo from "/logo.jpg";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

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
      <div className="navbar container mx-auto ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
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
            <ul className="menu menu-horizontal px-1 text-lg text-white">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>

          {user ? (
            <div className="flex items-center gap-3">
              <div>{user.email}</div>
              <button
                onClick={handleLogout}
                to={"/"}
                className="btn bg-purple-800 text-white rounded-lg text-lg"
              >
                Logout
              </button>
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
