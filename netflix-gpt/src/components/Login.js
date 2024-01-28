import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg"
          alt="bg-img"
        />
      </div>
      <form className="absolute text-white bg-black opacity-85 rounded-sm w-3/12 p-6 top-1/4 mx-auto right-0 left-0">
        <h1 className=" py-4 my-2 font-bold text-xl ">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 rounded-sm w-full bg-gray-900"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 rounded-sm w-full bg-gray-900"
        />
        <button className="p-2 my-6 text-white bg-red-700 2 rounded-sm w-full hover:bg-red-800">
          Sign In
        </button>
        <div className="py-2 my-2">
          <span className="text-white pr-2">New to Netflix?</span>
          <button className="text-white">SignUp</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
