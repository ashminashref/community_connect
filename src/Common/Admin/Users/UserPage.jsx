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

        <Button variant="dark" className="d-flex align-items-center gap-2">
          <Plus size={18} /> Add User
        </Button>
      </div>

      {/* Search */}
      <InputGroup className="mb-4">
        <InputGroup.Text>
          <Search size={18} />
        </InputGroup.Text>
        <Form.Control placeholder="Search users..." />
      </InputGroup>

      {/* Table */}
      <Card className="border-0 shadow-sm">
        <Table hover className="align-middle mb-0">
          <thead>
            <tr>
              <th>User</th>
              <th>Contact</th>
              <th>Role</th>
              <th className="text-center">Status</th>
              <th>Joined</th>
              <th className="text-end">Actions</th>
            </tr>
          </thead>

          <tbody>
            {usersData.map(user => (
              <tr key={user.id}>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <div className="user-avatar">{user.initials}</div>
                    <strong>{user.name}</strong>
                  </div>
                </td>

                <td>
                  <div className="small text-muted"><Mail size={14} /> {user.email}</div>
                  <div className="small text-muted"><Phone size={14} /> {user.phone}</div>
                </td>

                <td>
                  <Badge className={`role-badge ${user.role}`}>
                    {user.role}
                  </Badge>
                </td>

                <td className="text-center">
                  {/* ✅ FIXED BADGE */}
                  <Badge bg="none" className="status-badge-active">
                    {user.status}
                  </Badge>
                </td>

                <td className="small text-muted">{user.joined}</td>

                <td className="text-end">
                  <Button variant="link" className="p-1 text-dark">
                    <Edit2 size={18} />
                  </Button>
                  <Button variant="link" className="p-1 text-danger">
                    <Trash2 size={18} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default UsersPage;
