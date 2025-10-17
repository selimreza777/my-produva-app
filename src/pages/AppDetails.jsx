// src/pages/AppDetails.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import appsData from "../data/appsData.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

      {/* Main Container */}
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
              <h1 className="text-[#001931] font-inter text-2xl lg:text-[32px] font-bold leading-[100%] capitalize text-left mb-4">
                {app.title}
              </h1>

              <p className="text-gray-600 text-lg mb-2">
                Downloads:{" "}
                <span className="font-semibold">{app.downloads}</span>
              </p>
              <p className="text-gray-600 text-lg mb-2">
                Rating: <span className="font-semibold">{app.ratingAvg}</span>
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Reviews: <span className="font-semibold">{app.reviews}</span>
              </p>
            </div>

            <button
              disabled={installed}
              onClick={handleInstall}
              className={`w-[180px] h-[48px] rounded-md px-4 py-3 font-semibold text-white transition ${installed
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:opacity-90"
                }`}
            >
              {installed ? "Installed" : "Install"}
            </button>
          </div>
        </div>

        {/* Ratings Bar Section */}
        <div className="mb-12 max-w-[600px] space-y-3">
          <h2 className="text-2xl font-bold mb-4 text-[#001931]">Ratings</h2>
          {ratings.map((r, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="w-16 text-sm">{r.name}</span>
              <div className="flex-1 h-4 bg-gray-200 rounded overflow-hidden">
                <div
                  className="h-4 bg-orange-400 rounded"
                  style={{ width: `${(r.count / maxCount) * 100}%` }}
                />
              </div>
              <span className="w-12 text-sm text-gray-600">{r.count}</span>
            </div>
          ))}
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
