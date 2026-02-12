import React, { useState, useMemo } from 'react';
import { Card, Table, Badge, Button, Form, Row, Col } from 'react-bootstrap';
import { FileText, Check, X, Eye } from 'lucide-react';
import './Certificates.css';

const initialRequests = [
  { id: "CR-001", applicant: "Ahmad Khan", applicantId: "786-AX", type: "birth", date: "1/15/2024", status: "pending" },
  { id: "CR-002", applicant: "Mohammed Ali", applicantId: "452-BX", type: "marriage", date: "1/12/2024", status: "pending" },
  { id: "CR-003", applicant: "Rashid Patel", applicantId: "123-CX", type: "death", date: "1/10/2024", status: "approved" },
  { id: "CR-004", applicant: "Salim Sheikh", applicantId: "789-DX", type: "birth", date: "1/8/2024", status: "rejected" },
];

const CertificatesPage = () => {
  const [requests, setRequests] = useState(initialRequests);
  const [filterStatus, setFilterStatus] = useState("All"); // State for filtering

  // 1. Logic to filter the list based on selection
  const filteredRequests = useMemo(() => {
    if (filterStatus === "All") return requests;
    return requests.filter(req => req.status.toLowerCase() === filterStatus.toLowerCase());
  }, [requests, filterStatus]);

  const handleUpdateStatus = (id, newStatus) => {
    setRequests(prev => prev.map(req => 
      req.id === id ? { ...req, status: newStatus } : req
    ));
  };

  const pendingCount = requests.filter(req => req.status === 'pending').length;

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="cert-icon-wrapper">
            <FileText size={24} />
          </div>
          <div>
            <h4 className="fw-bold mb-0 page-title">Certificate Requests</h4>
            <small className="text-muted">{pendingCount} requests needing attention</small>
          </div>
        </div>

        {/* 2. Filter Dropdown */}
        <div style={{ minWidth: '200px' }}>
          <Form.Select 
            className="rounded-pill border-0 shadow-sm py-2 px-4"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Requests</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </Form.Select>
        </div>
      </div>

      {/* Requests Table Card */}
      <Card className="cert-card border-0 shadow-sm overflow-hidden">
        <div className="table-responsive no-scrollbar">
          <Table hover className="align-middle mb-0 custom-table">
            <thead>
              <tr>
                <th className="ps-4 py-3">Request ID</th>
                <th className="py-3">Applicant</th>
                <th className="py-3">Type</th>
                <th className="py-3">Date</th>
                <th className="py-3">Status</th>
                <th className="py-3 text-end pe-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.length > 0 ? (
                filteredRequests.map((req) => (
                  <tr key={req.id}>
                    <td className="ps-4 py-4 fw-bold small text-secondary">{req.id}</td>
                    <td>
                      <div className="fw-bold title-text">{req.applicant}</div>
                      <div className="app-id smallest text-muted">{req.applicantId}</div>
                    </td>
                    <td>
                      <Badge className="cert-type-badge text-capitalize">{req.type}</Badge>
                    </td>
                    <td className="date small">{req.date}</td>
                    <td>
                      <Badge className={`status-pill ${req.status}`}>
                        {req.status}
                      </Badge>
                    </td>
                    <td className="text-end pe-4">
                      <div className="d-flex justify-content-end gap-3 align-items-center">
                        <Button variant="link" className="p-0 action-icon text-muted">
                          <Eye size={18} />
                        </Button>
                        
                        {req.status === 'pending' && (
                          <>
                            <Button 
                              variant="link" 
                              className="p-0 text-success action-icon" 
                              onClick={() => handleUpdateStatus(req.id, 'approved')}
                            >
                              <Check size={18} />
                            </Button>
                            <Button 
                              variant="link" 
                              className="p-0 text-danger action-icon" 
                              onClick={() => handleUpdateStatus(req.id, 'rejected')}
                            >
                              <X size={18} />
                            </Button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-5 text-muted">
                    No {filterStatus.toLowerCase()} requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default CertificatesPage;