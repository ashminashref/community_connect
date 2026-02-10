import React from 'react';
import { Button, Card, Table, Badge, Form, InputGroup } from 'react-bootstrap';
import { Plus, Edit2, Trash2, Search, Mail, Phone, User as UserIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import './Users.css';

const usersData = [
  {
    id: 1,
    name: "Ahmed Hassan",
    initials: "AH",
    email: "ahmed@example.com",
    phone: "+91 9876543210",
    role: "admin",
    status: "active",
    joined: "2024-01-01"
  },
  {
    id: 2,
    name: "Fatima Khan",
    initials: "FK",
    email: "fatima@example.com",
    phone: "+91 9876543211",
    role: "member",
    status: "active",
    joined: "2024-01-05"
  },
  {
    id: 3,
    name: "Mohammed Ali",
    initials: "MA",
    email: "mohammed@example.com",
    phone: "+91 9876543212",
    role: "volunteer",
    status: "active",
    joined: "2024-01-10"
  }
];

const UsersPage = () => {
  const navigate = useNavigate(); // 2. Initialize navigate

  return (
    <div className="animate-fade-in">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-3">
          <div className="user-icon-wrapper">
            <UserIcon size={24} />
          </div>
          <div>
            <h4 className="fw-bold mb-0">Users</h4>
            <small className="text-muted">4 registered users</small>
          </div>
        </div>

        {/* 3. Added onClick to navigate to the 'add' sub-route */}
        <Button 
          variant="dark" 
          className="d-flex align-items-center gap-2 rounded-pill px-4"
          onClick={() => navigate("add")}
        >
          <Plus size={18} /> Add User
        </Button>
      </div>

      {/* Search */}
      <InputGroup className="mb-4 search-input-group">
        <InputGroup.Text className="bg-white border-end-0">
          <Search size={18} className="text-muted" />
        </InputGroup.Text>
        <Form.Control 
          placeholder="Search users by name or email..." 
          className="border-start-0 ps-0"
        />
      </InputGroup>

      {/* Table */}
      <Card className="border-0 shadow-sm overflow-hidden" style={{ borderRadius: '15px' }}>
        <div className="table-responsive">
          <Table hover className="align-middle mb-0 custom-table">
            <thead className="bg-light">
              <tr>
                <th className="ps-4">User</th>
                <th>Contact</th>
                <th>Role</th>
                <th className="text-center">Status</th>
                <th>Joined</th>
                <th className="pe-4 text-end">Actions</th>
              </tr>
            </thead>

            <tbody>
              {usersData.map(user => (
                <tr key={user.id}>
                  <td className="ps-4">
                    <div className="d-flex align-items-center gap-3">
                      <div className="user-avatar-circle">{user.initials}</div>
                      <span className="fw-semibold">{user.name}</span>
                    </div>
                  </td>

                  <td>
                    <div className="small text-muted d-flex align-items-center gap-1">
                      <Mail size={12} /> {user.email}
                    </div>
                    <div className="small text-muted d-flex align-items-center gap-1">
                      <Phone size={12} /> {user.phone}
                    </div>
                  </td>

                  <td>
                    <Badge className={`role-badge ${user.role} text-capitalize`}>
                      {user.role}
                    </Badge>
                  </td>

                  <td className="text-center">
                    <Badge bg="none" className={`status-pill ${user.status === 'active' ? 'approved' : 'rejected'}`}>
                      {user.status}
                    </Badge>
                  </td>

                  <td className="small text-muted">{user.joined}</td>

                  <td className="pe-4 text-end">
                    <Button variant="link" className="p-1 text-dark me-2 action-btn">
                      <Edit2 size={18} />
                    </Button>
                    <Button variant="link" className="p-1 text-danger action-btn">
                      <Trash2 size={18} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default UsersPage;