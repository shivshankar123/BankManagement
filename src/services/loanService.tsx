import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    localStorage.setItem("token", response.data.token);
    return true;
  } catch (error) {
    console.error("Login failed:", error);
    return false;
  }
};

export const applyForLoan = async (loanData: {
  amount: string;
  tenure: string;
}) => {
  try {
    const token = localStorage.getItem("token");
    await axios.post(`${API_URL}/loans`, loanData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error("Error applying for loan:", error);
  }
};

export const getLoanStatus = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/loans/status`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching loan status:", error);
    return [];
  }
};

export const getPendingLoans = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/admin/loans`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching pending loans:", error);
    return [];
  }
};

export const updateLoanStatus = async (id: number, status: string) => {
  try {
    const token = localStorage.getItem("token");
    await axios.patch(
      `${API_URL}/admin/loans/${id}`,
      { status },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  } catch (error) {
    console.error("Error updating loan status:", error);
  }
};
