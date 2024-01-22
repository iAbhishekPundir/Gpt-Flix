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
      <form className="absolute  bg-black top-1/3 left-1/3 opacity-80 rounded-sm w-60 p-6">
        <h1 className="text-white py-2 my-2 font-bold text-xl " >Sign In</h1>
        <input type="text" placeholder="Email Address" className="py-1 px-2 my-2 rounded-sm w-full bg-gray-800 text-white"/>
        <input type="password" placeholder="Password" className="py-1 px-2 my-2 rounded-sm w-full bg-slate-800 text-white" />
        <button className="text-white bg-red-700 py-1 my-2 rounded-sm w-full hover:bg-red-800">Sign In</button>
        <div className="py-2 my-2">
          <span className="text-white pr-2">New to Netflix?</span>
          <button className="text-white">SignUp</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
