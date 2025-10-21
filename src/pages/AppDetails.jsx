// src/pages/AppDetails.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import downloadIcon from "../assets/download-ico.png";
import ratingIcon from "../assets/rating-ico.png";
import reviewIcon from "../assets/icon-review.png";
import errorImg from "../assets/App-Error.png";

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

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(null);
  const [appsData, setAppsData] = useState([]);
  const [loading, setLoading] = useState(true); // 🔹 Add loading state

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await fetch("/appsData.json");
        const data = await response.json();
        setAppsData(data);

        const foundApp = data.find((a) => a.id === Number(id));
        setApp(foundApp);

        setInstalled(
          JSON.parse(localStorage.getItem("installedApps"))?.some(
            (a) => a.id === foundApp?.id
          ) || false
        );
        setLoading(false); // 🔹 done loading
      } catch (error) {
        console.error("Error loading apps data:", error);
        setLoading(false); // 🔹 done loading even on error
      }
    };

    fetchApps();
  }, [id]);

  // 🔹 Show loading screen before deciding if app exists
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#F8F6FF]">
        <p className="text-[#001931] font-semibold text-xl">Loading...</p>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F6FF] px-4 text-center">
        <img
          src={errorImg}
          alt="App Not Found"
          className="w-[395px] h-[362px] sm:w-[300px] sm:h-[275px] mb-6"
        />
        <h1 className="text-[#001931] font-inter font-semibold text-[48px] sm:text-3xl mb-4">
          OOPS!! APP NOT FOUND
        </h1>
        <p className="text-[#627382] text-[20px] mb-8 max-w-3xl">
          The app you are requesting is not found in our system. Please try another app.
        </p>
        <Link
          to="/apps"
          className="w-[150px] h-[48px] flex justify-center items-center rounded-md bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white font-semibold hover:brightness-90 transition"
        >
          Go Back
        </Link>
      </div>
    );
  }

  const handleInstall = () => {
    setInstalled(true);
    const existingApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const updatedApps = [...existingApps, app];
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
  };

  const appImage = images[app.image];
  const ratings = app.ratings;
  const maxCount = Math.max(...ratings.map((r) => r.count));

  return (
    <div className="min-h-screen bg-[#F8F6FF] flex flex-col">
      {/* ... rest of your component remains unchanged ... */}
      {/* Paste all your existing JSX below as-is */}
    </div>
  );
};

// StatCard and splitDescription remain unchanged
const StatCard = ({ icon, label, value }) => (
  <div className="flex flex-col items-center sm:items-start gap-2">
    <img src={icon} alt={label} className="w-10 h-10" />
    <span className="text-gray-500 text-sm">{label}</span>
    <span className="text-[#001931] font-extrabold text-[32px] sm:text-[40px]">{value}</span>
  </div>
);

const splitDescription = (text) => {
  const sentences = text.replace(/[\r\n]+/g, " ").split(". ").filter(Boolean);
  const partSize = Math.ceil(sentences.length / 3);
  return [
    sentences.slice(0, partSize).join(". ") + ".",
    sentences.slice(partSize, partSize * 2).join(". ") + ".",
    sentences.slice(partSize * 2).join(". "),
  ];
};

export default AppDetails;
