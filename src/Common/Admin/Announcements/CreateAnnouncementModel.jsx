import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { ArrowLeft, Send } from "lucide-react";
import "../Announcements/CreateAnnouncement.css";

const AddAnnouncementPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    priority: "Low",
    status: "Draft",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Announcement Data:", formData);
    // Add logic to save to backend here
    navigate("/admin/announcements");
  };

  return (
    <div className="animate-fade-in container-fluid pb-5">
      {/* Header */}
      <div className="mb-4">
        <Button 
          variant="link" 
          className="text-dark p-0 d-flex align-items-center gap-2 mb-3 text-decoration-none"
          onClick={() => navigate("/admin/announcements")}
        >
          <ArrowLeft size={20} /> Back to Announcements
        </Button>
        <h4 className="fw-bold">Create New Announcement</h4>
      </div>

      <Card className="border-0 shadow-sm p-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="small fw-bold">Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter announcement title"
              className="custom-input"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="small fw-bold">Content</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your announcement details here..."
              className="custom-input"
              required
            />
          </Form.Group>

          <Row className="mb-4">
            <Col md={6}>
              <Form.Group>
                <Form.Label className="small fw-bold">Priority</Form.Label>
                <Form.Select 
                  name="priority" 
                  value={formData.priority} 
                  onChange={handleChange}
                  className="custom-input"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Form.Select>
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
                  <option value="Draft">Draft</option>
                  <option value="Published">Published</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex gap-3">
            <Button 
              variant="outline-secondary" 
              className="w-50 py-2 fw-bold" 
              onClick={() => navigate("/admin/announcements")}
            >
              Cancel
            </Button>
            <Button type="submit" variant="dark" className="w-50 py-2 fw-bold d-flex align-items-center justify-content-center gap-2">
              <Send size={18} /> Create Announcement
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default AddAnnouncementPage;