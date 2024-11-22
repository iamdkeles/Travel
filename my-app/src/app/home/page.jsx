"use client";
import React from "react";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { MdOtherHouses } from "react-icons/md";
import { IoBriefcaseSharp } from "react-icons/io5";
import { BsPatchCheckFill } from "react-icons/bs";

export default function HomePage() {
  return (
    <div>
      <div className="lg:flex">
        <h1 className="z-20 px-6 lg:px-20 text-white font-bold text-7xl mt-40">
          Going somewhere?
        </h1>
        <img
          src="https://res.cloudinary.com/diapyzzws/image/upload/v1693297563/images/bg_web/shutterstock_186964970.webp"
          alt="An image of an airplane in the sky"
          className="w-full absolute object-cover object-center"
          style={{ height: "50vh" }}
        />
      </div>
      <div className="lg:flex ml-20">
        <div className="lg:bg-white flex px-6 lg:px-24 mt-8 mx-auto w-full lg:w-3/4 items-center absolute justify-between">
          <ul className="flex space-x-8 py-6 pr-4">
            <li className="flex items-center">
              <MdOutlineAirplanemodeActive />
              <a href="/flights" className="ml-2">
                FLIGHTS
              </a>
            </li>
            <li className="flex items-center">
              <IoMdHome />
              <a href="/hotels" className="ml-2">
                HOTELS
              </a>
            </li>
            <li className="flex items-center">
              <MdOtherHouses />
              <a href="/shortlets" className="ml-2">
                SHORTLETS
              </a>
            </li>
            <li className="flex items-center">
              <IoBriefcaseSharp />
              <a href="/manage-bookings" className="ml-2">
                MANAGE BOOKINGS
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-2">
            <BsPatchCheckFill className="text-orange-400" />
            <p>We offer the best deals in the industry!</p>
          </div>
        </div>
      </div>
      <div className="lg:bg-white flex px-6 lg:px-24 mt-8 mx-auto w-full lg:w-3/4 items-center absolute justify-between"></div>
    </div>
  );
}
