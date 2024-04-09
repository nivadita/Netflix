import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="flex">
      <Header />

      <div classname="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="text-white w-4/12 absolute mx-auto right-0 left-0 p-12 bg-black">
        <h1 className="p-2 m-2 text-2xl font-bold text-white">Sign IN</h1>
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-2 m-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full"
        />
        <button className="p-2 m-2 bg-red-900 rounded-md w-full">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
