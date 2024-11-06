import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route
      path="/dashboard"
      element={<ProtectedRoute component={DashboardPage} />}
    />
    <Route path="/admin" element={<ProtectedRoute component={AdminPage} />} />
  </Routes>
);

export default AppRoutes;
