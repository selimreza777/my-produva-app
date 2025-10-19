// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";

// Import pages
import Home from "./pages/Home";
import AllApps from "./pages/AllApps";
import AppDetails from "./pages/AppDetails";
import MyInstallation from "./pages/MyInstallation";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-inter">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <Routes>
          {/* Home Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* Apps Page */}
          <Route path="/apps" element={<AllApps />} />

          {/* App Details */}
          <Route path="/appdetails/:id" element={<AppDetails />} />

          {/* ✅ Installation Pages */}
          <Route path="/installation" element={<MyInstallation />} />
          <Route path="/my-installation" element={<MyInstallation />} />

          {/* ❌ 404 Page */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
