// src/components/TopApps.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import appsData from "../data/appsData.json";
import downloadIcon from "../assets/download-ico.png";
import ratingIcon from "../assets/rating-ico.png"; // ✅ add this

const TopApps = () => {
  const navigate = useNavigate();
  const topApps = appsData.slice(0, 8);

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
            <div
              key={app.id}
              onClick={() => navigate(`/appdetails/${app.id}`)}
              className="flex flex-col justify-start items-center bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 w-full h-[435px] transform hover:-translate-y-2"
            >
              <div className="mt-4 px-4 w-full h-[316px] flex items-center justify-center">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <div className="w-full text-left p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {app.title}
                  </h3>
                  
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <button
                    className="flex items-center justify-center w-[69px] h-[31px] gap-2 px-2 rounded-[4px] bg-[rgba(241,245,232,1)] text-[#00D390] font-inter font-medium text-[16px] leading-[100%] capitalize"
                  >
                    <img src={downloadIcon} alt="Download" className="w-4 h-4" />
                    {app.downloads}
                  </button>

                  {/* Rating icon + number styled like Primary Button_2 */}
                  <div className="inline-flex items-center justify-center h-[31px] gap-2 px-2 rounded-[4px] bg-[rgba(255,240,225,1)]">
                    <img src={ratingIcon} alt="Rating" className="w-4 h-4" /> {/* 16px × 16px */}
                    <span className="w-[16px] h-[16px] text-[#FF8811] font-medium text-[16px] leading-[100%]">
                      {app.ratingAvg}
                    </span>
                  </div>




                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/allapps")}
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
