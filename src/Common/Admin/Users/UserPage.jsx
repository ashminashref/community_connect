import React from 'react';
import { Button, Card, Table, Badge, Form, InputGroup } from 'react-bootstrap';
import { Plus, Edit2, Trash2, Search, Mail, Phone, User as UserIcon } from 'lucide-react';
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
  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="user-icon-wrapper">
            <UserIcon size={24} />
          </div>
          <div>
            <h4 className="fw-bold mb-0 page-title">Users</h4>
            <small className="text-muted">4 registered users</small>
          </div>
        </div>
        <Button variant="dark" className="btn-custom py-2 px-4 d-flex align-items-center justify-content-center gap-2">
          <Plus size={18} /> Add User
        </Button>
      </div>

      {/* Search Bar */}
      <InputGroup className="mb-4 search-input-group">
        <InputGroup.Text className="bg-white border-end-0 rounded-start-pill">
          <Search size={18} className="text-muted" />
        </InputGroup.Text>
        <Form.Control
          placeholder="Search users by name or email..."
          className="border-start-0 rounded-end-pill py-2"
        />
      </InputGroup>

      {/* Users Table Card */}
      <Card className="user-card border-0 shadow-sm overflow-hidden">
        <div className="table-responsive">
          <Table hover className="align-middle mb-0 custom-table">
            <thead>
              <tr>
                <th className="ps-4 py-3">User</th>
                <th className="py-3">Contact</th>
                <th className="py-3">Role</th>
                <th className="py-3 text-center">Status</th>
                <th className="py-3">Joined</th>
                <th className="py-3 text-end pe-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user) => (
                <tr key={user.id}>
                  <td className="ps-4 py-4">
                    <div className="d-flex align-items-center gap-3">
                      <div className="user-avatar">{user.initials}</div>
                      <span className="fw-bold title-text">{user.name}</span>
                    </div>
                  </td>
                  <td>
                    <div className="text-muted small d-flex align-items-center gap-2 mb-1">
                      <Mail size={14} /> {user.email}
                    </div>
                    <div className="text-muted small d-flex align-items-center gap-2">
                      <Phone size={14} /> {user.phone}
                    </div>
                  </td>
                  <td>
                    <Badge className={`role-badge ${user.role}`}>
                      {user.role}
                    </Badge>
                  </td>
                  <td className="text-center">
                    <Badge className="status-badge-active">
                      {user.status}
                    </Badge>
                  </td>
                  <td className="text-muted small">
                    {user.joined}
                  </td>
                  <td className="text-end pe-4">
                    <div className="d-flex justify-content-end gap-2">
                      <Button variant="link" className="p-1 text-dark action-btn">
                        <Edit2 size={18} />
                      </Button>
                      <Button variant="link" className="p-1 text-danger action-btn">
                        <Trash2 size={18} />
                      </Button>
                    </div>
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