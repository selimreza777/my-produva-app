// src/components/Banner.jsx
import React from "react";
import googlePlay from "../assets/google-play.png";
import appStore from "../assets/app-play.png";

const Banner = () => {
  return (
    <section className="flex flex-col items-center justify-start text-center py-20 px-4 bg-[#f5f5f5]">
      {/* Title */}
      <h1
        className="
          text-[72px] sm:text-[60px] lg:text-[72px]
          font-semibold
          leading-[84px]
          capitalize
          max-w-[597px]
        "
      >
        We Build{" "}
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive Apps
        </span>
      </h1>

      {/* Gap between title and subtitle */}
      <div className="mt-[16px]" />

      {/* Subtitle */}
      <p className="text-[20px] font-normal leading-[32px] text-[#627382] max-w-[1440px]">
        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />
        Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>

      {/* Gap before buttons */}
      <div className="mt-6" />

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {/* Google Play */}
        <a
          href="#"
          className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-[4px] h-[56px] w-[200px] transition hover:opacity-90"
        >
          <img src={googlePlay} alt="Google Play" className="w-8 h-8" />
          <span className="text-[#001931] font-semibold text-[20px] leading-[24px] capitalize">
            Google Play
          </span>
        </a>

        {/* App Store */}
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
    </section>
  );
};

export default Banner;
