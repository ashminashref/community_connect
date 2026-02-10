import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { X, UserPlus, Trash2 } from 'lucide-react';
import '../Teams/CreateTeam.css';

const AddTeamModal = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    teamName: '',
    occasion: 'Eid Celebrations',
    description: '',
    date: '',
    status: 'Upcoming',
    members: [{ name: '', role: '' }]
  });

  // Handle normal input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle member change
  const handleMemberChange = (index, field, value) => {
    const members = [...formData.members];
    members[index][field] = value;
    setFormData({ ...formData, members });
  };

  // Add new member
  const addMemberField = () => {
    setFormData({
      ...formData,
      members: [...formData.members, { name: '', role: '' }]
    });
  };

  // Remove member
  const removeMember = (index) => {
    const members = formData.members.filter((_, i) => i !== index);
    setFormData({ ...formData, members });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Team Data:', formData);

    // TODO: send data to backend (axios/fetch)

    onHide(); // close modal
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg" contentClassName="custom-modal">
      <Modal.Header className="border-0 pb-0">
        <Modal.Title className="fw-bold fs-5">Create New Team</Modal.Title>
        <Button variant="link" onClick={onHide} className="ms-auto text-dark p-0">
          <X size={20} />
        </Button>
      </Modal.Header>

      <Modal.Body className="pt-4">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label className="small fw-bold">Team Name</Form.Label>
                <Form.Control
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  placeholder="Enter team name"
                  className="custom-input"
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label className="small fw-bold">Occasion</Form.Label>
                <Form.Select
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  className="custom-input"
                >
                  <option>Iftar</option>
                  <option>Udhiya/Qurbani</option>
                  <option>Cleaning</option>
                  <option>Programming</option>
                  <option>Education</option>
                  <option>Food Distribution</option>
                  <option>Medicine Aid</option>
                  <option>Eid Celebrations</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label className="small fw-bold">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="custom-input"
            />
          </Form.Group>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label className="small fw-bold">Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="custom-input"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label className="small fw-bold">Status</Form.Label>
                <Form.Select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="custom-input"
                >
                  <option>Upcoming</option>
                  <option>Active</option>
                  <option>Completed</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Label className="small fw-bold">Team Members</Form.Label>
          {formData.members.map((member, index) => (
            <Row key={index} className="mb-2 align-items-center">
              <Col md={5}>
                <Form.Control
                  placeholder="Member name"
                  value={member.name}
                  onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                  className="custom-input"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  placeholder="Role"
                  value={member.role}
                  onChange={(e) => handleMemberChange(index, 'role', e.target.value)}
                  className="custom-input"
                />
              </Col>
              <Col md={3} className="d-flex gap-2">
                <Button variant="outline-dark" onClick={addMemberField}>
                  <UserPlus size={16} />
                </Button>
                {formData.members.length > 1 && (
                  <Button variant="outline-danger" onClick={() => removeMember(index)}>
                    <Trash2 size={16} />
                  </Button>
                )}
              </Col>
            </Row>
          ))}

          <Button type="submit" variant="dark" className="w-100 mt-4 py-2">
            Create Team
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddTeamModal;
