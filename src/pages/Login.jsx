import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="text-white flex justify-center min-h-screen items-center">
      <div className="card bg-gray-800 rounded-xl w-full max-w-sm shrink-0 shadow-2xl pt-4">
        <h2 className="font-semibold text-2xl text-center">Login your account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label text-lg font-semibold">Email</label>
            <input type="email" className="input border" placeholder="Enter your email" />
            <label className="label text-lg font-semibold">Password</label>
            <input type="password" className="input border" placeholder="write 6 digit password" />
            <div>
              <a className="link link-hover text-[14px]">Forgot password?</a>
            </div>
            <button className="btn bg-purple-800 mt-4 text-xl">Login</button>
            <p className="mt-3 text-center font-semibold text-[14px]">Don't have an account? <Link to={'/auth/register'} className="text-purple-500! hover:underline">Register</Link></p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
