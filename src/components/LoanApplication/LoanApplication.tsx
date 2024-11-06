import React, { useState } from "react";
import { applyForLoan } from "../../services/loanService";

const LoanApplication: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [tenure, setTenure] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await applyForLoan({ amount, tenure });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Loan Amount"
        className="input input-bordered w-full mb-2"
      />
      <input
        type="number"
        value={tenure}
        onChange={(e) => setTenure(e.target.value)}
        placeholder="Loan Tenure (Months)"
        className="input input-bordered w-full mb-2"
      />
      <button type="submit" className="btn btn-primary w-full">
        Apply for Loan
      </button>
    </form>
  );
};

export default LoanApplication;
