import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import LoadingComp from "../components/LoadingComp";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

const Login = () => {
  const { signInWithEmailAndPasswordFunc, loading } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmailAndPasswordFunc(email, password)
      .then(() => {
        toast.success("Login Successfull.");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        setError(errorCode);
      });
  };
  return (
    <div>
      {loading ? (
        <LoadingComp />
      ) : (
        <div className="text-white flex justify-center">
          <div className="card bg-gray-800 rounded-xl w-full max-w-sm shrink-0 shadow-2xl pt-4">
            <h2 className="font-semibold text-2xl text-center">
              Login your account
            </h2>
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
                <label className="label text-lg font-semibold">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input border"
                  placeholder="Enter your email"
                  required
                />
                <div className="relative">
                  <label className="label text-lg font-semibold">
                    Password
                  </label>
                  <input
                    name="password"
                    type={show ? "text" : "password"}
                    className="input border"
                    placeholder="write 6 digit password"
                    required
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-7 bottom-3 cursor-pointer z-10"
                  >
                    {show ? <IoIosEyeOff size={18} /> : <IoIosEye size={18} />}
                  </span>
                </div>

                {error && <p className="text-red-500">{error}</p>}

                <div>
                  <a className="link link-hover text-[14px]">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="btn bg-purple-800 mt-4 text-xl"
                >
                  Login
                </button>

                <p className="mt-3 text-center font-semibold text-[14px]">
                  Don't have an account?{" "}
                  <Link
                    to={"/auth/register"}
                    className="text-purple-500! hover:underline"
                  >
                    Register
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
