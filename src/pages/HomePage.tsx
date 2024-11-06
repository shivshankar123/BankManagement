import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => (
  <div className="text-center mt-20">
    <h1 className="text-4xl font-bold">Loan Management System</h1>
    <Link to="/login" className="btn btn-primary mt-4">
      Login
    </Link>
  </div>
);

export default HomePage;
