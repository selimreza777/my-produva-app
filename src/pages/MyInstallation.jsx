import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("high-low");

  // Load installed apps from localStorage
  const loadInstalledApps = () => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
  };

  useEffect(() => {
    setLoading(true);
    loadInstalledApps();
    const timer = setTimeout(() => setLoading(false), 500);

    // Listen for storage changes
    window.addEventListener("storage", loadInstalledApps);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("storage", loadInstalledApps);
    };
  }, []);

  // Handle uninstall
  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.success("App uninstalled successfully!");
  };

  // Handle sort change
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
        <h1 className="text-4xl font-bold text-[#001931] mb-4">
          No Installed Apps
        </h1>
        <p className="text-gray-500">
          You haven’t installed any apps yet. Install some apps first!
        </p>
      </div>
    );

  return (
    <div className="px-4 sm:px-10 py-10 min-h-screen bg-[#F8F6FF]">
      <ToastContainer />

      {/* Title Section */}
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-[#001931] font-inter font-bold text-[48px] leading-[58px] capitalize text-center w-full max-w-[1440px]">
          Your Installed Apps
        </h1>
        <p className="text-[#627382] font-inter font-normal text-[20px] leading-[32px] text-center w-full max-w-[1440px] mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Apps Found + Sort Button Row (aligned with page padding) */}
      <div className="flex justify-between items-center mb-6 px-4 sm:px-15">
        {/* Apps Found */}
        <p className="text-[#001931] font-inter font-semibold text-[24px] leading-[32px] text-left">
          {sortedApps.length} Apps Found
        </p>

        {/* Sort Dropdown Button */}
        <button className="flex items-center justify-start gap-[10px] px-4 py-3 w-[151px] h-[43px] bg-white border border-[#d2d2d2] rounded-sm">
          <span className="text-[#627382] font-inter font-normal text-[16px] leading-[19px] text-left w-full h-[19px]">
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

      {/* Installed Apps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-10">
        {sortedApps.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition hover:shadow-xl"
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-32 h-32 object-cover rounded-md mb-4"
            />
            <h2 className="font-bold text-lg text-[#001931] mb-2">{app.title}</h2>
            <p className="text-gray-500 mb-4">{app.companyName}</p>
            <button
              onClick={() => handleUninstall(app.id)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyInstallation;
