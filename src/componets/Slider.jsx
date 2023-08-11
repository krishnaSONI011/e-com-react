import React from 'react'

export default function Slider() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.snitch.co.in/cdn/shop/files/ezgif.com-gif-to-webp_1944x.webp?v=1691232496" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.snitch.co.in/cdn/shop/files/new-arrival-banner-2_1944x.jpg?v=1689858333" className="d-block w-100" alt="..."/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
