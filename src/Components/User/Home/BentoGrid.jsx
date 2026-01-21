import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Wallet, FileText, Users, Clock } from 'lucide-react';
import Card from '../../../UI/Card';
import './BentoGrid.css'
function BentoGrid() {
  return (
    <Container fluid className="px-0 py-4">
      <Row className="g-4"> 
        {/* Row 1: Two cards side-by-side on desktop, stacked on mobile */}
        <Col xs={12} md={6}>
          <Card
            title="Payments"
            icon={<Wallet size={20} />}
            subtitle="Manage contributions"
            items={[
              { name: "Monthly Contribution", amount: "₹500", status: "pending" },
              { name: "Madrassa Fee", amount: "₹300", status: "paid" }
            ]}
          />
        </Col>

        <Col xs={12} md={6}>
          <Card
            title="Certificates"
            icon={<FileText size={20} />}
            subtitle="Request & download"
            items={[
              { name: "Birth" }, 
              { name: "Marriage" }, 
              { name: "Death" }
            ]}
          />
        </Col>

        {/* Row 2: One card spanning the full width */}
        <Col xs={12} className='mb-5 pb-5'>
          <Card
            title="Community"
            icon={<Users size={20} />}
            subtitle="Events & prayer times"
            highlight={true}
            items={[
              { name: "Daily Duas", sub: "Supplications", showArrow: true },
              { name: "Friday Congregation", sub: "Tomorrow, 1:00 PM", icon: <Clock size={14}/> }
            ]}
            footer="Next: Maghrib 6:18 PM"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default BentoGrid;