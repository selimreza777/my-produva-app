// src/routes/route.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AllApps from "../pages/AllApps";
import AppDetails from "../pages/AppDetails";
import MyInstallation from "../pages/MyInstallation";
import ErrorPage from "../pages/ErrorPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" replace />} />
    <Route path="/home" element={<Home />} />
    <Route path="/apps" element={<AllApps />} />
    <Route path="/apps/:id" element={<AppDetails />} />
    <Route path="/installation" element={<MyInstallation />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AppRoutes;
