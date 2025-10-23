import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { AuthContext } from "../provider/AuthContext";

const Register = () => {
  const {
    createUserWithEmailAndPasswordFunc,
    setUser,
    updateUser,
    signInWithPopupFunc,
  } = use(AuthContext);
  const [passError, setPassError] = useState("");
  const [show, setShow] = useState(false);
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

  const handleGoogleSignin = (e) => {
    e.preventDefault();
    signInWithPopupFunc()
      .then(() => {
        toast.success("Login Successfull.");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode);
      });
  };

  return (
    <div>
      <title>Gamehub-Register</title>
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
              <div className="relative">
                <label className="label text-lg font-semibold">Password</label>
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

              {passError && <p className="text-red-500 text-sm">{passError}</p>}

              <button type="submit" className="btn border-0 rounded-lg text-xl bg-purple-800 mt-4">
                Register
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
    </div>
  );
};

export default Register;
