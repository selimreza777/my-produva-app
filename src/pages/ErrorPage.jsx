// src/pages/ErrorPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F6FF] px-4 text-center">
      {/* 404 Image */}
      <img
        src={errorImg}
        alt="404 Not Found"
        className="w-[500px] h-[500px] sm:w-[400px] sm:h-[400px] mb-6"
      />

      {/* Title */}
      <h1 className="text-[#001931] font-inter font-semibold text-4xl sm:text-3xl md:text-5xl leading-tight mb-4">
        Oops, page not found!
      </h1>

      {/* Subtitle */}
      <p className="text-[#627382] font-inter text-base sm:text-sm md:text-xl leading-8 mb-8 max-w-3xl">
        The page you are looking for is not available.
      </p>

      {/* Go Back Button with gradient */}
      <Link
        to="/"
        className="w-[150px] h-[48px] flex justify-center items-center gap-2 px-4 py-3 rounded-md bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-inter font-semibold text-base capitalize hover:brightness-110 transition"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorPage;
