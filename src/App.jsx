import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllApps from "./pages/AllApps";
import AppDetails from "./pages/AppDetails"; // ✅ import AppDetails page
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Global scroll-to-top on route change */}
      <ScrollToTop />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<AllApps />} />
          <Route path="/appdetails/:id" element={<AppDetails />} /> {/* ✅ AppDetails route */}
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
