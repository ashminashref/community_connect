import React from 'react'
import './Floatingnav.css'
import {House, User, Bell} from 'lucide-react'
function Floatingnav() {
  return (
    <div>
        <nav className="floating-nav">
        <div className="nav-item active d-flex flex-column align-items-center justify-content-center"><House className='lucide-icon' /> Home</div>
        <div className="nav-item d-flex flex-column align-items-center justify-content-center"><Bell className='lucide-icon' />Notifications</div>
        <div className="nav-item d-flex flex-column align-items-center justify-content-center"><User className='lucide-icon' />Profile</div>
      </nav>
    </div>
  )
}

export default Floatingnav