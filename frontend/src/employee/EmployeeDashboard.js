// EmployeeDashboard.js
import React from "react";
import EmployeeNavbar from "./components/EmployeeNavbar";
import EmployeeSidebar from "./components/EmployeeSidebar";

const EmployeeDashboard = () => {
  return (
    <div className="d-flex">
      <EmployeeSidebar />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <EmployeeNavbar />
        <div className="content">
          <h2>Employee Dashboard</h2>
          <p>Welcome to your dashboard! Here you can track your performance and progress.</p>
          {/* Add charts or other components here */}
        </div>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
