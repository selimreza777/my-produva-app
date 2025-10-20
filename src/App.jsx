// src/App.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import AppRoutes from "./routes/route"; // Routes imported from route.jsx

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
          <AppRoutes />
        </main>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
