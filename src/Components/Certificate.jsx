import React, { useState, useRef } from 'react';
import { 
  ArrowLeft, Baby, Heart, GraduationCap, User, 
  Calendar, Upload, Hash, School 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../../src/Components/Certificate.css';

const CertificateRequest = () => {
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState('Birth');
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const certificateTypes = [
    { id: 'Birth', title: 'Birth Certificate', sub: 'For newborn registration', icon: <Baby size={20} /> },
    { id: 'Marriage', title: 'Marriage Certificate', sub: 'For nikah registration', icon: <Heart size={20} /> },
    { id: 'Education', title: 'Educational Certificate', sub: 'For school/madrassa records', icon: <GraduationCap size={20} /> },
  ];

  return (
    <div className="certificate-page-wrapper">
      <div className="certificate-content-container">

        {/* Header */}
        <header className="certificate-header">
          <button
            className="certificate-back-btn"
            onClick={() => navigate('/')}
          >
            <ArrowLeft size={20} />
          </button>

          <div className="certificate-header-text">
            <h1>Request Certificate</h1>
            <p>Submit your application</p>
          </div>
        </header>

        {/* Certificate Type */}
        <section className="certificate-section">
          <h2 className="certificate-section-label">Certificate Type</h2>
          <div className="certificate-type-list">
            {certificateTypes.map((type) => (
              <div
                key={type.id}
                className={`certificate-type-item ${selectedType === type.id ? 'active' : ''}`}
                onClick={() => setSelectedType(type.id)}
              >
                <div className="certificate-icon-box">
                  <div className="certificate-icon-inner">{type.icon}</div>
                </div>
                <div className="certificate-type-info">
                  <h3>{type.title}</h3>
                  <p>{type.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Form */}
        <section className="certificate-form-card">
          <div className="certificate-input-field">
            <label>Full Name</label>
            <div className="certificate-input-wrapper">
              <User size={18} className="certificate-field-icon" />
              <input type="text" placeholder="Enter full name" />
            </div>
          </div>

          <div className="certificate-row">
            <div className="certificate-input-field">
              <label>
                {selectedType === 'Marriage'
                  ? 'Date of Marriage'
                  : selectedType === 'Education'
                  ? 'Date of Admission'
                  : 'Date of Birth'}
              </label>
              <div className="certificate-input-wrapper">
                <Calendar size={18} className="certificate-field-icon" />
                <input type="date" />
              </div>
            </div>

            {selectedType === 'Education' && (
              <div className="certificate-input-field">
                <label>Admission / Reg No.</label>
                <div className="certificate-input-wrapper">
                  <Hash size={18} className="certificate-field-icon" />
                  <input type="text" placeholder="Registration number" />
                </div>
              </div>
            )}
          </div>

          {selectedType === 'Education' && (
            <div className="certificate-input-field">
              <label>Institution Name</label>
              <div className="certificate-input-wrapper">
                <School size={18} className="certificate-field-icon" />
                <input type="text" placeholder="School / Madrassa name" />
              </div>
            </div>
          )}

          <div className="certificate-row">
            <div className="certificate-input-field">
              <label>Father's Name</label>
              <div className="certificate-input-wrapper no-icon">
                <input type="text" placeholder="Father's name" />
              </div>
            </div>

            <div className="certificate-input-field">
              <label>Mother's Name</label>
              <div className="certificate-input-wrapper no-icon">
                <input type="text" placeholder="Mother's name" />
              </div>
            </div>
          </div>

          <div className="certificate-input-field">
            <label>Address</label>
            <div className="certificate-input-wrapper no-icon">
              <input type="text" placeholder="Permanent address" />
            </div>
          </div>
        </section>

        {/* Upload Section */}
        <section className="certificate-form-card">
          <h2 className="certificate-section-label">Supporting Documents</h2>

          <div
            className="certificate-upload-zone"
            onClick={() => fileInputRef.current.click()}
          >
            <Upload size={24} color="#6b7280" />
            <p>
              {selectedFile
                ? `Selected file: ${selectedFile.name}`
                : <>Drop document here or <span>click to upload</span></>}
            </p>
          </div>

          {/* Hidden File Input */}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
        </section>

        {/* Submit */}
        <button className="certificate-submit-btn">
          Submit Request
        </button>

      </div>
    </div>
  );
};

export default CertificateRequest;
