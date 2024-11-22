import React from "react";

export default function SignupModal({ isOpen, onClose }) {
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
        <button onClick={onClose} className="text-blue-500 mt-4">
          Close
        </button>
      </div>
    </div>
  );
}
