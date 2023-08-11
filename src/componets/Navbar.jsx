import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useAuth } from './context/authContext'
export default function Navbar() {
  let [open,setOpen] = useState(-200)
  let [auth,setAuth]=useAuth()
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
        <Link to="/" className='text-decoration-none'><span className='text-decoration-none text-dark fs-2'>E-COM</span></Link>
      </div>
      <div className="w-9">
      <div className="d-flex justify-content-evenly icon-sizer-1">
     <Link to={auth.user == null?"auth/login" : "/account"} className='text-dark'> <i className="fa-regular fa-user"></i></Link>
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
