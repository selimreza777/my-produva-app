import React from "react";
import { useNavigate } from "react-router-dom";
import appsData from "../data/appsData.json";
import AppCard from "../components/AppCard";

const TopApps = () => {
  const navigate = useNavigate();
  const topApps = appsData.slice(0, 8);

  const handleShowAll = () => {
    navigate("/apps"); // navigates smoothly using React Router
    window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
  };

  return (
    <section className="py-16 bg-[#F8F6FF]">
      <div className="max-w-[1440px] mx-auto px-5 text-center">
        <h2 className="text-[48px] font-bold leading-[100%] text-[#001931] capitalize mb-3 font-inter">
          Trending Apps
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Explore the most downloaded and highly rated apps this week.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-start">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={handleShowAll}
            className="w-[145px] h-[48px] flex justify-center items-center rounded-md bg-gradient-to-br from-[#632EE3] to-[#9F62F2] px-4 py-3"
          >
            <span className="font-inter font-semibold text-[16px] leading-[100%] text-white capitalize">
              Show All
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopApps;
