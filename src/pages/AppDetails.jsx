// src/pages/AppDetails.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import appsData from "../data/appsData.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import icons
import downloadIcon from "../assets/download-ico.png";
import ratingIcon from "../assets/rating-ico.png";
import reviewIcon from "../assets/icon-review.png";

const AppDetails = () => {
  const { id } = useParams();
  const app = appsData.find((app) => app.id === Number(id));
  const [installed, setInstalled] = useState(false);

  if (!app)
    return <p className="text-center mt-20 text-xl">App not found!</p>;

  const handleInstall = () => {
    setInstalled(true);
    toast.success(`${app.title} Installed Successfully!`);
  };

  const ratings = app.ratings;
  const maxCount = Math.max(...ratings.map((r) => r.count));

  return (
    <div className="min-h-screen bg-[#F8F6FF] flex flex-col">
      <ToastContainer />

      <div className="px-[100px] py-15 flex-1">
        {/* App Info Section */}
        <div className="flex flex-col lg:flex-row gap-10 mb-12">
          {/* App Image */}
          <div className="flex-shrink-0">
            <img
              src={app.image}
              alt={app.title}
              className="w-[350px] h-[350px] object-cover rounded-md"
            />
          </div>

          {/* App Details */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              {/* Title */}
              <h1 className="text-[#001931] font-inter text-2xl lg:text-[32px] font-bold leading-[100%] capitalize text-left mb-2">
                {app.title}
              </h1>

              {/* Subtitle */}
              <p className="text-[#555] font-inter text-[20px] leading-[32px] text-left mb-4 w-[1050px] max-w-full">
                Developed by{" "}
                <span className="text-[#7b43e9] font-medium">
                  {app.companyName}
                </span>
              </p>

              {/* Underline */}
              <div className="w-[1050px] max-w-full border-b border-[#001931]/20 mt-[29.5px] mb-6"></div>

              {/* Info Section: Downloads, Rating, Reviews */}
              <div className="flex gap-20 mb-6">
                {/* Downloads */}
                <div className="flex flex-col items-start gap-2">
                  <img src={downloadIcon} alt="Downloads" className="w-10 h-10" />
                  <span className="text-gray-500 text-sm">Downloads</span>
                  <span className="text-[#001931] font-inter font-extrabold text-[40px] leading-[40px]">
                    {app.downloads}
                  </span>
                </div>

                {/* Average Rating */}
                <div className="flex flex-col items-start gap-2">
                  <img src={ratingIcon} alt="Average Rating" className="w-10 h-10" />
                  <span className="text-gray-500 text-sm">Average Rating</span>
                  <span className="text-[#001931] font-inter font-extrabold text-[40px] leading-[40px]">
                    {app.ratingAvg}
                  </span>
                </div>

                {/* Total Reviews */}
                <div className="flex flex-col items-start gap-2">
                  <img src={reviewIcon} alt="Total Reviews" className="w-10 h-10" />
                  <span className="text-gray-500 text-sm">Total Reviews</span>
                  <span className="text-[#001931] font-inter font-extrabold text-[40px] leading-[40px]">
                    {app.reviews}
                  </span>
                </div>
              </div>
            </div>

            {/* Install Button */}
            <button
              disabled={installed}
              onClick={handleInstall}
              className={`w-[239px] h-[52px] flex justify-center items-center gap-2 px-5 py-3 rounded-[4px] transition ${installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#00D390] hover:opacity-90"
              }`}
            >
              <span className="text-[20px] font-semibold leading-[100%] text-white capitalize">
                {installed ? "Installed" : `Install Now (${app.size} MB)`}
              </span>
            </button>
          </div>
        </div>

{/* Ratings bar Section */}
<div className="mb-12 max-w-[1200px] space-y-4">
  <h2 className="text-[#001931] font-inter text-[24px] font-semibold mb-4">
    Ratings
  </h2>

  {[5,4,3,2,1].map((star) => {
    const ratingObj = ratings.find(r => parseInt(r.name) === star) || { count: 0 };
    const barWidthPercent = (ratingObj.count / maxCount) * 100;

    return (
      <div key={star} className="flex items-center gap-4">
        <span className="w-[60px] text-[#627382] font-inter text-[18px] font-normal">{star} star</span>

        {/* Bar */}
        <div className="h-8 bg-gray-200 rounded flex-1 overflow-hidden">
          <div
            className="h-8 bg-orange-400 rounded"
            style={{ width: `${barWidthPercent}%` }}
          />
        </div>
      </div>
    );
  })}

  {/* Counts Row */}
  <div className="flex justify-between mt-2 px-[80px] text-sm text-gray-600">
    {ratings
      .sort((a,b) => parseInt(a.name) - parseInt(b.name)) // 1 star → 5 star
      .map((r, idx) => (
        <span key={idx}>{r.count}</span>
      ))
    }
  </div>
</div>





        {/* App Description */}
        <div className="max-w-[800px]">
          <h2 className="text-2xl font-bold text-[#001931] mb-4">
            Description
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {app.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
