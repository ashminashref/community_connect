import React from 'react'
import ThemeToggle from '../../UI/ThemeToggle'

function Topbar() {
  return (
    <div>
         <div className="topbar fixed-top  p-3  d-flex align-items-center justify-content-between gap-5">
<div className="left d-flex flex-column align-items-start justify-content-center">
    {/* <h6 className='body-txt'>Good Morning</h6> */}
    <h4 className=' m-0 p-0'>tM</h4>
    {/* <p className='m-0 p-0'>Thalayad</p> */}
</div>
<div className="right p-1  rounded d-flex  align-items-center justify-content-center">
 <ThemeToggle className =""/>
</div>

        </div>
    </div>
  )
}

export default Topbar