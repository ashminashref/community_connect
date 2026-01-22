import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, CreditCard, Settings, Moon, HelpCircle, ChevronRight, LogOut } from 'lucide-react';
import Usercard from '../../Components/User/Home/Usercard';

const SettingRow = ({ icon: Icon, title, subtitle, linkTo, isLast }) => (
  <Link to={linkTo} className="text-decoration-none text-dark">
    <div className={`d-flex align-items-center justify-content-between py-3 ${!isLast ? 'border-bottom' : ''}`}>
      <div className="d-flex align-items-center gap-3">
        <div className="bg-light p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }}>
          <Icon size={20} className="text-secondary" />
        </div>
        <div>
          <h6 className="mb-0 fw-bold" style={{ fontSize: '0.95rem' }}>{title}</h6>
          <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>{subtitle}</p>
        </div>
      </div>
      <ChevronRight size={18} className="text-muted" />
    </div>
  </Link>
);

function Profile() {
  return (
    <div className="container pb-5" style={{ maxWidth: '500px' }}>
      <Usercard />

      <div className="bg-white rounded-4 shadow-sm p-3 mt-3">
        <SettingRow 
          icon={FileText} 
          title="My Documents" 
          subtitle="View all certificates" 
          linkTo="/documents" 
        />
        {/* ... other rows ... */}
        <SettingRow 
          icon={HelpCircle} 
          title="Help & Support" 
          subtitle="FAQs & contact" 
          linkTo="/support"
          isLast={true} 
        />

        <SettingRow 
          icon={HelpCircle} 
          title="Help & Support" 
          subtitle="FAQs & contact" 
          linkTo="/support"
          isLast={true} 
        />

        <SettingRow 
          icon={HelpCircle} 
          title="Help & Support" 
          subtitle="FAQs & contact" 
          linkTo="/support"
          isLast={true} 
        />
      </div>

      <button 
        className="btn w-100 mt-4 py-3 rounded-4 d-flex align-items-center justify-content-center gap-2 border-0" 
        style={{ backgroundColor: '#fee2e2', color: '#dc2626' }}
      >
        <LogOut size={20} />
        <span className="fw-bold">Sign Out</span>
      </button>
    </div>
  );
}

export default Profile;