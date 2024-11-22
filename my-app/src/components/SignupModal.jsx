import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";

export default function SignupModal({ isOpen, onClose }) {
  const openSignupModal = () => setIsSignupModalOpen(true);
  const closeSignupModal = () => setIsSignupModalOpen(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded mt-2 hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <div className="flex space-x-4 items-center justify-center py-4 signup-option">
          <p>Already have an account?</p>
          <Link
            href="/signUp"
            className="text-orange-500 hover:text-orange-900"
            onClick={openSignupModal}
          >
            Login here
          </Link>
        </div>
      </div>
      <div className="ml-4 mb-auto mt-28">
        <button onClick={onClose} className="text-white text-4xl">
          <IoCloseOutline />
        </button>
      </div>
    </div>
  );
}
