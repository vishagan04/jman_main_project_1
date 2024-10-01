// Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div className="position-sticky">
        <h5 className="sidebar-heading">Admin Panel</h5>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink 
              to="/admin/dashboard" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/admin/employees" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Employee List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/admin/add-employee" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Add Employee
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/admin/skills" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Skills Management
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/admin/courses" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Courses Management
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/admin/logout" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
