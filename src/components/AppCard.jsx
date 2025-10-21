// src/components/AppCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import downloadIcon from "../assets/download-ico.png";
import ratingIcon from "../assets/rating-ico.png";

// Import all images from src/assets
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

// Map image names to imported images
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

const AppCard = ({ app }) => {
  const navigate = useNavigate();

  // Use src/assets imported images
  const appImage = images[app.image];

  return (
    <div
      onClick={() => navigate(`/apps/${app.id}`)}
      className="flex flex-col justify-start items-center bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 w-full h-[435px] transform hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="mt-4 px-4 w-full h-[316px] flex items-center justify-center">
        <img
          src={appImage}
          alt={app.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Card Info */}
      <div className="w-full text-left p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {app.title}
          </h3>
        </div>

        {/* Downloads and Rating */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <button className="flex items-center justify-center w-[69px] h-[31px] gap-2 px-2 rounded-[4px] bg-[rgba(241,245,232,1)] text-[#00D390] font-inter font-medium text-[16px] leading-[100%] capitalize">
            <img src={downloadIcon} alt="Download" className="w-4 h-4" />
            {app.downloads}
          </button>

          <div className="inline-flex items-center justify-center h-[31px] gap-2 px-2 rounded-[4px] bg-[rgba(255,240,225,1)]">
            <img src={ratingIcon} alt="Rating" className="w-4 h-4" />
            <span className="text-[#FF8811] font-medium text-[16px] leading-[100%]">
              {app.ratingAvg}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
