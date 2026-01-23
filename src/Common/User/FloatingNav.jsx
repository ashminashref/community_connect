import React from "react";
import "./FloatingNav.css";
import { House, User, Bell } from "lucide-react";
import { NavLink } from "react-router-dom"; 

function Floatingnav() {
  return (
    <nav className="floating-nav">
      {/* NavLink automatically adds an 'active' class to the <a> tag when the path matches */}
      <NavLink 
        to="/" 
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        <div className="nav-item d-flex flex-column align-items-center justify-content-center">
          <House className="lucide-icon" /> Home
        </div>
      </NavLink>

      <NavLink 
        to="/notification" 
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        <div className="nav-item d-flex flex-column align-items-center justify-content-center">
          <Bell className="lucide-icon" /> Notifications
        </div>
      </NavLink>

      <NavLink 
        to="/userprofile" 
        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
      >
        <div className="nav-item d-flex flex-column align-items-center justify-content-center">
          <User className="lucide-icon" /> Profile
        </div>
      </NavLink>
    </nav>
  );
}

export default Floatingnav;