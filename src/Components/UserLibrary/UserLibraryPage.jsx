import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { BookOpen, User, Layers, CheckCircle, XCircle } from "lucide-react";
import "./UserLibraryPage.css";
import Floatingnav from "../../Common/User/FloatingNav";

const UserLibraryPage = () => {
  const navigate = useNavigate();

  const books = [
    {
      id: 1,
      title: "Stories of the Sahaba",
      author: "Ibn Kathir",
      category: "Biography",
      quantity: 3,
      inStock: true,
    },
    {
      id: 2,
      title: "Islamic Golden Age",
      author: "Dr. Ibrahim",
      category: "History",
      quantity: 0,
      inStock: false,
    },
  ];

  return (
    <div className="user-library-page">

      {/* Header */}
      <div className="library-header">
        <button
          onClick={() => navigate("/")}
          className="back-btn icon-only"
        >
          <ArrowLeftIcon fontSize="small" />
        </button>

        <div>
          <h1 className="curly-txt">Library</h1>
          <p>Browse & request available books</p>
        </div>
      </div>

      {/* Books Grid */}
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">

            <div className="book-icon">
              <BookOpen size={22} />
            </div>

            <h3>{book.title}</h3>

            <div className="book-meta">
              <span>
                <User size={14} /> {book.author}
              </span>
              <span>
                <Layers size={14} /> {book.category}
              </span>
            </div>

            <div className="book-stock">
              {book.inStock ? (
                <span className="stock available">
                  <CheckCircle size={14} /> Available ({book.quantity})
                </span>
              ) : (
                <span className="stock unavailable">
                  <XCircle size={14} /> Out of Stock
                </span>
              )}
            </div>

            <button
              className="borrow-btn"
              disabled={!book.inStock}
            >
              {book.inStock ? "Borrow Book" : "Unavailable"}
            </button>

          </div>
        ))}
      </div>

      <Floatingnav />
    </div>
  );
};

export default UserLibraryPage;
