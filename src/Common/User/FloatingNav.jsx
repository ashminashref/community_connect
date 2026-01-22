import React from "react";
import "./FloatingNav.css";
import { House, User, Bell } from "lucide-react";
import { Link } from "react-router-dom";
function Floatingnav() {
  return (
    <div>
      <nav className="floating-nav">
        <Link to=''>
          {" "}
          <div className="nav-item active d-flex flex-column align-items-center justify-content-center">
            <House className="lucide-icon" /> Home
          </div>
        </Link>

        <Link to = 'notification'>
        <div className="nav-item d-flex flex-column align-items-center justify-content-center">
          <Bell className="lucide-icon" />
          Notifications
        </div>
        </Link>
        
        <Link to = 'userprofile'>
        <div className="nav-item d-flex flex-column align-items-center justify-content-center">
          <User className="lucide-icon" />
          Profile
        </div>
        </Link>
        
      </nav>
    </div>
  );
}

export default Floatingnav;
