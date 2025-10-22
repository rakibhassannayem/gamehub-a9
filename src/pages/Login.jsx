import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { signInWithEmailAndPasswordFunc } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmailAndPasswordFunc(email, password)
      .then(() => {
        toast.success("Login Successfull.");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
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
            <label className="label text-lg font-semibold">Password</label>
            <input
              name="password"
              type="password"
              className="input border"
              placeholder="write 6 digit password"
              required
            />
            <div>
              <a className="link link-hover text-[14px]">Forgot password?</a>
            </div>

            <button type="submit" className="btn bg-purple-800 mt-4 text-xl">
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
  );
};

export default Login;
