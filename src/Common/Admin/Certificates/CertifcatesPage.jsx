import React from 'react';
import { Card, Table, Badge, Button } from 'react-bootstrap';
import { FileText, Check, X, Eye } from 'lucide-react';
import './Certificates.css';

const certificateRequests = [
  { id: "CR-001", applicant: "Ahmad Khan", applicantId: "786-AX", type: "birth", date: "1/15/2024", status: "pending" },
  { id: "CR-002", applicant: "Mohammed Ali", applicantId: "452-BX", type: "marriage", date: "1/12/2024", status: "pending" },
  { id: "CR-003", applicant: "Rashid Patel", applicantId: "123-CX", type: "death", date: "1/10/2024", status: "approved" },
  { id: "CR-004", applicant: "Salim Sheikh", applicantId: "789-DX", type: "birth", date: "1/8/2024", status: "rejected" },
];

const CertificatesPage = () => {
  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center gap-3">
          <div className="cert-icon-wrapper">
            <FileText size={24} />
          </div>
          <h4 className="fw-bold mb-0 page-title">Certificate Requests</h4>
        </div>
        <Badge bg="light" className="text-dark border px-3 py-2 rounded-pill">
          2 pending
        </Badge>
      </div>

      {/* Requests Table Card */}
      <Card className="cert-card border-0 shadow-sm overflow-hidden">
        <div className="table-responsive">
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
              {certificateRequests.map((req) => (
                <tr key={req.id}>
                  <td className="ps-4 py-4 fw-bold small">{req.id}</td>
                  <td>
                    <div className="fw-bold title-text">{req.applicant}</div>
                    <div className="text-muted smallest">{req.applicantId}</div>
                  </td>
                  <td>
                    <Badge className="cert-type-badge">{req.type}</Badge>
                  </td>
                  <td className="text-muted small">{req.date}</td>
                  <td>
                    <Badge className={`status-pill ${req.status}`}>
                      {req.status}
                    </Badge>
                  </td>
                  <td className="text-end pe-4">
                    <div className="d-flex justify-content-end gap-3 align-items-center">
                      <Button variant="link" className="p-0 text-muted action-icon">
                        <Eye size={18} />
                      </Button>
                      {req.status === 'pending' && (
                        <>
                          <Button variant="link" className="p-0 text-dark action-icon">
                            <Check size={18} />
                          </Button>
                          <Button variant="link" className="p-0 text-danger action-icon">
                            <X size={18} />
                          </Button>
                        </>
                      )}
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

export default CertificatesPage;