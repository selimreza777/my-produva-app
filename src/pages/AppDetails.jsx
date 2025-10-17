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

      <div className="px-4 sm:px-[100px] py-15 flex-1">
        {/* App Info Section */}
        <div className="flex flex-col lg:flex-row gap-10 mb-12">
          {/* App Image */}
          <div className="flex-shrink-0 flex justify-center">
            <img
              src={app.image}
              alt={app.title}
              className="w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] object-cover rounded-md"
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
              <p className="text-[#555] font-inter text-[18px] sm:text-[20px] leading-[30px] sm:leading-[32px] text-left mb-4 w-full sm:w-[1050px]">
                Developed by{" "}
                <span className="text-[#7b43e9] font-medium">
                  {app.companyName}
                </span>
              </p>

              {/* Underline */}
              <div className="w-full sm:w-[1050px] border-b border-[#001931]/20 mt-[29.5px] mb-6"></div>

              {/* Info Section: Downloads, Rating, Reviews */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-10 sm:gap-20 mb-6 text-center sm:text-left">
                {/* Downloads */}
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <img src={downloadIcon} alt="Downloads" className="w-10 h-10" />
                  <span className="text-gray-500 text-sm">Downloads</span>
                  <span className="text-[#001931] font-inter font-extrabold text-[32px] sm:text-[40px] leading-[40px]">
                    {app.downloads}
                  </span>
                </div>

                {/* Average Rating */}
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <img src={ratingIcon} alt="Average Rating" className="w-10 h-10" />
                  <span className="text-gray-500 text-sm">Average Rating</span>
                  <span className="text-[#001931] font-inter font-extrabold text-[32px] sm:text-[40px] leading-[40px]">
                    {app.ratingAvg}
                  </span>
                </div>

                {/* Total Reviews */}
                <div className="flex flex-col items-center sm:items-start gap-2">
                  <img src={reviewIcon} alt="Total Reviews" className="w-10 h-10" />
                  <span className="text-gray-500 text-sm">Total Reviews</span>
                  <span className="text-[#001931] font-inter font-extrabold text-[32px] sm:text-[40px] leading-[40px]">
                    {app.reviews}
                  </span>
                </div>
              </div>

            </div>

            {/* Install Button */}
            <button
              disabled={installed}
              onClick={handleInstall}
              className={`w-full sm:w-[239px] h-[52px] flex justify-center items-center gap-2 px-5 py-3 rounded-[4px] transition ${installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#00D390] hover:opacity-90"
                }`}
            >
              <span className="text-[18px] sm:text-[20px] font-semibold leading-[100%] text-white capitalize">
                {installed ? "Installed" : `Install Now (${app.size} MB)`}
              </span>
            </button>
          </div>
        </div>

        {/* Ratings bar Section */}
        <div className="mb-12 max-w-[1200px] space-y-4">
          {/* Underline Above Ratings */}
          <div className="w-full sm:w-[1440px] border border-[#001931]/20 opacity-50 mb-6"></div>

          <h2 className="text-[#001931] font-inter text-[22px] sm:text-[24px] font-semibold mb-4">
            Ratings
          </h2>

          {[5, 4, 3, 2, 1].map((star) => {
            const ratingObj = ratings.find((r) => parseInt(r.name) === star) || { count: 0 };
            const barWidthPercent = (ratingObj.count / maxCount) * 100;

            return (
              <div key={star} className="flex items-center gap-4">
                <span className="w-[50px] sm:w-[60px] text-[#627382] font-inter text-[16px] sm:text-[18px] font-normal">
                  {star} star
                </span>

                {/* Bar */}
                <div className="h-6 sm:h-8 bg-gray-200 rounded flex-1 overflow-hidden">
                  <div
                    className="h-6 sm:h-8 bg-orange-400 rounded"
                    style={{ width: `${barWidthPercent}%` }}
                  />
                </div>
              </div>
            );
          })}

          {/* Counts Row */}
          <div className="flex justify-between mt-2 px-[40px] sm:px-[80px] text-sm text-gray-600">
            {ratings
              .sort((a, b) => parseInt(a.name) - parseInt(b.name))
              .map((r, idx) => (
                <span key={idx}>{r.count}</span>
              ))}
          </div>
          {/* Underline last  Ratings */}
          <div className="w-full sm:w-[1440px] border border-[#001931]/20 opacity-50 mt-8 mb-6"></div>
        </div>

        {/* App Description */}
        <div className="max-w-full h-[560px] pl-4 pr-4 sm:pt-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#001931] mb-6">
            Description
          </h2>
          <div
            className="text-[#627382] font-inter text-[16px] sm:text-[20px] font-normal leading-[24px] sm:leading-[32px] tracking-normal text-justify overflow-y-auto"
            style={{ width: "100%", height: "560px" }}
          >
            {(() => {
              const text = app.description.replace(/[\r\n]+/g, " ").trim();
              const sentences = text.split(". ").map(s => s.trim()).filter(Boolean);
              const partSize = Math.ceil(sentences.length / 3);

              const paragraphs = [
                sentences.slice(0, partSize).join(". ") + ".",
                sentences.slice(partSize, partSize * 2).join(". ") + ".",
                sentences.slice(partSize * 2).join(". "),
              ];

              return paragraphs.map((para, idx) => (
                <p key={idx} className="mb-4 sm:mb-6">
                  {para}
                </p>
              ));
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
