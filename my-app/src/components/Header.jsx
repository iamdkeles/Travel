"use client";
import { useState } from "react";
import React from "react";
import LoginModal from "@/components/LoginModal";
import SignupModal from "@/components/SignupModal";
import Link from "next/link";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openSignupModal = () => setIsSignupModalOpen(true);
  const closeSignupModal = () => setIsSignupModalOpen(false);

  return (
    <div className="sticky">
      <div className="bg-blue-900 overflow-x-hidden">
        <div className="py-1 text-white whitespace-nowrap overflow-hidden animate-marquee">
          For emergency, kindly contact +2349068299791 an immediate response is
          assured.
        </div>
      </div>
      <div className="flex items-center justify-between bg-white lg:shadow-sm py-8">
        <div className="ml-20">
          <Link href="/home">
            <h1
              className="font-bold text-xl"
              style={{
                fontFamily: "Matura MT Script Capitals, sans-serif",
                fontSize: "25px",
                textShadow: "1px 1px 2px white",
                color: "rgb(30 58 138 / var(--tw-bg-opacity))",
              }}
            >
              AdabaTravels
            </h1>
          </Link>
        </div>
        <div className="flex-1">
          <ul className="flex justify-center items-center space-x-6">
            <li>
              <a href="/hotel">Hotel</a>
            </li>
            <li>
              <a href="/visa">Visa</a>
            </li>
            <li>
              <a href="/packages">Our Packages</a>
            </li>
            <li>
              <a href="/ticket">Book your tickes here</a>
            </li>
          </ul>
        </div>
        <div className="flex-2 justify-center items-center mx-20">
          <button onClick={openModal} className=" text-black  transition mr-3">
            Login
          </button>
          <LoginModal isOpen={isModalOpen} onClose={closeModal} />
          <button
            onClick={openSignupModal}
            className="border border-orange-400 rounded-md px-2 py-2 text-lg font-semibold bg-orange-400"
          >
            <Link href="/signUp" className="p-2 text-white">
              Create account
            </Link>
          </button>
          <SignupModal isOpen={isSignupModalOpen} onClose={closeSignupModal} />
        </div>
      </div>
    </div>
  );
}
