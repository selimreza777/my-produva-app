// src/components/TopApps.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import appsData from "../data/appsData.json";

const TopApps = () => {
  const navigate = useNavigate();
  const topApps = appsData.slice(0, 8); // first 8 apps

  return (
    <section className="py-16 bg-[#F8F6FF]">
      {/* Page container with left/right padding 80px */}
      <div className="max-w-[1440px] mx-auto px-5 text-center">
        {/* Section Title */}
        <h2 className="text-[48px] font-bold leading-[100%] text-[#001931] capitalize mb-3 font-inter">
          Trending Apps
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          Explore the most downloaded and highly rated apps this week.
        </p>

        {/* Grid for App Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-start">
          {topApps.map((app) => (
            <div
              key={app.id}
              onClick={() => navigate(`/appdetails/${app.id}`)}
              className="flex flex-col justify-start items-center bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 w-full h-[435px]"
            >
              {/* App Image with 16px padding */}
              <div className="mt-4 px-4 w-full h-[316px] flex items-center justify-center">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* App Info */}
              <div className="w-full text-left p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {app.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{app.companyName}</p>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>⬇ {app.downloads.toLocaleString()}</span>
                  <span>⭐ {app.ratingAvg}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show All Button centered */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/allapps")} // Added navigation
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
