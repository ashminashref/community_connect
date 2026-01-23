import React from 'react'
import './Typedua.css'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, CloudSun, Moon, CalendarDays, HeartPulse, Sparkles, Wind,  BedDouble, Gem } from 'lucide-react'

function Typedua() {
    const navigate = useNavigate()
const typedua = [
  { name: "Morning Dua", subtitle: "Athkar as-Sabah", id: 1, icon: <CloudSun size={17}/>, path: 'Morning' }, 
  { name: "Evening Dua", subtitle: "Athkar al-Masa", id: 2, icon: <Moon size={17}/>, path: 'Evening' },
  { name: "Prayer Dua", subtitle: "After Salah", id: 3, icon: <Gem size={17}/>, path: 'Prayer' },
  { name: "Protection", subtitle: "Night Protection", id: 5, icon: <BedDouble size={17}/>, path: 'Protection' },
  // ... and so on
];
  return (
    <div>
         {/* Header */}
        <header className="certificate-header">
          <button
            className="certificate-back-btn"
            onClick={() => navigate('/')}
          >
            <ArrowLeft size={20} />
          </button>

          <div className="certificate-header-text ">
            <h1>Daily Duas</h1>
            <p>Supplications for every occassion</p>
            
          </div>
        </header>


           <ul className='dua-ul'>
  {typedua.map((item) => (
    <li 
      className='dua-li p-3 rounded-4 d-flex align-items-center justify-content-between mb-3' 
      key={item.id}
      onClick={() => navigate(`/dua/${item.path}`)} // Navigates to /dua/morning, etc.
      style={{ cursor: 'pointer' }}
    >
      <div>
        <h5 className='dua-h5 p-0'>{item.name}</h5>
        <p className='m-0 dua-subtitle'>{item.subtitle}</p>
      </div>
      <span className='icon-box'>
        <p className='m-0 p-0 dua-icon'>{item.icon}</p>
      </span>
    </li>
  ))}
</ul>
    </div>
  )
}

export default Typedua