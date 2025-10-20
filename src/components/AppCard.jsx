// src/components/AppCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import downloadIcon from "../assets/download-ico.png";
import ratingIcon from "../assets/rating-ico.png";

const AppCard = ({ app }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/apps/${app.id}`)}
      className="flex flex-col justify-start items-center bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 w-full h-[435px] transform hover:-translate-y-2"
    >
      <div className="mt-4 px-4 w-full h-[316px] flex items-center justify-center">
        <img
          src={process.env.PUBLIC_URL + '/' + app.image} // ✅ Fixed
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
