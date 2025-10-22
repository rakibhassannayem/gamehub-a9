import { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUserWithEmailAndPasswordFunc, setUser } = use(AuthContext);
  const [passError, setPassError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setPassError("Password should be at least 6 digits");
      return;
    } else {
      setPassError("");
    }

    console.log({ name, photoUrl, email, password });

    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        toast.success("Registration Successfull.");
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
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label text-lg font-semibold">Name</label>
            <input
              name="name"
              type="text"
              className="input border"
              placeholder="Enter your name"
              required
            />
            <label className="label text-lg font-semibold">Photo URL</label>
            <input
              name="photoUrl"
              type="text"
              className="input border"
              placeholder="Enter your photo url"
              required
            />
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

            {passError && <p className="text-red-500">{passError}</p>}

            <button type="submit" className="btn text-xl bg-purple-800 mt-4">
              Register
            </button>
            <p className="mt-3 text-center font-semibold">
              Already have an account?{" "}
              <Link
                to={"/auth/login"}
                className="text-purple-500! hover:underline"
              >
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
