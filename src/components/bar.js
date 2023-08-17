import React from "react";
import '../style/bar.css';
import img1 from '../img/img1.png';


const Bar = () => {
    return(

      <section id='bar'>
      <nav class="navbar navbar-expand-md">
      <div class="container-fluid">
       
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-toggler">

        <a class="navbar-brand " href="123">
          <img className="img"
          src={img1}
          alt="arreglo celulares"/>

        </a>

          <ul class="navbar-nav d-flex justify-content-center align-items-center">
            <li class="nav-item">
              <a class=" txt nav-link active" aria-current="page"href="/">Home </a>
            </li>
            <li class="nav-item">
              <a class="txt nav-link" href="/products">products</a>
            </li>
            <li class=" nav-item">
              <a class="txt nav-link"href="/Repair">Repair </a>
            </li>
           
           
          </ul>
          
        </div>
      </div>
    </nav>
  
    </section>
)
}

export default Bar;



