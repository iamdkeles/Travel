// components/LoginModal.js
import Link from "next/link";
import SignupModal from "../components/SignupModal";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid"; // Import Heroicons for the eye icons
import { IoCloseOutline } from "react-icons/io5";

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [email, setEmail] = useState(""); // Email state
  const [password, setPassword] = useState(""); // Password state
  const [showPassword, setShowPassword] = useState(false); // Show/hide password state
  const [passwordMessage, setPasswordMessage] = useState(""); // Password validation message
  const [passwordValid, setPasswordValid] = useState(false); // Track password validity

  // Password validation function
  const validatePassword = (password) => {
    const uppercase = /[A-Z]/;
    const number = /\d/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    let message = "";
    let valid = true;

    if (!uppercase.test(password)) {
      message += "Password must contain at least one uppercase letter.<br>";
      valid = false;
    }
    if (!number.test(password)) {
      message += "Password must contain at least one number.<br>";
      valid = false;
    }
    if (!specialChar.test(password)) {
      message += "Password must contain at least one special character.<br>";
      valid = false;
    }

    if (message === "") {
      message = "Password is valid!";
      valid = true;
    }

    setPasswordMessage(message);
    setPasswordValid(valid);
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword); // Validate password
  };

  // Toggle password visibility
  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Signup modal state handling
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const openSignupModal = () => {
    setSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full absolute">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email} // Bind email input to state
              onChange={(e) => setEmail(e.target.value)} // Handle email input change
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"} // Toggle password visibility
              id="password"
              value={password} // Bind password input to state
              onChange={handlePasswordChange} // Handle password input change
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
            {/* Show/Hide password button with eye icon */}
            <button
              type="button"
              onClick={handleTogglePassword}
              className="absolute right-3 top-11 transform -translate-y-1/2"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>
            <p
              className={passwordValid ? "text-green-500" : "text-red-500"}
              dangerouslySetInnerHTML={{ __html: passwordMessage }}
            ></p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        <div className="flex space-x-4 items-center justify-center py-4 signup-option">
          <p>Don't have an account?</p>
          <Link
            href="/signUp"
            className="text-orange-500 hover:text-orange-900"
            onClick={openSignupModal}
          >
            Create an account
          </Link>
        </div>

        <SignupModal isOpen={isSignupModalOpen} onClose={closeSignupModal} />
      </div>
      <div className="ml-48 -mr-96 mb-auto mt-28">
        <button onClick={onClose} className="text-white text-4xl">
          <IoCloseOutline />
        </button>
      </div>
    </div>
  );
}
