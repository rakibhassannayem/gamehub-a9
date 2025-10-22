import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import LoadingComp from "../components/LoadingComp";

const Register = () => {
  const { createUserWithEmailAndPasswordFunc, setUser, updateUser, loading } =
    use(AuthContext);
  const [passError, setPassError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setPassError(
        "Password must have an Uppercase letter, a Lowercase letter & length must be at least 6 character"
      );
      return;
    } else {
      setPassError("");
    }

    console.log({ name, photo, email, password });

    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
            toast.success("Registration Successfull.");
          })
          .catch((error) => {
            setUser(user);
            toast.error(error.message);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div>
      {loading ? (
        <LoadingComp />
      ) : (
        <div className="text-white flex justify-center my-8">
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

                <button
                  type="submit"
                  className="btn text-xl bg-purple-800 mt-4"
                >
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
      )}
    </div>
  );
};

export default Register;
