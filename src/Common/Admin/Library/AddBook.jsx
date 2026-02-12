import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { X } from "lucide-react";
import "../Library/AddBook.css";

const AddBookModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    quantity: 1,
    inStock: true,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    let newValue = type === "checkbox" ? checked : value;

    // Prevent negative quantity
    if (name === "quantity") {
      newValue = Math.max(1, Number(value));
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.author.trim()) {
      newErrors.author = "Author is required";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

    if (formData.quantity < 1) {
      newErrors.quantity = "Quantity must be at least 1";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const cleanedData = {
      ...formData,
      title: formData.title.trim(),
      author: formData.author.trim(),
      description: formData.description.trim(),
    };

    console.log("Book Data:", cleanedData);

    // 👉 API call here

    handleClose();
  };

  const isFormValid =
    formData.title.trim() &&
    formData.author.trim() &&
    formData.category &&
    formData.quantity >= 1;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="add-book-modal"
      contentClassName="border-0 rounded-4 shadow-lg"
    >
      <Modal.Header className="border-0 pt-4 px-4 pb-2 position-relative">
        <Modal.Title className="fw-semibold h5">
          Add New Book
        </Modal.Title>

        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="modal-close-btn "
        >
          <X size={20} />
        </button>
      </Modal.Header>

      <Modal.Body className="px-4 pb-4">
        <Form onSubmit={handleSubmit} noValidate>

          {/* Title */}
          <Form.Group className="mb-3">
            <Form.Label className="small fw-medium mb-1">
              Title
            </Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder="Enter book title"
              className="custom-input gold-focus"
              value={formData.title}
              onChange={handleChange}
              isInvalid={!!errors.title}
            />
            <Form.Control.Feedback type="invalid">
              {errors.title}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Author */}
          <Form.Group className="mb-3">
            <Form.Label className="small fw-medium mb-1">
              Author
            </Form.Label>
            <Form.Control
              type="text"
              name="author"
              placeholder="Enter author name"
              className="custom-input"
              value={formData.author}
              onChange={handleChange}
              isInvalid={!!errors.author}
            />
            <Form.Control.Feedback type="invalid">
              {errors.author}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Category */}
          <Form.Group className="mb-3">
            <Form.Label className="small fw-medium mb-1">
              Category
            </Form.Label>
            <Form.Select
              name="category"
              className="custom-input"
              value={formData.category}
              onChange={handleChange}
              isInvalid={!!errors.category}
            >
              <option value="">Select category</option>
              <option value="history">History</option>
              <option value="theology">Theology</option>
              <option value="biography">Biography</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.category}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Description */}
          <Form.Group className="mb-3">
            <Form.Label className="small fw-medium mb-1">
              Description
            </Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              rows={3}
              placeholder="Enter book description"
              className="custom-input no-resize"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>

          {/* Quantity & Stock */}
          <Row className="align-items-end mb-4">
            <Col xs={6}>
              <Form.Label className="small fw-medium mb-1">
                Quantity
              </Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                className="custom-input"
                value={formData.quantity}
                onChange={handleChange}
                min={1}
                isInvalid={!!errors.quantity}
              />
              <Form.Control.Feedback type="invalid">
                {errors.quantity}
              </Form.Control.Feedback>
            </Col>

            <Col xs={6} className="d-flex flex-column align-items-center">
              <Form.Label className="small fw-medium mb-1">
                In Stock
              </Form.Label>
              <Form.Check
                type="switch"
                id="in-stock-switch"
                name="inStock"
                checked={formData.inStock}
                onChange={handleChange}
                className="custom-switch mt-1"
              />
            </Col>
          </Row>

          <Button
            variant="dark"
            type="submit"
            className="w-100 py-2 rounded-pill submit-btn"
            disabled={!isFormValid}
          >
            Add Book
          </Button>

        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddBookModal;
