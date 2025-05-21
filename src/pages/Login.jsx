import React from "react";
import backgroundImage from "../assets/images/contact 2.jpg";

const Login = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 opacity-70"></div>
      </div>
      {/* Login Form Container */}
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-[#964B00] mb-6 text-center">
          LOGIN
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter email
            </label>
            <input
              type="email"
              className="w-full border border-[#964B00] rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#F7DC6F]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-[#964B00] rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#F7DC6F]"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-between items-center">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-[#964B00]"
              />
              <span className="ml-2 text-sm text-gray-700">REMEMBER ME</span>
            </label>
            <a href="#" className="text-sm text-[#964B00] hover:text-[#F7DC6F]">
              FORGOT PASSWORD?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#964B00] text-white py-2 rounded hover:bg-[#7a3d00] transition"
          >
            SIGN IN
          </button>
        </form>

        <div className="flex items-center justify-center mt-4">
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-[#964B00] text-[#964B00] w-full py-2 rounded hover:bg-[#964B00] hover:text-white transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google icon"
              className="w-5 h-5"
            />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
