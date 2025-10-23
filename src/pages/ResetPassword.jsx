import { use, useEffect, useRef, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import { useLocation } from "react-router";

const ResetPassword = () => {
  const emailRef = useRef(null);
  const { sendPasswordResetEmailFunc } = use(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation()

  useEffect(() => {
    if (location.state?.email) {
      emailRef.current.value = location.state.email;
    }
  }, [location.state]);

  const handleReset = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    sendPasswordResetEmailFunc(email)
      .then(() => {
        window.open('https://mail.google.com', '_blank')
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };
  return (
    <div className="text-white flex justify-center my-8">
      <title>Gamehub-Reset Password"</title>
      <div className="card bg-gray-800 rounded-xl w-full max-w-sm shrink-0 shadow-2xl pt-4">
        <h2 className="font-semibold text-2xl text-center">
          Reset your password
        </h2>
        <form onSubmit={handleReset} className="card-body">
          <fieldset className="fieldset">
            <label className="label text-lg font-semibold">Email</label>
            <input
              name="email"
              type="email"
              ref={emailRef}
              className="input border w-full"
              placeholder="Enter your email"
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button type="submit" className="btn text-xl bg-purple-800 mt-4">
              Reset
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
