import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { ArrowLeft, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import '../Users/AddUserPage.css'

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
    // Add your API call logic here (e.g., Axios post to your Python backend)
    alert("User added successfully!");
    navigate("/admin/users");
  };

  return (
    <div className="animate-fade-in p-4">
      {/* Header with Back Button */}
      <div className="d-flex align-items-center mb-4">
        <Button 
          variant="link" 
          className="text-dark p-0 me-3" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={24} />
        </Button>
        <h4 className="fw-bold mb-0">Add New User</h4>
      </div>

      <Card className="border-0 shadow-sm mx-auto" style={{ maxWidth: "600px", borderRadius: "15px" }}>
        <Card.Body className="p-4">
          <Form onSubmit={handleSubmit}>
            {/* Full Name */}
            <Form.Group className="mb-3">
              <Form.Label className="fw-medium">Full Name</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Enter full name"
                className="py-2 border-secondary-subtle"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3">
              <Form.Label className="fw-medium">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email address"
                className="py-2 border-secondary-subtle"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Phone */}
            <Form.Group className="mb-3">
              <Form.Label className="fw-medium">Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                className="py-2 border-secondary-subtle"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Row>
              {/* Role */}
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium">Role</Form.Label>
                  <Form.Select 
                    name="role" 
                    className="py-2 border-secondary-subtle"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <option value="Member">Member</option>
                    <option value="Admin">Admin</option>
                    <option value="Moderator">Moderator</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              {/* Status */}
              <Col md={6}>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium">Status</Form.Label>
                  <Form.Select 
                    name="status" 
                    className="py-2 border-secondary-subtle"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            {/* Submit Button */}
            <Button
              variant="dark"
              type="submit"
              className="w-100 py-2 fw-bold"
              style={{ backgroundColor: "#1a2e1a", border: "none" }}
            >
              Add User
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddUserPage;