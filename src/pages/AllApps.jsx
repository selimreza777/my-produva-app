// src/pages/AllApps.jsx
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import AppCard from "../components/AppCard";
import appsData from "../data/appsData.json";

const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowAll = () => {
    setSearchTerm("");
    navigate("/apps");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#F8F6FF] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-10">
        {/* Apps Found + Search Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 sm:gap-0">
          <p className="text-[20px] sm:text-[24px] font-semibold font-inter text-[#001931] leading-[28px] sm:leading-[32px]">
            ({filteredApps.length}) Apps Found
          </p>

          <div className="w-full sm:w-[400px] h-[44px] flex items-center gap-2 px-4 py-2 border border-[#d2d2d2] rounded-md">
            <CiSearch className="text-[#627382] w-5 h-5 flex-shrink-0" />
            <input
              type="text"
              placeholder="search Apps"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 text-[#627382] font-inter text-[16px] font-normal leading-[100%] focus:outline-none"
            />
          </div>
        </div>

        {/* Main Title & Subtitle */}
        {filteredApps.length > 0 && (
          <>
            <h1 className="text-[32px] sm:text-[48px] font-bold font-inter text-[#001931] leading-[100%] text-center capitalize mb-4">
              Our All Applications
            </h1>

            <p className="text-[16px] sm:text-[20px] font-normal font-inter text-[#627382] leading-[24px] sm:leading-[32px] text-center mb-8">
              Explore All Apps on the Market developed by us. We code for Millions
            </p>
          </>
        )}

        {/* App Cards or No Apps Found */}
        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-16">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-10 pb-16 gap-6 max-w-[600px] mx-auto min-h-[50vh]">
            <p className="text-gray-500 text-[24px] sm:text-[55px] font-bold font-inter text-center">
              No Apps Found
            </p>

            <button
              onClick={handleShowAll}
              className="w-[140px] sm:w-[145px] h-[44px] sm:h-[48px] flex justify-center items-center rounded-md bg-gradient-to-br from-[#632EE3] to-[#9F62F2] px-4 py-2 sm:py-3"
            >
              <span className="font-inter font-semibold text-[14px] sm:text-[16px] leading-[100%] text-white capitalize">
                Show All
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;
