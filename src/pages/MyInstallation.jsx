import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import downloadIcon from "../assets/download-ico.png";
import starIcon from "../assets/rating-ico.png";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("high-low");

  const loadInstalledApps = () => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
  };

  useEffect(() => {
    setLoading(true);
    loadInstalledApps();
    const timer = setTimeout(() => setLoading(false), 500);
    window.addEventListener("storage", loadInstalledApps);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("storage", loadInstalledApps);
    };
  }, []);

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.success("App uninstalled successfully!");
  };

  const handleSort = (e) => setSortOrder(e.target.value);

  const sortedApps = [...installedApps].sort((a, b) =>
    sortOrder === "high-low" ? b.downloads - a.downloads : a.downloads - b.downloads
  );

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[#7b43e9] rounded-full animate-spin"></div>
      </div>
    );

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
        <h1 className="text-[#001931] font-inter font-bold text-[48px] leading-[58px] capitalize text-center">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] font-inter font-normal text-[20px] leading-[32px] text-center mt-2 mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Apps Found + Sort Button */}
      <div className="flex justify-between items-center mb-6 w-full max-w-[1440px] mx-auto px-4 sm:px-10">
        <p className="text-[#001931] font-inter font-semibold text-[24px] leading-[32px]">
          {sortedApps.length} Apps Found
        </p>

        <button className="flex items-center justify-start gap-[10px] px-4 py-3 w-[160px] h-[43px] bg-white border border-[#d2d2d2] rounded-sm">
          <span className="text-[#627382] font-inter font-normal text-[16px] leading-[19px]">
            Sort By Size
          </span>
          <svg
            className="w-4 h-4 ml-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Installed Apps List */}
      <div className="flex flex-col gap-6 w-full max-w-[1440px] mx-auto px-4 sm:px-10">
        {sortedApps.map((app) => (
          <div
            key={app.id}
            className="w-full h-[112px] flex flex-row justify-between items-center gap-4 p-4 rounded-md bg-white shadow-md hover:shadow-lg transition"
          >
            {/* Left: Image + Info */}
            <div className="flex items-center gap-4 w-full">
              <img
                src={app.image}
                alt={app.title}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div>
                <h2 className="text-[#001931] font-medium text-[20px] leading-[24px] capitalize">
                  {app.title}
                </h2>
                <div className="flex items-center gap-5 mt-2">
                  {/* Downloads */}
                  <div className="flex items-center gap-1">
                    <img src={downloadIcon} alt="downloads" className="w-4 h-4" />
                    <span className="text-[#627382] text-sm">{app.downloads}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    <img src={starIcon} alt="rating" className="w-4 h-4" />
                    <span className="text-[#627382] text-sm">{app.ratingAvg}</span>
                  </div>

                  {/* Size */}
                  <div className="flex items-center gap-1">
                    <span className="text-[#627382] text-sm">{app.size} MB</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Uninstall Button */}
            <button
              onClick={() => handleUninstall(app.id)}
              className="w-[100px] h-[43px] flex justify-center items-center gap-[10px] px-4 py-3 bg-[#00D390] rounded-md hover:opacity-90 transition"
            >
              <span className="text-white font-inter font-semibold text-[16px] leading-[19px] capitalize">
                Uninstall
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyInstallation;
