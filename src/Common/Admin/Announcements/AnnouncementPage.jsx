import React from 'react';
import { Button, Card, Table, Badge } from 'react-bootstrap';
import { Plus, Edit2, Trash2, Calendar, Bell } from 'lucide-react';
import './Announcements.css';

const announcementsData = [
  {
    id: 1,
    title: "Ramadan Prayer Schedule",
    subtitle: "Updated prayer times for the holy month of Ramadan.",
    priority: "high",
    status: "published",
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Community Iftar Event",
    subtitle: "Join us for community iftar every Friday.",
    priority: "medium",
    status: "published",
    date: "2024-01-14"
  },
  {
    id: 3,
    title: "Maintenance Notice",
    subtitle: "Masjid maintenance scheduled for next week.",
    priority: "low",
    status: "draft",
    date: "2024-01-13"
  }
];

const AnnouncementsPage = () => {
  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="announcement-icon-wrapper">
            <Bell size={24} />
          </div>
          <div>
            <h4 className="fw-bold mb-0 page-title">Announcements</h4>
            <small className="text-muted">3 total announcements text Coming repad.05</small>
          </div>
        </div>
        <Button variant="dark" className="btn-custom py-2 px-4 d-flex align-items-center justify-content-center gap-2">
          <Plus size={18} /> New Announcement
        </Button>
      </div>

      {/* Table Card */}
      <Card className="announcement-card border-0 shadow-sm overflow-hidden">
        <div className="table-responsive">
          <Table hover className="align-middle mb-0 custom-table">
            <thead>
              <tr>
                <th className="ps-4 py-3">Title</th>
                <th className="py-3">Priority</th>
                <th className="py-3 text-center">Status</th>
                <th className="py-3">Date</th>
                <th className="py-3 text-end pe-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {announcementsData.map((item) => (
                <tr key={item.id}>
                  <td className="ps-4 py-4">
                    <div className="fw-bold mb-0 title-text">{item.title}</div>
                    <div className="text-muted small subtitle-text">{item.subtitle}</div>
                  </td>
                  <td>
                    <Badge className={`priority-badge ${item.priority}`}>
                      {item.priority}
                    </Badge>
                  </td>
                  <td className="text-center">
                    <Badge className={`status-badge ${item.status}`}>
                      {item.status}
                    </Badge>
                  </td>
                  <td className="text-muted small">
                    <div className="d-flex align-items-center gap-2">
                      <Calendar size={14} /> {item.date}
                    </div>
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

export default AnnouncementsPage;