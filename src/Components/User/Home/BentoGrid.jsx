import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  Wallet,
  FileText,
  Users,
  Clock,
  Briefcase,
  Users2,
  Book
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Card from '../../../UI/Card';
import './BentoGrid.css';

function BentoGrid() {
  const navigate = useNavigate();

  return (
    <Container fluid className="px-0 py-4">
      <Row className="g-4">

        {/* Payments */}
        <Col xs={12} md={6}>
          <Card
            title="Payments"
            icon={<Wallet size={20} />}
            subtitle="Manage contributions"
            items={[
              {
                name: "Monthly Contribution",
                amount: "₹500",
                status: "pending",
                onClick: () => navigate('/payment')
              },
              {
                name: "Madrassa Fee",
                amount: "₹300",
                status: "paid",
                onClick: () => navigate('/payment')
              }
            ]}
          />
        </Col>

        {/* Certificates */}
        <Col xs={12} md={6}>
          <Card
            title="Certificates"
            icon={<FileText size={20} />}
            subtitle="Request & download"
            items={[
              { name: "Birth", showArrow: true, onClick: () => navigate('/certificate') },
              { name: "Marriage", showArrow: true, onClick: () => navigate('/certificate') },
              { name: "Education", showArrow: true, onClick: () => navigate('/certificate') }
            ]}
          />
        </Col>

        {/* Services */}
        <Col xs={12} md={6}>
          <Card
            title="Services"
            icon={<Briefcase size={20} />}
            subtitle="Available services"
            items={[
              { name: "Food Service", showArrow: true, onClick: () => navigate('/services/food') },
              { name: "Medicine Support", showArrow: true, onClick: () => navigate('/services/medicine') },
              { name: "Educational Support", showArrow: true, onClick: () => navigate('/services/education') },
              { name: "Personal Loan", showArrow: true, onClick: () => navigate('/services/loan') }
            ]}
          />
        </Col>

        {/* Teams */}
        <Col xs={12} md={6}>
          <Card
            title="Teams"
            icon={<Users2 size={20} />}
            subtitle="Our volunteers"
            items={[
              { name: "Iftar Team", showArrow: true, onClick: () => navigate('/teams/iftar') },
              { name: "Uluhiyath Team", showArrow: true, onClick: () => navigate('/teams/uluhiyath') },
              { name: "Cleaning Team", showArrow: true, onClick: () => navigate('/teams/cleaning') },
              { name: "Programming Team", showArrow: true, onClick: () => navigate('/teams/programming') }
            ]}
          />
        </Col>

        {/* Library */}
        <Col xs={12} md={6}>
          <Card
            title="Library"
            icon={<Book size={20} />}
            subtitle="Books & resources"
            items={[
              { name: "Islamic Books", showArrow: true, onClick: () => navigate('/library') },
              { name: "Audio Lectures", showArrow: true, onClick: () => navigate('/library') }
            ]}
          />
        </Col>

        {/* Community */}
        <Col xs={12} className="mb-5 pb-5">
          <Card
            title="Community"
            icon={<Users size={20} />}
            subtitle="Events & prayer times"
            highlight={true}
            items={[
              {
                name: "Daily Duas",
                sub: "Supplications",
                showArrow: true,
                onClick: () => navigate('/typedua')
              },
              {
                name: "Friday Congregation",
                sub: "Tomorrow, 1:00 PM",
                icon: <Clock size={14} />
              }
            ]}
            footer="Next: Maghrib 6:18 PM"
          />
        </Col>

      </Row>
    </Container>
  );
}

export default BentoGrid;
