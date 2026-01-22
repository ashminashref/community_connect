import React, { useState, useMemo } from 'react';
import { Search, BookOpen, ArrowLeft } from 'lucide-react';
import { duas } from '../../Data/Duas';
import Topbar from '../../Common/User/Topbar';
import './UserDua.css'
import Floatingnav from '../../Common/User/FloatingNav';
import { useNavigate } from 'react-router-dom';
const UserDua = () => {
    const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Duas");

  const categories = ["All Duas", "Daily", "Prayer", "Protection", "Travel", "Family", "Guidance"];

  // Search and Filter Logic
  const filteredDuas = useMemo(() => {
    return duas.filter(dua => {
      const matchesCategory = activeCategory === "All Duas" || dua.type === activeCategory;
      const matchesSearch = dua.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            dua.translation_ml.includes(searchTerm);
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);

  return (
    <div className=" mb-5 pb-5">
        <Topbar/>
      <div className="container mt-5  pt-5" >

        
      
         {/* Header */}
        <header className="certificate-header">
          <button
            className="certificate-back-btn"
            onClick={() => navigate('/')}
          >
            <ArrowLeft size={20} />
          </button>

          <div className="certificate-header-text">
            <h1>Daily Duas</h1>
            <p>Supplications for every occassion</p>
          </div>
        </header>

        {/* Search Bar */}
        <div className="position-relative mb-4">
          <Search className="position-absolute top-50 translate-middle-y ms-3 search-icon" size={18} />
          <input
            type="text"
            className="w-100 search-bar border-0  rounded-pill py-2 ps-5"
            placeholder="Search duas...."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn cat-btn btn-sm rounded-pill px-3 ${activeCategory === cat? 'active': ''}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Duas List */}
        <div className="d-flex flex-column gap-4 ">
          {filteredDuas.map((dua) => (
            <div key={dua.id} className="dua-card rounded-4 p-4" >
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="d-flex align-items-center gap-2">
                  <div className="p-2 rounded dua-icon" >
                    <BookOpen size={18} className="dua-icon" />
                  </div>
                  <div>
                    <h5 className="m-0 fw-semibold dua-h5">{dua.title}</h5>
                    <small className="dua-small">{dua.reference}</small>
                  </div>
                </div>
                {/* <div className="d-flex gap-3">
                  <Heart size={18} className="cursor-pointer" />
                </div> */}
              </div>

              <div className="text-end mb-3">
                <h3 className="arabic-text" >{dua.arabic}</h3>
              </div>

              <div className="mt-2">
                <p className=" fst-italic mb-1 dua-trans">{dua.transliteration}</p>
                <p className="mb-2 trans-p" style={{ fontSize: '0.95rem' }}>{dua.translation_en}</p>
                <hr style={{ borderColor: '#ffffff1a' }} />
                <p className="mb-0 trans-p-ml" style={{ fontSize: '0.95rem',  fontFamily: 'Manjari, sans-serif' }}>
                   {dua.translation_ml}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Floatingnav/>
    </div>
  );
};

export default UserDua;