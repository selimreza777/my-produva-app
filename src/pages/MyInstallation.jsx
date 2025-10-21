// src/pages/MyInstallation.jsx
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import downloadIcon from "../assets/download-ico.png";
import starIcon from "../assets/rating-ico.png";
import { IoCaretDownSharp } from "react-icons/io5";
import { motion } from "framer-motion";

// Import all app images from src/assets
import demoApp1 from "../assets/demo-app-1.png";
import demoApp2 from "../assets/demo-app-2.png";
import demoApp3 from "../assets/demo-app-3.png";
import demoApp4 from "../assets/demo-app-4.png";
import demoApp5 from "../assets/demo-app-5.png";
import demoApp6 from "../assets/demo-app-6.png";
import demoApp7 from "../assets/demo-app-7.png";
import demoApp8 from "../assets/demo-app-8.png";
import demoApp9 from "../assets/demo-app-9.png";
import demoApp10 from "../assets/demo-app-10.png";
import demoApp11 from "../assets/demo-app-11.png";
import demoApp12 from "../assets/demo-app-12.png";
import demoApp13 from "../assets/demo-app-13.png";
import demoApp14 from "../assets/demo-app-14.png";
import demoApp15 from "../assets/demo-app-15.png";
import demoApp16 from "../assets/demo-app-16.png";

// Map image filenames to imported images
const images = {
  "demo-app-1.png": demoApp1,
  "demo-app-2.png": demoApp2,
  "demo-app-3.png": demoApp3,
  "demo-app-4.png": demoApp4,
  "demo-app-5.png": demoApp5,
  "demo-app-6.png": demoApp6,
  "demo-app-7.png": demoApp7,
  "demo-app-8.png": demoApp8,
  "demo-app-9.png": demoApp9,
  "demo-app-10.png": demoApp10,
  "demo-app-11.png": demoApp11,
  "demo-app-12.png": demoApp12,
  "demo-app-13.png": demoApp13,
  "demo-app-14.png": demoApp14,
  "demo-app-15.png": demoApp15,
  "demo-app-16.png": demoApp16,
};

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortedApps, setSortedApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("high-low");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const loadInstalledApps = () => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
  };

  useEffect(() => {
    loadInstalledApps();
    window.addEventListener("storage", loadInstalledApps);
    return () => window.removeEventListener("storage", loadInstalledApps);
  }, []);

  const parseDownloads = (d) => Number(d.replace("M", ""));

  useEffect(() => {
    const sorted = [...installedApps].sort((a, b) => {
      const aNum = parseDownloads(a.downloads);
      const bNum = parseDownloads(b.downloads);
      return sortOrder === "high-low" ? bNum - aNum : aNum - bNum;
    });
    setSortedApps(sorted);
  }, [installedApps, sortOrder]);

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.success("App uninstalled successfully!");
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
    setDropdownOpen(false);
  };

  if (installedApps.length === 0)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-10">
        <h1 className="text-4xl font-bold text-[#001931] mb-4">No Installed Apps</h1>
        <p className="text-gray-500">You haven’t installed any apps yet. Install some apps first!</p>
      </div>
    );

  return (
    <div className="py-10 min-h-screen bg-[#F8F6FF] px-4 sm:px-10">
      <ToastContainer />

      {/* Title Section */}
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-[#001931] font-inter font-bold text-[36px] sm:text-[48px] leading-[42px] sm:leading-[58px] capitalize text-center">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] font-inter font-normal text-[16px] sm:text-[20px] leading-[24px] sm:leading-[32px] text-center mt-2 mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Apps Found + Sort Dropdown */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 w-full max-w-[1440px] mx-auto px-2 sm:px-10 gap-3 sm:gap-0 relative">
        <p className="text-[#001931] font-inter font-semibold text-[20px] sm:text-[24px] leading-[28px] sm:leading-[32px]">
          {sortedApps.length} Apps Found
        </p>

        <div className="relative mt-2 sm:mt-0">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-between gap-2 px-3 py-2 w-[140px] sm:w-[160px] h-[40px] sm:h-[43px] bg-white border border-[#d2d2d2] rounded-sm text-sm sm:text-base"
          >
            <span className="text-[#627382] font-inter font-normal">
              Sort By Size
            </span>
            <IoCaretDownSharp className="w-4 h-4 sm:w-4 sm:h-4 text-[#627382]" />
          </button>

          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-[140px] sm:w-[160px] bg-white border border-[#d2d2d2] rounded-sm shadow-md z-10 text-sm sm:text-base">
              <button
                onClick={() => handleSortChange("high-low")}
                className={`block w-full text-left px-4 py-2 ${sortOrder === "high-low" ? "bg-gray-100 font-semibold" : ""}`}
              >
                High - Low
              </button>
              <button
                onClick={() => handleSortChange("low-high")}
                className={`block w-full text-left px-4 py-2 ${sortOrder === "low-high" ? "bg-gray-100 font-semibold" : ""}`}
              >
                Low - High
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Installed Apps List */}
      <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-[1440px] mx-auto px-2 sm:px-10">
        {sortedApps.map((app) => (
          <motion.div
            key={app.id}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-4 p-3 sm:p-4 rounded-md bg-white shadow-md hover:shadow-lg transition"
          >
            {/* Left: Image + Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full">
              <img
                src={images[app.image]}
                alt={app.title}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md"
              />

              {/* Title + Info Below */}
              <div className="flex flex-col w-full">
                <h2 className="text-[#001931] font-medium text-[18px] sm:text-[20px] leading-[22px] sm:leading-[24px] capitalize">
                  {app.title}
                </h2>

                <div className="flex items-center gap-4 mt-2 text-sm sm:text-base">
                  <div className="flex items-center gap-1">
                    <img src={downloadIcon} alt="downloads" className="w-4 h-4" />
                    <span className="text-[#627382]">{app.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={starIcon} alt="rating" className="w-4 h-4" />
                    <span className="text-[#627382]">{app.ratingAvg}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#627382]">{app.size} MB</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Uninstall Button */}
            <button
              onClick={() => handleUninstall(app.id)}
              className="w-full sm:w-[100px] h-[40px] sm:h-[43px] flex justify-center items-center gap-2 sm:gap-[10px] px-3 sm:px-4 bg-[#00D390] rounded-md hover:opacity-90 transition mt-2 sm:mt-0"
            >
              <span className="text-white font-inter font-semibold text-[14px] sm:text-[16px] capitalize">
                Uninstall
              </span>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyInstallation;
