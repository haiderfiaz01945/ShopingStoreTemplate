import { nanoid } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitUser } from "../features/UserSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State for showing the popup
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((state) => state.Users.is_Logged);

  useEffect(() => {
    if (isLogged) {
      navigate("/homepage"); // Navigate to homepage on successful login
    }
  }, [isLogged, navigate]);

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const data = {
      id: nanoid(),
      username,
      password,
    };

    dispatch(submitUser(data));

    if (!isLogged) {
      setShowPopup(true); // Show popup when login is incorrect
    }
  };

  const handleSignUpClick = () => {
    navigate("/signup"); // Navigate to signup page when the button is clicked
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Welcome Back
        </h1>
        <form onSubmit={handleSubmitClick}>
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-md hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>

        {/* Sign Up Button */}
        <button
          type="button"
          onClick={handleSignUpClick}
          className="w-full mt-4 py-3 px-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg shadow-md hover:bg-gradient-to-r hover:from-teal-600 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          Sign Up
        </button>
        {/* Popup for incorrect login */}
        {showPopup && (
          <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            Incorrect username or password. Please try again.
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
