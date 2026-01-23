import React from 'react'
import './Typedua.css'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, CloudSun, Moon, CalendarDays, HeartPulse, Sparkles, Wind,  BedDouble, Gem } from 'lucide-react'

function Typedua() {
    const navigate = useNavigate()
    const typedua = [
{ name: "Morning Dua", subtitle: "Athkar as-Sabah",  id: 1, icon: <CloudSun  size={17}/> },
  { name: "Evening Dua", subtitle: "Athkar al-Masa",  id: 2, icon: <Moon size={17}/> },
  { name: "Friday Dua", subtitle: "Special Sunnahs",  id: 3, icon: <CalendarDays size={17}/> },
  { name: "Dua for Patients", subtitle: "Healing & Shifa",  id: 4, icon: <HeartPulse size={17} /> },
  { name: "Before Sleep", subtitle: "Night Protection",  id: 5, icon: <BedDouble size={17}/> },
  { name: "Seeking Forgiveness", subtitle: "Astaghfirullah",  id: 6, icon: <Sparkles size={17}/> },
  { name: "Anxiety & Stress", subtitle: "Peace of Mind",  id: 7, icon: <Wind size={17}/> },
  { name: "After Salah", subtitle: "Post-Prayer Athkar",  id: 8,icon: <Gem  size={17}/>},        
    ]
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

          <div className="certificate-header-text">
            <h1>Daily Duas</h1>
            <p>Supplications for every occassion</p>
            
          </div>
        </header>


        {typedua.map((item, id)=> (
            <ul className='dua-ul'>
                <li className='dua-li p-3 rounded-4 d-flex align-items-center justify-content-between' key={id}>
                    <div>                    <h5 className='dua-h5  p-0'>{item.name}</h5>

                          <p className='m-0 dua-subtitle'>{item.subtitle}</p>
                    </div>
                    <span className='icon-box '>
  {item.icon}
                    </span>
                  
                </li>
            </ul>
        ))}
    </div>
  )
}

export default Typedua