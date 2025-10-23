import { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import LoadingComp from "../components/LoadingComp";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { AuthContext } from "../provider/AuthContext";

const Login = () => {
  const {
    signInWithEmailAndPasswordFunc,
    signInWithPopupFunc,
    loading,
    sendPasswordResetEmailFunc,
  } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const emailRef = useRef(null);

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

  const handleGoogleSignin = (e) => {
    e.preventDefault();
    signInWithPopupFunc()
      .then(() => {
        toast.success("Login Successfull.");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  const handleForgotPass = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    sendPasswordResetEmailFunc(email)
      .then(() => {
        toast.success("please check your email.");
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  return (
    <div>
      <title>Gamehub-login</title>
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
                  ref={emailRef}
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
                  <a
                    onClick={handleForgotPass}
                    className="link link-hover text-[14px]"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="btn border-0 rounded-lg bg-purple-800 mt-4 text-xl"
                >
                  Login
                </button>

                {/* Divider */}
                <div className="flex items-center justify-center gap-2 my-2">
                  <div className="h-px w-16 bg-white/30"></div>
                  <span className="text-sm text-white/70">or</span>
                  <div className="h-px w-16 bg-white/30"></div>
                </div>

                {/* Google Signin */}
                <button
                  type="button"
                  onClick={handleGoogleSignin}
                  className="btn border-0 flex items-center justify-center gap-3 bg-purple-800 text-white text-[16px] px-5 py-2 rounded-lg w-full font-semibold cursor-pointer"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Google
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
