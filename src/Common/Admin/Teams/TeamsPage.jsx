import React from 'react';
import { Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { Plus, Edit2, Trash2, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Teams.css';

const teamsData = [
  {
    id: 1,
    name: "Ramadan Iftar Committee",
    category: "Ifthar",
    description: "Team responsible for organizing daily iftar during Ramadan.",
    date: "2024-03-10",
    membersCount: 3,
    initials: ["AH", "FK", "MA"],
    status: "active"
  },
  {
    id: 2,
    name: "Eid Udhiya Team",
    category: "Udhiyath",
    description: "Team for Eid ul-Adha sacrifice distribution.",
    date: "2024-06-15",
    membersCount: 2,
    initials: ["YI", "AB"],
    status: "upcoming"
  },
  {
    id: 3,
    name: "Masjid Cleaning Crew",
    category: "Cleaning",
    description: "Weekly cleaning and maintenance team.",
    date: "2024-01-01",
    membersCount: 3,
    initials: ["HM", "ZA", "OF"],
    status: "active"
  }
];

const TeamsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="team-icon-wrapper">
            <Users size={24} />
          </div>
          <div>
            <h4 className="fw-bold mb-0 page-title">Teams</h4>
            {/* RESOLVED: Kept the dynamic count and text-muted class */}
            <small className="text-muted">{teamsData.length} teams created</small>
          </div>
        </div>
        
        <Button 
          variant="dark" 
          className="btn-custom py-2 px-4 d-flex align-items-center gap-2"
          onClick={() => navigate("add")}
        >
          <Plus size={18} /> Create Team
        </Button>
      </div>

      {/* Grid Layout */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {teamsData.map((team) => (
          <Col key={team.id}>
            <Card className="team-card border-0 shadow-sm h-100 p-3">
              <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-1">
                  <h5 className="fw-bold team-name mb-0">{team.name}</h5>
                  <Badge className={`status-pill ${team.status}`}>
                    {team.status}
                  </Badge>
                </div>
                <p className=" small mb-3">{team.category}</p>
                
                <Card.Text className="description small mb-4 flex-grow-1">
                  {team.description}
                </Card.Text>

                <div className="d-flex align-items-center gap-2 date small mb-3">
                  <Calendar size={14} /> {team.date}
                </div>

                <div className="mb-4">
                  <div className="members-counr small mb-2">{team.membersCount} Members</div>
                  <div className="avatar-group d-flex">
                    {team.initials.map((init, idx) => (
                      <div key={idx} className="avatar-circle">{init}</div>
                    ))}
                  </div>
                </div>

                <div className="d-flex gap-2 mt-auto">
                  <Button variant="" className="btn-pill edit-btn flex-grow-1 d-flex align-items-center justify-content-center gap-2">
                    <Edit2 size={14} /> Edit
                  </Button>
                  <Button variant="outline-danger" className="rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <Trash2 size={16} />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TeamsPage;