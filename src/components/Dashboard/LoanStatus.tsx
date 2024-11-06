// src/components/Dashboard/LoanStatus.tsx

import React, { useEffect, useState } from "react";
import { getLoanStatus } from "../../services/loanService";

interface Loan {
  id: number;
  amount: number;
  tenure: number;
  status: string;
}

const LoanStatus: React.FC = () => {
  const [loans, setLoans] = useState<Loan[]>([]);

  useEffect(() => {
    const fetchLoanStatus = async () => {
      const data = await getLoanStatus();
      setLoans(data);
    };
    fetchLoanStatus();
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Your Loans</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Loan ID</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Tenure</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan.id}>
                <td className="border px-4 py-2">{loan.id}</td>
                <td className="border px-4 py-2">{loan.amount}</td>
                <td className="border px-4 py-2">{loan.tenure} months</td>
                <td className="border px-4 py-2">{loan.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoanStatus;
