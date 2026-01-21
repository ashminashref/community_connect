import React from 'react';
import { Hash, Users } from 'lucide-react';
import './Usercard.css';

function Usercard() {
  return (
    <div className='mahal-card mt-4'>
      {/* Decorative Background Pattern */}
      <div className="card-pattern"></div>
      
      <div className="card-content">
        <p className="card-label">MAHAL IDENTITY</p>
        
        <h2 className="card-holder-name curly-txt">Ahmad Khan</h2>
        
        <div className="card-footer-info">
          {/* Mahal ID Section */}
          <div className="info-group">
            <div className="info-icon">
              <Hash size={24} strokeWidth={1.5} />
            </div>
            <div className="info-text">
              <span className="info-label">Mahal ID</span>
              <span className="info-value">786-AX</span>
            </div>
          </div>

          {/* Family Head Section */}
          <div className="info-group">
            <div className="info-icon">
              <Users size={24} strokeWidth={1.5} />
            </div>
            <div className="info-text">
              <span className="info-label">Family Head</span>
              <span className="info-value">Mohammed Khan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usercard;