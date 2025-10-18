// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllApps from "./pages/AllApps";
import AppDetails from "./pages/AppDetails";
import MyInstallation from "./pages/MyInstallation";
import ErrorPage from "./pages/ErrorPage";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const location = useLocation(); // ✅ Detect route changes
  const [loading, setLoading] = useState(false);

  // Show loading animation briefly on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700); // 700ms loading
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F6FF]">
      <Header />
      <ScrollToTop />

      {loading ? (
        <div className="flex-1 flex justify-center items-center">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-[#7b43e9] rounded-full animate-spin"></div>
        </div>
      ) : (
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/apps" element={<AllApps />} />
            <Route path="/appdetails/:id" element={<AppDetails />} />
            <Route path="/my-installation" element={<MyInstallation />} /> {/* Added */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      )}

      <Footer />
    </div>
  );
};

export default App;
