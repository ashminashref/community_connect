import React from 'react'
import ThemeToggle from '../../UI/ThemeToggle'
import Floatingnav from '../../Common/User/FloatingNav'
import Usercard from '../../Components/User/Home/Usercard'
import './Home.css'
import BentoGrid from '../../Components/User/Home/BentoGrid'
function Home() {
  return (
    <div>
        <div className="topbar d-flex align-items-center justify-content-between gap-5">
<div className="left">
    <h6 className='body-txt'>Good Morning</h6>
    <h4 className='curly-txt'>Ashmin</h4>
</div>
<div className="right">
 <ThemeToggle/>
</div>

        </div>
        <Usercard/>
        <BentoGrid/>
       
        <Floatingnav/>
    </div>
  )
}

export default Home