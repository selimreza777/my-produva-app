// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom"; // <-- import Navigate
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

// Import pages
import Home from "./pages/Home";
import AllApps from "./pages/AllApps";
import AppDetails from "./pages/AppDetails";
import MyInstallation from "./pages/MyInstallation";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // Show loader on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // 0.5s loader
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-inter">
      {/* Header */}
      <Header />

      {/* Loader */}
      {loading && <Loader />}

      {/* Main Content */}
      {!loading && (
        <main className="flex-1 container mx-auto px-4 py-6">
          <Routes>
            {/* Redirect / to /home */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/apps" element={<AllApps />} />
            <Route path="/apps/:id" element={<AppDetails />} />
            <Route path="/installation" element={<MyInstallation />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;