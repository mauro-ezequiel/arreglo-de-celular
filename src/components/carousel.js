import React from "react";
import background from '../img/background.jpg';
import img2 from '../img/img2.jpg';
import air1 from '../img/air1.jpg';
import '../style/carousel.css';



const Carousel = () => {
    return(
      <section>
      <div id="carousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner img-fluid"  d-flex justify-content-center  align-items-center flex-wrap-wrap>
    <div class="carousel-item active" data-bs-interval="10000">
      <a  href="home">
    <img 
      src= {background} 
      class="d-block w-100" 
      alt="repair"/>
      </a>
      
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <a  href="home">
      <img 
      src= {img2} 
      class="d-block w-100"
      alt="samsung-s10" />
      </a>
    </div>
    <div loading="lazy"
    class="carousel-item">
      <a href="home">
     
      <img class="d-block w-100"
      src={air1}
      alt='airpods'/>
      </a>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</section>
    );
}
export default Carousel;