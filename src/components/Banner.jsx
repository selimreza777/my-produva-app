// src/components/Banner.jsx
import React from "react";
import googlePlay from "../assets/google-play.png";
import appStore from "../assets/app-play.png";
import heroImg from "../assets/hero.png";

const Banner = () => {
  return (
    <section className="w-full flex flex-col items-center bg-[#f8f6ff]">
      {/* Hero Section */}
      <div className="w-full">
        <div className="max-w-[1440px] w-full px-4 sm:px-6 md:px-8 mx-auto flex flex-col items-center text-center">
          <h1
            className="mt-20 text-[40px] sm:text-[60px] lg:text-[72px] leading-[48px] sm:leading-[72px] lg:leading-[84px] text-center capitalize max-w-[597px]"
            style={{ fontFamily: "Inter", fontWeight: 700, opacity: 0.9 }}
          >
            <span className="text-[#001931] font-bold">We Build </span>
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-extrabold">
              Productive
            </span>{" "}
            <span className="text-[#001931] font-bold">Apps</span>
          </h1>

          <p className="mt-10 mb-8 text-[20px] font-normal leading-[32px] text-[#627382] max-w-[1440px]">
            At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
            <br />
            Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-[4px] h-[56px] w-[200px] transition hover:opacity-90"
            >
              <img src={googlePlay} alt="Google Play" className="w-8 h-8" />
              <span className="text-[#001931] font-semibold text-[20px] leading-[24px] capitalize whitespace-nowrap">
                Google Play
              </span>
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-[4px] h-[56px] w-[200px] transition hover:opacity-90"
            >
              <img src={appStore} alt="App Store" className="w-8 h-8" />
              <span className="text-[#001931] font-semibold text-[20px] leading-[24px] capitalize whitespace-nowrap">
                App Store
              </span>
            </a>
          </div>


          <div className="mt-5 sm:mt-6 lg:mt-8">
            <img
              src={heroImg}
              alt="Hero"
              className="w-[300px] sm:w-[393px] lg:w-[800px] h-[150px] sm:h-[250px] lg:h-[413px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Trusted Section */}
      <div className="w-full py-14 mt-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
        <div className="max-w-[1440px] w-full px-4 sm:px-6 md:px-8 mx-auto flex flex-col items-center">
          <h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-white text-center mb-12"
            style={{ fontFamily: "Inter" }}
          >
            Trusted by Millions, Built for You
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-12 lg:gap-24 text-white w-full">
            <div className="text-center">
              <p className="text-[16px] font-normal leading-[24px] opacity-80 capitalize">Total Downloads</p>
              <h3 className="text-[64px] font-extrabold leading-[72px] capitalize mt-2">29.6M</h3>
              <p className="text-[16px] font-normal leading-[24px] opacity-80 capitalize mt-2">21% more than last month</p>
            </div>
            <div className="text-center">
              <p className="text-[16px] font-normal leading-[24px] opacity-80 capitalize">Total Reviews</p>
              <h3 className="text-[64px] font-extrabold leading-[72px] capitalize mt-2">906K</h3>
              <p className="text-[16px] font-normal leading-[24px] opacity-80 capitalize mt-2">46% more than last month</p>
            </div>
            <div className="text-center">
              <p className="text-[16px] font-normal leading-[24px] opacity-80 capitalize">Active Apps</p>
              <h3 className="text-[64px] font-extrabold leading-[72px] capitalize mt-2">132+</h3>
              <p className="text-[16px] font-normal leading-[24px] opacity-80 capitalize mt-2">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
