import React from "react";
import '../style/bar.css';
import '../img/img1.png';


import img1 from '../img/img1.png';


const Bar = () => {
    return(

 

    <nav class="navbar navbar-expand-md bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-Toggler"
    aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbar-Toggler">
      <a class="navbar-brand" >
         <img className="img"
         src= {img1}
         alt="logo"
         />
      </a>
      <ul class="navbar-nav d-flex justify-content-center align-items-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#offer"> offer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#accessories">accessories</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#Repair">Repair</a>
        </li>
        <li class="nav-item">
          <i class="bi2 bi-cart4  "></i>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

     

)
}

export default Bar;



