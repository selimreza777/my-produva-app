// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllApps from "./pages/AllApps";
import ScrollToTop from "./components/ScrollToTop"; // ✅ import it

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
    

      {/* ✅ Global scroll-to-top on every route change */}
      <ScrollToTop />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<AllApps />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
