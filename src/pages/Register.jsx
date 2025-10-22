import React from 'react';
import { Link } from 'react-router';

const Register = () => {
  return (
    <div className="text-white flex justify-center min-h-screen items-center">
      <div className="card bg-gray-800 rounded-xl w-full max-w-sm shrink-0 shadow-2xl pt-4">
        <h2 className="font-semibold text-2xl text-center">Register your account</h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label text-lg font-semibold">Name</label>
            <input type="email" className="input border" placeholder="Enter your name" />
            <label className="label text-lg font-semibold">Photo URL</label>
            <input type="email" className="input border" placeholder="Enter your photo url" />
            <label className="label text-lg font-semibold">Email</label>
            <input type="email" className="input border" placeholder="Enter your email" />
            <label className="label text-lg font-semibold">Password</label>
            <input type="password" className="input border" placeholder="write 6 digit password" />
            <button className="btn text-xl bg-purple-800 mt-4">Login</button>
            <p className="mt-3 text-center font-semibold">Already have an account? <Link to={'/auth/login'} className="text-purple-500">Login</Link></p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;