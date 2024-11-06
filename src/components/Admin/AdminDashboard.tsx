// src/components/Admin/AdminDashboard.tsx

import React, { useEffect, useState } from "react";
import { getPendingLoans, updateLoanStatus } from "../../services/loanService";

interface Loan {
  id: number;
  amount: number;
  tenure: number;
  status: string;
}

const AdminDashboard: React.FC = () => {
  const [loans, setLoans] = useState<Loan[]>([]);

  useEffect(() => {
    const fetchPendingLoans = async () => {
      const data = await getPendingLoans();
      setLoans(data);
    };
    fetchPendingLoans();
  }, []);

  const handleStatusUpdate = async (id: number, status: string) => {
    await updateLoanStatus(id, status);
    setLoans(
      loans.map((loan) => (loan.id === id ? { ...loan, status } : loan))
    );
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Pending Loan Approvals</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Loan ID</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Tenure</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan.id}>
                <td className="border px-4 py-2">{loan.id}</td>
                <td className="border px-4 py-2">{loan.amount}</td>
                <td className="border px-4 py-2">{loan.tenure} months</td>
                <td className="border px-4 py-2">
                  <button
                    className="btn btn-success mr-2"
                    onClick={() => handleStatusUpdate(loan.id, "Approved")}
                  >
                    Approve
                  </button>
                  <button
                    className="btn btn-error"
                    onClick={() => handleStatusUpdate(loan.id, "Rejected")}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
