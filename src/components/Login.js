import React from "react";
import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="flex">
      <Header />

      <div classname="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="text-white w-4/12 absolute my-40 mx-auto right-0 left-0 p-12 bg-black bg-opacity-75">
        <h1 className="p-2 m-2 text-2xl font-bold text-white">
          {isSignInForm ? "Sign IN" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 m-4 w-full rounded-md bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 m-4 w-full rounded-md bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-4 w-full rounded-md bg-gray-700"
        />
        <button className="p-4 m-4 bg-red-900 rounded-md w-full">
          {isSignInForm ? "Sign IN" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered?Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
