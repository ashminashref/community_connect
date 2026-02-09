import React from "react";
import { Card, Button } from "react-bootstrap";
import { Utensils, HeartPulse, GraduationCap, HandCoins } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../../Admin/Services/Service.css";
const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      name: "Food Service",
      desc: "Food support on special days & events",
      icon: <Utensils size={28} />,
      route: "foodservices",
    },
    {
      name: "Medical Support",
      desc: "Medical help for needy members",
      icon: <HeartPulse size={28} />,
      route: "medical",
    },
    {
      name: "Educational Classes",
      desc: "Special educational programs & classes",
      icon: <GraduationCap size={28} />,
      route: "education",
    },
    {
      name: "Personal Loan",
      desc: "Interest-free financial assistance",
      icon: <HandCoins size={28} />,
      route: "loan",
    },
  ];

  return (
    <div className="animate-fade-in">
      <h4 className="fw-bold mb-4 page-title">Services</h4>

      <div className="service-grid">
        {services.map((service, i) => (
          <Card
            key={i}
            className="service-box shadow-sm"
            onClick={() => navigate(service.route)}
          >
            <div className="service-icon">{service.icon}</div>

            <h6 className="fw-semibold">{service.name}</h6>
            <p className="text-muted small">{service.desc}</p>

            {/* ✅ FIXED BUTTON */}
            <Button
              size="sm"
              variant="dark"
              className="rounded-pill mt-auto manage-btn"
              onClick={(e) => {
                e.stopPropagation(); // prevents card click
                navigate(service.route);
              }}
            >
              Manage
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
