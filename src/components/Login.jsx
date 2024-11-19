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
        "http://localhost:5000/api/auth/login",
        { username, password },
        { withCredentials: true }
      );
      if (response.status === 200) {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.msg || "Login gagal");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-slate-50">
      <form
        className="w-3/6 p-8 mx-auto my-auto bg-white shadow-2xl rounded-xl"
        onSubmit={handleLogin}
      >
        <img src={Logo} alt="logo" />
        <h1 className="mt-40 text-2xl text-center">
          HI, SELAMAT DATANG DI <br /> SISTEM MANAJEMEN FTI (sismaFTI)
        </h1>
        <div className="mt-5 text-2xl text-center">
          {/* Username input */}
          <div className="relative mt-10">
            {username === "" && (
              <label
                htmlFor="username"
                className="absolute text-gray-500 top-2 text-md"
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
                className="absolute text-gray-500 top-2 text-md"
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
            <p className="mt-4 text-center text-red-500">{error}</p>
          )}
        </div>

        {/* Login button */}
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="w-full p-2 text-lg text-white bg-blue-500 rounded-full hover:bg-blue-700 mb-14"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
