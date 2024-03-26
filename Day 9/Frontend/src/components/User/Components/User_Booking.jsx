import React, { useState } from "react";
import PropTypes from "prop-types";

function User_Booking({ selectedItemTitle }) {

  return (
    <div className="w-full h-full flex items-start">
      {/* Left side cover Image */}
      <div className="relative w-1/2 h-full flex flex-col">
        <img
          src="https://images.unsplash.com/flagged/photo-1571691054106-e7f0653f738b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="cover_image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actual Form */}
      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col pl-10 py-10 justify-between">
        <div className="flex flex-row justify-between items-start">
          <h1 className="text-3xl text-[#FF204E] font-lobster font-bold items-center justify-center pl-10 pb-10">
            Order Details
          </h1>
        </div>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col mb-2">
            <h5 className="text-3xl font-bold pb-4 text-green-400">
            {selectedItemTitle}
            </h5>
          </div>
          <div className="flex flex-col">
            <div className="relative mb-4 py-4">
              <span className="text-lg font-poppins">This {selectedItemTitle} includes:</span>
            </div>
            <div className="relative w-72 pl-4 border border-gray-300 rounded-md">
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M13 2a1 1 0 0 1 .707.293l4 4a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L12 13.586l7.293-7.293a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-1-1a1 1 0 0 1 0-1.414L13.414 4 13 3.586l-1-1A1 1 0 0 1 13 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-lg font-poppins">
                  Complete Gardening Tools
                </span>
              </div>
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M13 2a1 1 0 0 1 .707.293l4 4a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L12 13.586l7.293-7.293a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-1-1a1 1 0 0 1 0-1.414L13.414 4 13 3.586l-1-1A1 1 0 0 1 13 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-lg  font-poppins">
                  GuideBook to help you
                </span>
              </div>
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-400 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M13 2a1 1 0 0 1 .707.293l4 4a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L12 13.586l7.293-7.293a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-1-1a1 1 0 0 1 0-1.414L13.414 4 13 3.586l-1-1A1 1 0 0 1 13 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-lg font-poppins">
                  Full Staff Support
                </span>
              </div>
            </div>
          </div>
          <div className="w-56 flex flex-col justify-center items-center pl-16">
            <button
            //   onClick={handleSubmit}
              className="w-56 text-2xl font-poppins text-white my-10 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User_Booking;


