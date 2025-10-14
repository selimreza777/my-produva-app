// src/components/Banner.jsx
import React from "react";
import googlePlay from "../assets/google-play.png";
import appStore from "../assets/app-play.png";
import heroImg from "../assets/hero.png";

const Banner = () => {
  return (
    <section className="flex flex-col items-center justify-start text-center py-20 px-4 bg-[#f5f5f5]">
      {/* Title */}
      <h1 className="text-[40px] sm:text-[60px] lg:text-[72px] font-semibold leading-[48px] sm:leading-[72px] lg:leading-[84px] capitalize max-w-[597px]">
        We Build{" "}
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive Apps
        </span>
      </h1>


      {/* Subtitle */}
      <p className="mt-10 mb-8 text-[20px] font-normal leading-[32px] text-[#627382] max-w-[1440px]">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.
        <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mt-2">
        <a
          href="#"
          className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-[4px] h-[56px] w-[200px] transition hover:opacity-90"
        >
          <img src={googlePlay} alt="Google Play" className="w-8 h-8" />
          <span className="text-[#001931] font-semibold text-[20px] leading-[24px] capitalize">
            Google Play
          </span>
        </a>

        <a
          href="#"
          className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-[4px] h-[56px] w-[200px] transition hover:opacity-90"
        >
          <img src={appStore} alt="App Store" className="w-8 h-8" />
          <span className="text-[#001931] font-semibold text-[20px] leading-[24px] capitalize">
            App Store
          </span>
        </a>
      </div>

      {/* Hero Image */}
      <div className="mt-5 sm:mt-6 lg:mt-8">
        <img
          src={heroImg}
          alt="Hero"
          className="w-[300px] sm:w-[393px] lg:w-[800px] h-[150px] sm:h-[250px] lg:h-[413px] object-contain"
        />
      </div>

      {/* Trusted Section */}
      <div
        className="w-full flex flex-col items-center justify-center py-16 lg:py-15 mt-0"
        style={{
          background:
            "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)",
        }}
      >
        {/* Title */}
        <h2
          className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[100%] text-white text-center capitalize mb-12"
          style={{ fontFamily: "Inter" }}
        >
          Trusted by Millions, Built for You
        </h2>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 lg:gap-24 text-white">
          {/* Total Downloads */}
          <div className="text-center">
            <p className="text-[16px] font-normal leading-[24px] opacity-80 capitalize">
              Total Downloads
            </p>
            <h3 className="text-[64px] font-extrabold leading-[72px] capitalize mt-2">
              29.6M
            </h3>
            <p className="text-[16px] font-normal leading-[24px] opacity-80 capitalize mt-2">
              21% more than last month
            </p>
          </div>

          {/* Total Reviews */}
          <div className="text-center">
            <p className="text-[16px] font-normal leading-[24px] opacity-80 capitalize">
              Total Reviews
            </p>
            <h3 className="text-[64px] font-extrabold leading-[72px] capitalize mt-2">
              906K
            </h3>
            <p className="text-[16px] font-normal leading-[24px] opacity-80 capitalize mt-2">
              46% more than last month
            </p>
          </div>

          {/* Active Apps */}
          <div className="text-center">
            <p className="text-[16px] font-normal leading-[24px] opacity-80 capitalize">
              Active Apps
            </p>
            <h3 className="text-[64px] font-extrabold leading-[72px] capitalize mt-2">
              132+
            </h3>
            <p className="text-[16px] font-normal leading-[24px] opacity-80 capitalize mt-2">
              31 more will Launch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
