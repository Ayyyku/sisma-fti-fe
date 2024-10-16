import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import Logo from "../assets/logo.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          username,
          password,
        }
      );
      if (response.status === 200) {
        // On success, redirect to dashboard
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Email atau Password salah"); // Set error message if login fails
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-50 flex flex-col items-center justify-center">
      <form
        className="w-3/6 mx-auto bg-white my-auto p-8 shadow-2xl rounded-xl"
        onSubmit={handleLogin}
      >
        <img src={Logo} alt="logo" />
        <h1 className="text-center text-2xl mt-40">
          HI, SELAMAT DATANG DI <br /> SISTEM MANAJEMEN FTI (sismaFTI)
        </h1>
        <div className="text-center text-2xl mt-5">
          {/* Username input */}
          <div className="relative mt-10">
            {username === "" && (
              <label
                htmlFor="username"
                className="absolute top-2 text-gray-500 text-md"
              >
                Username
              </label>
            )}
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-3/6 p-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Password input */}
          <div className="relative mt-10">
            {password === "" && (
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

          {/* Display error message */}
          {error && (
            <p className="text-red-500 mt-4 text-center">{error}</p>
          )}
        </div>

        {/* Login button */}
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 text-lg rounded-full hover:bg-blue-700 mb-14"
          >
            Login
          </button>
        </div>

        {/* Navigation link (optional) */}
        <div className="flex justify-center mt-4">
          <NavLink to="/register" className="text-blue-500 hover:underline">
            Don't have an account? Register here.
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
