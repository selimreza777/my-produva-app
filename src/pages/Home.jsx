import React from "react";
import Banner from "../components/Banner";
import TopApps from "../components/TopApps"; // Trending Apps section

const Home = () => {
  return (
    <div>
      {/* Hero + Trusted Section */}
      <Banner />

      {/* Trending / Top Apps Section */}
      <TopApps />
    </div>
  );
};

export default Home;
