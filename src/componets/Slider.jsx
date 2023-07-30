import React from 'react'

export default function Slider() {
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.snitch.co.in/cdn/shop/files/Orange_Modern_Promotional_Fashion_Spring_Sale_Banner_1_9280b17e-584f-464c-8768-3f5749118aff_1944x.png?v=1689345283" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.snitch.co.in/cdn/shop/files/new-arrival-banner-2_1944x.jpg?v=1689858333" class="d-block w-100" alt="..."/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
