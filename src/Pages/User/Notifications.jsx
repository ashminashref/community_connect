import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Button, ListGroup, Badge } from 'react-bootstrap';
import { ArrowLeft, Bell } from 'lucide-react';
import './Notification.css'
import Floatingnav from '../../Common/User/FloatingNav';

function NotificationPayment() {
  const navigate = useNavigate();

  // Mock notifications from admin
  const notifications = [
    {
      id: 1,
      title: "Monthly Contribution Reminder",
      message: "Please pay your ₹500 monthly mahal contribution before 10th.",
      date: "24 Jan 2026",
      status: "pending"
    },
    {
      id: 2,
      title: "Payment Received",
      message: "Your cash payment of ₹1000 has been successfully updated by admin.",
      date: "20 Jan 2026",
      status: "paid"
    }
  ];

  return (
    <Container className="py-4">

      {/* Header */}
      <div className="d-flex align-items-center mb-4">
        <Button
          variant="light"
          className="me-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={18} />
        </Button>
        <h5 className="mb-0 d-flex align-items-center">
          <Bell size={18} className="me-2" />
          Payment Notifications
        </h5>
      </div>

      {/* Notifications */}
      {notifications.map((note) => (
        <Card key={note.id} className="mb-3 shadow-sm">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <Card.Title className="fs-6 mb-1">
                {note.title}
              </Card.Title>
              <Badge bg={note.status === 'paid' ? 'success' : 'warning'}>
                {note.status}
              </Badge>
            </div>

            <Card.Text className="text-muted mt-2">
              {note.message}
            </Card.Text>

            <small className="text-secondary">
              {note.date}
            </small>
          </Card.Body>
        </Card>
      ))}

     
<Floatingnav/>
    </Container>
  );
}

export default NotificationPayment;
