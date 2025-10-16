import React, { useState } from "react";
import AppCard from "../components/AppCard";
import appsData from "../data/appsData.json";

const AllApps = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-[#001931]">All Apps</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search apps..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full mb-8 focus:outline-none focus:ring-2 focus:ring-[#9F62F2]"
      />

      {/* App Cards */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-16">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-10 pb-16">No apps found.</p>
      )}
    </div>
  );
};

export default AllApps;
