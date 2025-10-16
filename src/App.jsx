import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; // <-- Import Footer
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar / Header */}
      <Header />

      {/* Page Routes */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* future routes */}
          {/* <Route path="/courses" element={<Courses />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </main>

      {/* Footer */}
      <Footer /> {/* <-- Added Footer here */}
    </div>
  );
};

export default App;
