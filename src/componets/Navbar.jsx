import React from 'react'

export default function Navbar() {
  return (
    <>
    <div className='topbar font-1 text-center'>
      <span>SHOP FOR RS 3999/- & Get FLAT 15% OFF</span>
      <span>USE CODE: SHOP15</span>
    </div>
  <nav>
      <div className="d-flex justify-content-between align-items-center">
      <div className="site-nav">
                  <button className="ham-style"><i className="fa-solid fa-bars"></i></button>
      </div>
      <div className="site-logo">
        <img src="https://www.snitch.co.in/cdn/shop/files/blackoption_200x.png?v=1659016547" className="img-fluid rounded-top" alt=""/>
      </div>
      <div className="w-9">
      <div className="d-flex justify-content-evenly icon-sizer-1">
      <i className="fa-regular fa-user"></i>
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
