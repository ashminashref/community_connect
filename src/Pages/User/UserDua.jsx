import React, { useState, useMemo,  } from 'react';
import { Search, BookOpen, ArrowLeft } from 'lucide-react';
import { duas } from '../../Data/Duas';
import Topbar from '../../Common/User/Topbar';
import './UserDua.css'
import Floatingnav from '../../Common/User/FloatingNav';
import { useNavigate, useParams } from 'react-router-dom';

const UserDua = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const activeCategory = useMemo(() => {
    // If there is no category in URL, default to "All Duas"
    if (!categoryName) return "All Duas";
    
    // Convert 'protection' or 'daily' back to the display format
    // This MUST match the 'type' field in your Duas.js data
    return categoryName.charAt(0).toUpperCase() + categoryName.slice(1).toLowerCase();
  }, [categoryName]);


  const filteredDuas = useMemo(() => {
    return duas.filter(dua => {
      // 1. Match Category (Strict check)
      const matchesCategory = activeCategory === "All Duas" || 
        (dua.type && dua.type.toLowerCase() === activeCategory.toLowerCase());
      
      // 2. Match Search
      const search = searchTerm.toLowerCase();
      const matchesSearch = dua.title.toLowerCase().includes(search) || 
                            (dua.translation_ml && dua.translation_ml.includes(search));
                            
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);



  return (
    <div className="mb-5 pb-5">
      <Topbar />
      <div className="container mt-5 pt-5">
        <header className="certificate-header">
          <button className="certificate-back-btn" onClick={() => navigate('/typedua')}>
            <ArrowLeft size={20} />
          </button>
          <div className="certificate-header-text">
            <h1>{activeCategory === "All Duas" ? "Daily Duas" : `${activeCategory} Duas`}</h1>
            <p>Supplications for you</p>
          </div>
        </header>

        {/* Search Bar */}
        <div className="position-relative mb-4">
          <Search className="position-absolute top-50 translate-middle-y ms-3 search-icon" size={18} />
          <input
            type="text"
            className="w-100 search-bar border-0 rounded-pill py-2 ps-5"
            placeholder="Search duas...."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>


        {/* Duas List - Restored Original UI */}
        <div className="d-flex flex-column gap-4">
          {filteredDuas.length > 0 ? (
            filteredDuas.map((dua) => (
              <div key={dua.id} className="dua-card rounded-4 p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <div className="p-2 rounded dua-icon">
                      <BookOpen size={18} className=''/>
                    </div>
                    <div>
                      <h5 className="m-0  dua-h5">{dua.title}</h5>
                      <small className="dua-small">{dua.reference}</small>
                    </div>
                  </div>
                </div>

                <div className="text-end mb-3">
                  <h3 className="arabic-text" style={{ lineHeight: '1.8' }}>{dua.arabic}</h3>
                </div>

                <div className="mt-2">
                  <p className="fst-italic mb-1 dua-trans text-muted small">{dua.transliteration}</p>
                  <p className="mb-2 trans-p">{dua.translation_en}</p>
                  <hr className="opacity-10" />
                  <p className="mb-0 trans-p-ml" style={{ fontFamily: 'Manjari, sans-serif' }}>
                    {dua.translation_ml}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-5 opacity-50">
              <p>No duas found in this category.</p>
            </div>
          )}
        </div>
      </div>
      <Floatingnav />
    </div>
  );
};

export default UserDua;