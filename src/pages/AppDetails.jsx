// src/pages/AppDetails.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import appsData from "../data/appsData.json";
import downloadIcon from "../assets/download-ico.png";
import ratingIcon from "../assets/rating-ico.png";
import reviewIcon from "../assets/icon-review.png";
import errorImg from "../assets/App-Error.png";

const AppDetails = () => {
  const { id } = useParams();
  const app = appsData.find((app) => app.id === Number(id));
  const [installed, setInstalled] = useState(
    JSON.parse(localStorage.getItem("installedApps"))?.some(
      (a) => a.id === app?.id
    ) || false
  );

  if (!app)
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F6FF] px-4 text-center">
        <img
          src={errorImg}
          alt="App Not Found"
          className="w-[395.9px] h-[362.09px] sm:w-[300px] sm:h-[275px] mb-6"
        />
        <h1 className="text-[#001931] font-inter font-semibold text-[48px] sm:text-3xl leading-[60px] mb-4">
          OPPS!! APP NOT FOUND
        </h1>
        <p className="text-[#627382] font-inter text-[20px] font-normal leading-[32px] mb-8 max-w-3xl">
          The App you are requesting is not found on our system. Please try another apps.
        </p>
        <Link
          to="/apps"
          className="flex justify-center items-center w-[150px] h-[48px] px-4 py-3 rounded-md bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-inter font-semibold hover:brightness-90 transition"
        >
          Go Back!
        </Link>
      </div>
    );

  const handleInstall = () => {
    if (!app) return;
    setInstalled(true);
    const existingApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const updatedApps = [...existingApps, app];
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
  };

  const ratings = app.ratings;
  const maxCount = Math.max(...ratings.map((r) => r.count));

  return (
    <div className="min-h-screen bg-[#F8F6FF] flex flex-col">
      <div className="px-4 sm:px-[100px] py-14 flex-1">
        {/* App Info */}
        <div className="flex flex-col lg:flex-row gap-10 mb-12">
          <div className="flex-shrink-0 flex justify-center">
            <img
              src={process.env.PUBLIC_URL + app.image} // ✅ Public path fix
              alt={app.title}
              className="w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] object-cover rounded-md shadow-md"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-[#001931] font-inter text-2xl lg:text-[32px] font-bold mb-2">
                {app.title}
              </h1>
              <p className="text-[#555] font-inter text-[18px] sm:text-[20px] leading-[30px] mb-4">
                Developed by{" "}
                <span className="text-[#7b43e9] font-medium">{app.companyName}</span>
              </p>
              <div className="border-b border-[#001931]/20 mb-6"></div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-10 sm:gap-20 mb-6 text-center sm:text-left">
                <StatCard icon={downloadIcon} label="Downloads" value={app.downloads} />
                <StatCard icon={ratingIcon} label="Average Rating" value={app.ratingAvg} />
                <StatCard icon={reviewIcon} label="Total Reviews" value={app.reviews} />
              </div>
            </div>

            <button
              disabled={installed}
              onClick={handleInstall}
              className={`w-full sm:w-[239px] h-[52px] flex justify-center items-center gap-2 px-5 py-3 rounded-md font-semibold text-white transition-all ${
                installed
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#00D390] hover:scale-105 hover:brightness-95"
              }`}
            >
              {installed ? "Installed" : `Install Now (${app.size} MB)`}
            </button>
          </div>
        </div>

        {/* Ratings Bar */}
        <div className="mb-12 max-w-[1200px] space-y-4 relative">
          <div className="border-t border-[#001931]/20 opacity-50 mb-6"></div>
          <h2 className="text-[#001931] font-inter text-[22px] sm:text-[24px] font-semibold mb-4">
            Ratings
          </h2>

          {[5, 4, 3, 2, 1].map((star) => {
            const ratingObj = ratings.find((r) => parseInt(r.name) === star) || { count: 0 };
            const barWidthPercent = (ratingObj.count / maxCount) * 100;
            const [hovered, setHovered] = useState(false);

            return (
              <div
                key={star}
                className="relative flex items-center gap-4 cursor-pointer transition-transform duration-300 hover:scale-105"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <span className="w-[50px] sm:w-[60px] text-[#627382] text-[16px] sm:text-[18px]">
                  {star} star
                </span>
                <div className="h-6 sm:h-8 bg-gray-200 rounded flex-1 overflow-visible relative">
                  <div
                    className="h-full bg-orange-400 rounded transition-all duration-300"
                    style={{ width: `${barWidthPercent}%` }}
                  />

                  {hovered && (
                    <div
                      style={{ width: `${Math.max(star * 50, 150)}px` }}
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-30 bg-gradient-to-br from-purple-400 to-pink-400 text-white shadow-2xl rounded-2xl px-6 py-4 transition-all duration-300"
                    >
                      <div className="flex justify-center items-center gap-2 mb-2">
                        {Array(star)
                          .fill()
                          .map((_, i) => (
                            <span key={i} className="text-yellow-300 text-xl drop-shadow-lg">
                              ★
                            </span>
                          ))}
                        {Array(5 - star)
                          .fill()
                          .map((_, i) => (
                            <span key={i} className="text-white/50 text-xl">
                              ★
                            </span>
                          ))}
                      </div>
                      <p className="text-center text-sm sm:text-[14px]">
                        {ratingObj.count} user{ratingObj.count > 1 ? "s" : ""} rated {star} star{star > 1 ? "s" : ""}.
                      </p>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-400 rotate-45"></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          <div className="flex justify-between mt-2 px-[40px] sm:px-[80px] text-sm text-gray-600">
            {ratings
              .sort((a, b) => parseInt(a.name) - parseInt(b.name))
              .map((r, idx) => (
                <span key={idx}>{r.count}</span>
              ))}
          </div>

          <div className="border-t border-[#001931]/20 opacity-50 mt-8 mb-6"></div>
        </div>

        {/* Description */}
        <div className="max-w-full sm:pt-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#001931] mb-6">Description</h2>
          <div className="text-[#627382] text-[16px] sm:text-[20px] leading-[28px] sm:leading-[32px] tracking-normal text-justify space-y-4">
            {splitDescription(app.description).map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value }) => (
  <div className="flex flex-col items-center sm:items-start gap-2">
    <img src={icon} alt={label} className="w-10 h-10" />
    <span className="text-gray-500 text-sm">{label}</span>
    <span className="text-[#001931] font-inter font-extrabold text-[32px] sm:text-[40px]">{value}</span>
  </div>
);

const splitDescription = (text) => {
  const cleanText = text.replace(/[\r\n]+/g, " ").trim();
  const sentences = cleanText.split(". ").map((s) => s.trim()).filter(Boolean);
  const partSize = Math.ceil(sentences.length / 3);

  return [
    sentences.slice(0, partSize).join(". ") + ".",
    sentences.slice(partSize, partSize * 2).join(". ") + ".",
    sentences.slice(partSize * 2).join(". "),
  ];
};

export default AppDetails;
