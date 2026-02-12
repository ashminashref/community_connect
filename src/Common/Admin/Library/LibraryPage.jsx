import React, { useState, useMemo } from "react";
import {
  Button,
  Card,
  Table,
  Badge,
  Form,
  InputGroup,
  Row,
  Col,
} from "react-bootstrap";
import {
  Plus,
  Search,
  BookOpen,
  Edit2,
  Trash2,
  Package,
  AlertCircle,
} from "lucide-react";

import AddBookModal from "./AddBook";
import "./Library.css";

const initialLibraryData = [
  { id: 1, title: "Sahih Al-Bukhari", author: "Imam Al-Bukhari", category: "Hadith", quantity: 5, status: "In Stock", date: "2024-01-10" },
  { id: 2, title: "Tafsir Ibn Kathir", author: "Ibn Kathir", category: "Tafsir", quantity: 3, status: "In Stock", date: "2024-01-08" },
  { id: 3, title: "Riyad as-Salihin", author: "Imam An-Nawawi", category: "Hadith", quantity: 0, status: "Out of Stock", date: "2024-01-05" },
  { id: 4, title: "The Sealed Nectar", author: "Safiur Rahman Mubarakpuri", category: "Seerah", quantity: 7, status: "In Stock", date: "2024-01-03" },
];

const LibraryPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [stockFilter, setStockFilter] = useState("All");

  const filteredBooks = useMemo(() => {
    return initialLibraryData.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        categoryFilter === "All Categories" ||
        book.category === categoryFilter;

      const matchesStock =
        stockFilter === "All" || book.status === stockFilter;

      return matchesSearch && matchesCategory && matchesStock;
    });
  }, [searchTerm, categoryFilter, stockFilter]);

  const inStockCount = initialLibraryData.filter(
    (b) => b.status === "In Stock"
  ).length;

  return (
    <div className="animate-fade-in p-3">
      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
        <div className="d-flex align-items-center gap-3">
          <div className="library-icon-wrapper">
            <BookOpen size={22} />
          </div>
          <div>
            <h4 className="fw-bold mb-0 page-title">Library</h4>
            <small className="subtitle-text">
              {inStockCount} books in stock
            </small>
          </div>
        </div>

        <Button
          variant="dark"
          className="btn-custom py-2 px-4 d-flex align-items-center gap-2"
          onClick={() => setShowAddModal(true)}
        >
          <Plus size={18} /> Add Book
        </Button>
      </div>

      {/* Search & Filters */}
      <Row className="mb-4 g-3">
        <Col lg={7}>
          <InputGroup className="search-input-group rounded-pill overflow-hidden">

            {/* ✅ FIXED */}
            <InputGroup.Text className="search-icon-box">
              <Search size={18} className="search-icon" />
            </InputGroup.Text>

            {/* ✅ FIXED */}
            <Form.Control
              placeholder="Search books by title or author..."
              className="input-box shadow-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>

        <Col xs={6} lg={3}>
          <Form.Select
            className="rounded-pill py-2 select shadow-sm"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option>All Categories</option>
            <option>Hadith</option>
            <option>Tafsir</option>
            <option>Seerah</option>
          </Form.Select>
        </Col>

        <Col xs={6} lg={2}>
          <Form.Select
            className="rounded-pill py-2 select shadow-sm"
            value={stockFilter}
            onChange={(e) => setStockFilter(e.target.value)}
          >
            <option>All</option>
            <option>In Stock</option>
            <option>Out of Stock</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Table */}
      <Card className="library-card border-0 shadow-sm">
        <div className="table-responsive">
          <Table hover className="align-middle mb-0 custom-table">
            <thead className="bg-light">
              <tr>
                <th className="ps-4 py-3">Book</th>
                <th>Category</th>
                <th className="text-center">Quantity</th>
                <th>Stock Status</th>
                <th>Added</th>
                <th className="pe-4 text-end">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                  <tr key={book.id}>
                    <td className="ps-4 py-4">
                      <div className="title-text">{book.title}</div>
                      <div className="subtitle-text small">
                        {book.author}
                      </div>
                    </td>

                    <td>
                      <Badge className="category-badge">
                        {book.category}
                      </Badge>
                    </td>

                    <td className="fw-medium text-center">
                      {book.quantity}
                    </td>

                    <td>
                      <Badge
                        className={`status-pill ${
                          book.status === "In Stock"
                            ? "instock"
                            : "outofstock"
                        }`}
                      >
                        <span className="d-flex align-items-center gap-1">
                          {book.status === "In Stock" ? (
                            <Package size={14} />
                          ) : (
                            <AlertCircle size={14} />
                          )}
                          {book.status}
                        </span>
                      </Badge>
                    </td>

                    <td className="date small">
                      {book.date}
                    </td>

                    <td className="pe-4 text-end">
                      <div className="d-flex justify-content-end gap-2">
                        <Button variant="link" className="action-btn">
                          <Edit2 size={18} />
                        </Button>

                        <Button variant="link" className="action-btn text-danger">
                          <Trash2 size={18} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-5 text-muted">
                    No books found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </Card>

      {/* Modal */}
      <AddBookModal
        show={showAddModal}
        handleClose={() => setShowAddModal(false)}
      />
    </div>
  );
};

export default LibraryPage;
