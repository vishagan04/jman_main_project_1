import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic
    navigate("/");
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout} className="btn btn-danger">
        Confirm Logout
      </button>
    </div>
  );
};

export default Logout;
