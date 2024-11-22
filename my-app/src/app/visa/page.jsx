import React from "react";

export default function Visa() {
  return (
    <div>
      <div className="w-full lg:w-2/5 lg:mt-4 space-y-4 bg-white lg:shadow-sm p-8">
        <div>
          <h1 className="text-lg lg:text-4xl text-center font-bold mb-8">
            Travel Visa Assistance Program
          </h1>
          <p className="text-xs lg:text-base text-neutral-300">
            Travelbeta visa team is made up of specialized and seasoned experts
            in visa processing. Our process includes profiling, helping you
            complete your visa application forms, vetting documents, getting
            appointment dates, conducting pre-interview sessions where
            applicable, with the aim of increasing your chances of visa success.
          </p>
          <p className="text-xs lg:text-base text-neutral-300">
            We do not encourage immigration defaults and kindly note that
            issuance of visas is at the discretion of the embassy.
          </p>
          <p className="text-xs lg:text-base text-neutral-300">
            Contact our visa consultants for all your Travel visa related
            questions.
          </p>
          <p className="text-xs lg:text-base text-neutral-300">
            <b>Email:</b>{" "}
            <a href="mailto:visa@travelbeta.com" className="text-blue-500">
              visa@travelbeta.com
            </a>
          </p>
          <p className="text-xs lg:text-base text-neutral-300">
            <b>Phone:</b>{" "}
            <a href="tel:08179704269" className="text-blue-500">
              08179704269
            </a>
          </p>
        </div>
        <div className="mt-10 lg:mt-4 flex justify-between items-center bg-blue-900 px-14 py-7 text-white">
          <h2 className="text-lg lg:text-2xl font-semibold">
            Get Visa Assistance Now
          </h2>
          <p className="mt-2 text-xs lg:text-sm">
            We’re bringing you a new level of comfort.
          </p>
        </div>
        <div>
          <form className="float-left mt-4">
            {/* First Name */}
            <label
              className="block text-white text-sm mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full mb-4 p-2 rounded-md bg-white text-black"
              placeholder="Enter your first name"
            />

            {/* Last Name */}
            <label className="block text-white text-sm mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full mb-4 p-2 rounded-md bg-white text-black"
              placeholder="Enter your last name"
            />

            {/* Email */}
            <label className="block text-white text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mb-4 p-2 rounded-md bg-white text-black"
              placeholder="Enter your email"
            />

            {/* Phone */}
            <label className="block text-white text-sm mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full mb-4 p-2 rounded-md bg-white text-black"
              placeholder="Enter your phone number"
            />

            {/* Departure Date */}
            <label
              className="block text-white text-sm mb-2"
              htmlFor="departureDate"
            >
              Departure Date
            </label>
            <input
              type="date"
              id="departureDate"
              className="w-full mb-4 p-2 rounded-md bg-white text-black"
            />

            {/* Return Date */}
            <label
              className="block text-white text-sm mb-2"
              htmlFor="returnDate"
            >
              Return Date
            </label>
            <input
              type="date"
              id="returnDate"
              className="w-full mb-4 p-2 rounded-md bg-white text-black"
            />

            {/* Destination Country */}
            <label
              className="block text-white text-sm mb-2"
              htmlFor="destinationCountry"
            >
              Destination Country
            </label>
            <input
              type="text"
              id="destinationCountry"
              className="w-full mb-4 p-2 rounded-md bg-white text-black"
              placeholder="Enter your destination country"
            />

            {/* Passport Country */}
            <label
              className="block text-white text-sm mb-2"
              htmlFor="passportCountry"
            >
              Passport Country
            </label>
            <input
              type="text"
              id="passportCountry"
              className="w-full mb-4 p-2 rounded-md bg-white text-black"
              placeholder="Enter your passport country"
            />

            {/* Passport Number */}
            <label
              className="block text-white text-sm mb-2"
              htmlFor="passportNumber"
            >
              Passport Number
            </label>
            <input
              type="text"
              id="passportNumber"
              className="w-full mb-4 p-2 rounded-md bg-white text-black"
              placeholder="Enter your passport number"
            />

            {/* Upload Passport */}
            <label
              className="block text-white text-sm mb-2"
              htmlFor="passportUpload"
            >
              Upload Passport
            </label>
            <input
              type="file"
              id="passportUpload"
              className="w-full mb-4 p-2 rounded-md bg-white text-black"
              accept=".jpg,.jpeg,.png,.pdf"
            />

            {/* Message */}
            <label className="block text-white text-sm mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full mb-4 p-2 rounded-md bg-white text-black"
              placeholder="Enter any additional information or message"
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
