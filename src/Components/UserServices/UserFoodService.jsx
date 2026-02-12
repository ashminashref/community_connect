import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserFoodService.css';
import { Utensils, User, Users, ArrowLeft } from 'lucide-react';
import Floatingnav from '../../Common/User/FloatingNav';

const FoodServiceUserPage = () => {
  const navigate = useNavigate();

  const foodServices = [
    {
      id: 1,
      event: "Ramadan Iftar",
      foodName: "Chicken Biriyani & Dates",
      provider: "Ahmed & Family",
      date: "2024-04-10",
      members: ["Hanna Fathima", "Zayan Ali", "Omar Farooq", "Sara Khan", "Ibrahim"]
    },
    {
      id: 2,
      event: "Milad Un Nabi",
      foodName: "Veg Rice & Sweet",
      provider: "Mahal Food Committee",
      date: "2024-09-16",
      members: ["Yusuf", "Aisha", "Hamza", "Mariyam"]
    }
  ];

  return (
    <div className="user-page-container">

      {/* Header */}
      <header className="header-section">
        <div className="header-row">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
          </button>

          <div>
            <h1>Community Food Services</h1>
            <p>Current food distributions and participant lists.</p>
          </div>
        </div>
      </header>

      {/* Cards */}
      <div className="services-grid">
        {foodServices.map((service) => (
          <div key={service.id} className="food-card">

            <div className="food-card-header">
              <span className="status-badge">Active</span>
              <span className="date-text">{service.date}</span>
            </div>

            <h2 className="event-title">{service.event}</h2>

            <div className="info-section">
              <div className="info-row">
                <Utensils size={18} />
                <span>
                  <span className="info-label">Menu:</span> {service.foodName}
                </span>
              </div>

              <div className="info-row">
                <User size={18} />
                <span>
                  <span className="info-label">Provider:</span> {service.provider}
                </span>
              </div>
            </div>

            <div className="members-section">
              <h3 className="members-title">
                <Users size={16} />
                Participants ({service.members.length})
              </h3>

              <div className="members-list">
                {service.members.map((name, index) => (
                  <span key={index} className="member-chip">
                    {name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      <Floatingnav />
    </div>
  );
};

export default FoodServiceUserPage;
