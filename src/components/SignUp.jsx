import React, { useState } from "react";
import { motion } from "framer-motion";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { SignupUser } from "../features/UserSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: nanoid(),
      username: Email,
      password: Password,
    };
    console.log(data);
    dispatch(SignupUser(data));
    setIsSignedUp(true);
  };

  const handleSignInClick = () => {
    navigate("/");
  };

  const closePopup = () => {
    setIsSignedUp(false);
    navigate("/");
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-full max-w-md p-8 bg-white shadow-xl rounded-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create Your Account
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="Username"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Username
            </label>
            <input
            required
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="Username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your Username"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Email
            </label>
            <input
            required

              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              type="Email"
              name="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your Email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Password
            </label>
            <input
            required

              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              type="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your Password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-md hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Sign Up
          </button>
        </form>

        {/* Sign Up Button */}
        <button
          type="button"
          onClick={handleSignInClick}
          className="w-full mt-4 py-3 px-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg shadow-md hover:bg-gradient-to-r hover:from-teal-600 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          Sign in
        </button>

        {/* Popup Message */}
        {isSignedUp && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl p-6 max-w-sm text-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">Sign Up Successful!</h2>
              <p className="mb-4">Thank you for signing up. You can now sign in to your account.</p>
              <button
                onClick={closePopup}
                className="py-2 px-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-md hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Go to Sign In
              </button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default SignUp;
