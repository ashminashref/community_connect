import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
// CHANGED: Now using lucide-react to match your other page
import { ArrowLeft, Save } from 'lucide-react'; 
import './TeamsManager.css'; 

const TeamsManager = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 

  // Mock data - In a real app, you would fetch this from an API or pass it via Context
  const allTeams = [
    {
      id: 1,
      name: 'Ramadan Iftar Committee',
      status: 'Active',
      category: 'Ifthar',
      description: 'Team responsible for organizing daily iftar during Ramadan.',
      date: '2024-03-10',
    },
    {
      id: 2,
      name: 'Eid Udhiya Team',
      status: 'Upcoming',
      category: 'Udhiyath',
      description: 'Team for Eid ul-Adha sacrifice distribution.',
      date: '2024-06-15',
    },
    {
      id: 3,
      name: 'Masjid Cleaning Crew',
      status: 'Active',
      category: 'Cleaning',
      description: 'Weekly cleaning and maintenance team.',
      date: '2024-01-01',
    }
  ];

  // State for the form data
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    date: '',
    status: 'Active'
  });

  // Find the specific team when the page loads
  useEffect(() => {
    if (id) {
      const teamToEdit = allTeams.find(t => t.id === parseInt(id));
      if (teamToEdit) {
        setFormData(teamToEdit);
      }
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // Logic to save to backend would go here
    console.log("Saved:", formData);
    navigate('/teams'); // Go back to the list
  };

  return (
    <div className="body-txt" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-color)', paddingBottom: '50px' }}>
      <Container className="pt-5">
        
        {/* Back Button */}
        <Button 
            variant="link" 
            className="text-decoration-none mb-3 p-0 d-flex align-items-center" 
            style={{ color: 'var(--text-secondary-color)' }}
            onClick={() => navigate('/teams')}
        >
            <ArrowLeft className="me-2" size={20} /> Back to Teams
        </Button>

        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-lg border-0" style={{ backgroundColor: 'var(--card-bg-secondary)', color: 'var(--text-primary-color)' }}>
              <Card.Header style={{ backgroundColor: 'var(--card-bg-primary)', color: 'var(--user-card-txt-primary)' }} className="py-3">
                <h4 className="m-0 curly-txt">Edit Team #{id}</h4>
              </Card.Header>
              
              <Card.Body className="p-4">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Team Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="name" 
                      value={formData.name || ''} 
                      onChange={handleInputChange} 
                      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary-color)', borderColor: 'var(--card-border)' }}
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Control 
                      type="text" 
                      name="category" 
                      value={formData.category || ''} 
                      onChange={handleInputChange}
                      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary-color)', borderColor: 'var(--card-border)' }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={4} 
                      name="description" 
                      value={formData.description || ''} 
                      onChange={handleInputChange}
                      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary-color)', borderColor: 'var(--card-border)' }}
                    />
                  </Form.Group>

                  <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Date</Form.Label>
                            <Form.Control 
                            type="date" 
                            name="date" 
                            value={formData.date || ''} 
                            onChange={handleInputChange}
                            style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary-color)', borderColor: 'var(--card-border)' }}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select 
                                name="status" 
                                value={formData.status || 'Active'} 
                                onChange={handleInputChange}
                                style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-primary-color)', borderColor: 'var(--card-border)' }}
                            >
                                <option value="Active">Active</option>
                                <option value="Upcoming">Upcoming</option>
                                <option value="Inactive">Inactive</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                  </Row>
                  
                  <div className="d-flex justify-content-end mt-4">
                    <Button variant="outline-secondary" className="me-2" onClick={() => navigate('/teams')}>
                        Cancel
                    </Button>
                    <Button 
                      style={{ backgroundColor: 'var(--btn-pay)', border: 'none', color: 'var(--user-card-txt-primary)' }} 
                      className="d-flex align-items-center"
                      onClick={handleSave}
                    >
                        <Save className="me-2" size={18} /> Save Changes
                    </Button>
                  </div>

                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeamsManager;