import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function Navbar() {
  let [open,setOpen] = useState(-200)

  function sideOpener(){
       setOpen(0)
  }
  return (
    <>
    <Sidebar mode={open} setOpen={setOpen} />
    <div className='topbar font-1 text-center'>
      <span>SHOP FOR RS 3999/- & Get FLAT 15% OFF</span>
      <span>USE CODE: SHOP15</span>
    </div>
  <nav>
      <div className="d-flex justify-content-between align-items-center">
      <div className="site-nav">
                  <button className="ham-style" onClick={()=>sideOpener(-200)}><i className="fa-solid fa-bars"></i></button>
      </div>
      <div className="site-logo">
        <Link to="/"><img src="https://www.snitch.co.in/cdn/shop/files/blackoption_200x.png?v=1659016547" className="img-fluid rounded-top" alt=""/></Link>
      </div>
      <div className="w-9">
      <div className="d-flex justify-content-evenly icon-sizer-1">
     <Link to="auth/login" className='text-dark'> <i className="fa-regular fa-user"></i></Link>
      <i className="fa-solid fa-magnifying-glass"></i>
      <i className="fa-regular fa-heart"></i>
      <i className="fa-solid fa-camera"></i>
      <i className="fa-solid fa-cart-shopping"></i>
      </div>
      </div>
      </div>
  </nav>
    </>
  )
}
