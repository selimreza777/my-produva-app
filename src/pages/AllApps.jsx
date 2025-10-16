import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci"; // ✅ Import search icon
import AppCard from "../components/AppCard";
import appsData from "../data/appsData.json";

const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Scroll to top when component loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-10">
      {/* Main Title */}
      <h1 className="text-[48px] font-bold font-inter text-[#001931] leading-[100%] text-center capitalize mb-4">
        Our All Applications
      </h1>

      {/* Subtitle */}
      <p className="text-[20px] font-normal font-inter text-[#627382] leading-[32px] text-center mb-8">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      {/* Apps Found + Search Bar */}
      <div className="flex justify-between items-center mb-8">
        {/* Apps Found */}
        <p className="text-[24px] font-semibold font-inter text-[#001931] leading-[32px]">
          ({filteredApps.length}) Apps Found
        </p>

        {/* Search Bar */}
        <div className="w-[400px] h-[44px] flex items-center gap-2 px-4 py-2 border border-[#d2d2d2] rounded-md">
          {/* Search Icon */}
          <CiSearch className="text-[#627382] w-5 h-5 flex-shrink-0" />

          {/* Input */}
          <input
            type="text"
            placeholder="search Apps"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 text-[#627382] font-inter text-[16px] font-normal leading-[100%] focus:outline-none"
          />
        </div>
      </div>

      {/* App Cards */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-16">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-10 pb-16">No apps found.</p>
      )}
    </div>
  );
};

export default AllApps;
