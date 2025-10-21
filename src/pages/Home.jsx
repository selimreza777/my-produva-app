// src/pages/Home.jsx
import React from "react";
import Banner from "../components/Banner";
import TopApps from "../components/TopApps";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <TopApps />
    </div>
  );
};

export default Home;
