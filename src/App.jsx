// src/App.jsx
import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Page Content Placeholder */}
      <main className="flex-1 p-4 text-center">
        <h1 className="text-2xl font-semibold">Page content will appear here</h1>
      </main>
    </div>
  );
};

export default App;
