import React from "react";
import { useNavigate } from "react-router-dom";

import demo1 from "../assets/demo-app-1.png";
import demo2 from "../assets/demo-app-2.png";
import demo3 from "../assets/demo-app-3.png";
import demo4 from "../assets/demo-app-4.png";
import demo5 from "../assets/demo-app-5.png";
import demo6 from "../assets/demo-app-6.png";

const images = {
  "demo-app-1.png": demo1,
  "demo-app-2.png": demo2,
  "demo-app-3.png": demo3,
  "demo-app-4.png": demo4,
  "demo-app-5.png": demo5,
  "demo-app-6.png": demo6,
};

const AppCard = ({ app }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/app/${app.id}`)}
      className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 p-5"
    >
      <img
        src={images[app.image]}
        alt={app.title}
        className="w-full h-[180px] object-contain mb-4"
      />
      <h3 className="text-lg font-semibold text-[#001931]">{app.title}</h3>
      <p className="text-sm text-gray-500 mb-2">{app.companyName}</p>

      <div className="flex justify-between text-sm text-gray-600">
        <span>⭐ {app.ratingAvg}</span>
        <span>{app.downloads.toLocaleString()}+</span>
      </div>
    </div>
  );
};

export default AppCard;
