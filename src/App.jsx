// src/App.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import AppRoutes from "./Routes/Route"; // Routes imported from route.jsx

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // Loader on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f6ff] text-gray-900 font-inter">
      <Header />

      {loading && <Loader />}

      {!loading && (
        <main className="flex-1 w-full">
          <AppRoutes />
        </main>
      )}

      <Footer />
    </div>
  );
};

export default App;
