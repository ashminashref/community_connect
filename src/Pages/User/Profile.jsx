import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, CreditCard, Moon, HelpCircle, ChevronRight, LogOut } from 'lucide-react';
import Usercard from '../../Components/User/Home/Usercard';
import Floatingnav from '../../Common/User/FloatingNav';
import ThemeToggle from '../../UI/ThemeToggle';
import { useTheme } from '../../Theme/UseTheme';
import './Profile.css'
/**
 * Dynamically renders either a Link (for navigation) or a Div (for actions like Toggles)
 */
const SettingRow = ({ icon: Icon, title, subtitle, linkTo, action, isLast }) => {
  const content = (
    <div className={`d-flex align-items-center justify-content-between py-4 ${!isLast ? 'border-bottom' : ''}`}>
      <div className="d-flex align-items-center gap-3">
        <div className="icon-box d-flex align-items-center justify-content-center rounded-3" style={{ width: '42px', height: '42px' }}>
          <Icon size={20} className="Link-icon" />
        </div>
        <div>
          <h6 className="mb-0 fw-semibold" style={{ fontSize: '1.05rem' }}>{title}</h6>
          <p className="mb-0 link-p " style={{ fontSize: '0.8rem' }}>{subtitle}</p>
        </div>
      </div>
      
      {/* If there is an action (toggle), show it. Otherwise show the arrow. */}
      <div>
        {action ? action : <ChevronRight size={18} className="" />}
      </div>
    </div>
  );

  // If linkTo exists and there's no action, wrap in Link. Otherwise, return a div.
  if (linkTo && !action) {
    return (
      <Link to={linkTo} className="Link-txt">
        {content}
      </Link>
    );
  }

  return <div className="">{content}</div>;
};

function Profile() {
  const { theme } = useTheme();

  return (
    <div className="container pb-5 mb-5">
      {/* Top User Profile Card */}
      <Usercard />

      {/* Settings List Section */}
      <div className="settings-card rounded-4 shadow-sm p-3 mt-3">
        <SettingRow 
          icon={FileText} 
          title="My Documents" 
          subtitle="View all certificates" 
          linkTo="/documents" 
        />
        
        <SettingRow 
          icon={CreditCard} 
          title="Payment History" 
          subtitle="Track contributions" 
          linkTo="/payments"
        />

        <SettingRow 
          icon={Moon} 
          title="Dark Mode" 
          subtitle={theme === 'dark' ? 'Currently Dark' : 'Currently Light'}
          action={<ThemeToggle />} // The toggle component we built
        />

        <SettingRow 
          icon={HelpCircle} 
          title="Help & Support" 
          subtitle="FAQs & contact" 
          linkTo="/support"
          isLast={true} 
        />
      </div>

      {/* Sign Out Action */}
      <button 
        className="btn w-100 mt-4 py-3 rounded-4 d-flex align-items-center justify-content-center gap-2 border-0 shadow-sm" 
        style={{ backgroundColor: '#fee2e2', color: '#dc2626' }}
      >
        <LogOut size={20} />
        <span className="fw-bold">Sign Out</span>
      </button>

      {/* Persistent Bottom Nav */}
      <Floatingnav />
    </div>
  );
}

export default Profile;