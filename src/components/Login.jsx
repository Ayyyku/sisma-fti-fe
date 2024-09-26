import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-screen h-screen bg-slate-50 flex flex-col items-center justify-center">
      <div className="w-3/6 mx-auto bg-white my-auto p-8 shadow-2xl rounded-xl">
        <img src={Logo} alt="logo" />
        <h1 className="text-center text-2xl mt-40">
          HI, SELAMAT DATANG DI <br /> SISTEM MANAJEMEN FTI(sismaFTI)
        </h1>
        <div className="text-center text-2xl mt-5">
          <div className="relative mt-10">
            {email === "" && (
              <label
                htmlFor="email"
                className="absolute top-2 text-gray-500 text-md"
              >
                Email
              </label>
            )}
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-3/6 p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="relative mt-10">
            {email === "" && (
              <label
                htmlFor="password"
                className="absolute top-2 text-gray-500 text-md"
              >
                Password
              </label>
            )}
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-3/6 p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <NavLink to={"/dashboard"} className="w-3/6">
            <button className="w-full bg-blue-500 text-white p-2 text-lg rounded-full hover:bg-blue-700 mb-14">
              Login
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
