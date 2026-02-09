import React from 'react';
import { Button, Card, Table, Badge, Form, InputGroup, Row, Col } from 'react-bootstrap';
import { Plus, Search, BookOpen, Edit2, Trash2, Package, AlertCircle } from 'lucide-react';
import './Library.css';

const libraryData = [
  { id: 1, title: "Sahih Al-Bukhari", author: "Imam Al-Bukhari", category: "Hadith", quantity: 5, status: "In Stock", date: "2024-01-10" },
  { id: 2, title: "Tafsir Ibn Kathir", author: "Ibn Kathir", category: "Tafsir", quantity: 3, status: "In Stock", date: "2024-01-08" },
  { id: 3, title: "Riyad as-Salihin", author: "Imam An-Nawawi", category: "Hadith", quantity: 0, status: "Out of Stock", date: "2024-01-05" },
  { id: 4, title: "The Sealed Nectar", author: "Safiur Rahman Mubarakpuri", category: "Seerah", quantity: 7, status: "In Stock", date: "2024-01-03" },
];

const LibraryPage = () => {
  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="library-icon-wrapper ">
            <BookOpen size={24} />
          </div>
          <div>
            <h4 className="fw-bold mb-0 page-title">Library</h4>
            <small className="subtitle-text">3 books in stock</small>
          </div>
        </div>
        <Button variant="dark" className="btn-custom py-2 px-4 d-flex align-items-center gap-2">
          <Plus size={18} /> Add Book
        </Button>
      </div>

      {/* Search and Filters */}
      <Row className="mb-4 g-3">
        <Col lg={7}>
          <InputGroup className="search-input-group">
            <InputGroup.Text className="border-end-0 search-icon-box rounded-start-pill">
              <Search size={18} className="search-icon" />
            </InputGroup.Text>
            <Form.Control 
              placeholder="Search books by title or author..." 
              className="border-start-0 input-box rounded-end-pill py-2" 
            />
          </InputGroup>
        </Col>
        <Col xs={6} lg={3}>
          <Form.Select className="rounded-pill py-2 select shadow-sm">
            <option>All Categories</option>
            <option>Hadith</option>
            <option>Tafsir</option>
            <option>Seerah</option>
          </Form.Select>
        </Col>
        <Col xs={6} lg={2}>
          <Form.Select className="rounded-pill py-2 select shadow-sm">
            <option>All</option>
            <option>In Stock</option>
            <option>Out of Stock</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Library Table Card */}
      <Card className="library-card border-0 shadow-sm overflow-hidden">
        <div className="table-responsive no-scrollbar">
          <Table hover className="align-middle mb-0 custom-table">
            <thead>
              <tr>
                <th className="ps-4">Book</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Stock Status</th>
                <th>Added</th>
                <th className="pe-4 text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {libraryData.map((book) => (
                <tr key={book.id}>
                  <td className="ps-4 py-4">
                    <div className="fw-bold title-text">{book.title}</div>
                    <div className="subtitle-text small">{book.author}</div>
                  </td>
                  <td>
                    <Badge className="category-badge">{book.category}</Badge>
                  </td>
                  <td className="fw-medium">{book.quantity}</td>
                  <td>
                    <Badge className={`status-pill ${book.status === 'In Stock' ? 'instock' : 'outofstock'}`}>
                      <span className="d-flex align-items-center gap-1">
                        {book.status === 'In Stock' ? <Package size={14} /> : <AlertCircle size={14} />}
                        {book.status}
                      </span>
                    </Badge>
                  </td>
                  <td className="text-muted small">{book.date}</td>
                  <td className="pe-4 text-end">
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

export default LibraryPage;