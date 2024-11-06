import React from "react";
import LoanStatus from "../components/Dashboard/LoanStatus";

const DashboardPage: React.FC = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold">Dashboard</h1>
    <LoanStatus />
  </div>
);

export default DashboardPage;
