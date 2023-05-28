import React from "react";
import background from '../img/background.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import '../style/carousel.css';


const Carousel = () => {
    return(
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner"  d-flex justify-content-center  align-items-center flex-wrap-wrap>
    <div class="carousel-item active" data-bs-interval="10000">
      <img loading="lazy"
      src= {background}
      class="d-block w-100" />
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img loading="lazy"
      src= {img2} 
      class="d-block w-100" />
    </div>
    <div loading="lazy"
    class="carousel-item">
      <img src={img3}
      class="d-block w-100"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
}
export default Carousel;