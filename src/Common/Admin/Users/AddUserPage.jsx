import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../Users/AddUserPage.css";

const AddUserPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "Member",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data Submitted:", formData);
    alert("User added successfully!");
    navigate("/admin/users");
  };

  return (
    <div className="animate-fade-in add-user-page">
      <div className="add-user-container">
        
        {/* Header */}
        <div className="add-user-header">
          <Button
            variant="link"
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={22} />
          </Button>
          <h4 className="add-user-title">Add New User</h4>
        </div>

        {/* Form Card */}
        <Card className="add-user-card">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Role</Form.Label>
                    <Form.Select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                    >
                      <option>Member</option>
                      <option>Admin</option>
                      <option>Moderator</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Status</Form.Label>
                    <Form.Select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                    >
                      <option>Active</option>
                      <option>Inactive</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Button type="submit" className="add-user-btn w-100">
                Add User
              </Button>
            </Form>
          </Card.Body>
        </Card>

      </div>
    </div>
  );
};

export default AddUserPage;
