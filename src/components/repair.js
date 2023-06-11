import React from "react";
import img1 from '../img/img1.png';
import '../style/repair.css';


const Repair = () => {
return( 
   <>
    <div className="container-xl " id='Repair' >
        <h1 className="t1">repair</h1>
    </div>
    <div className="row">
     <div className="col-lg-5">
        <img className="logo"
        src={img1}/>
        <div className="row">
            <div className="col-md-3">
            
             <i class="bi9 bi-telephone-forward"></i>

            </div>


            <div className="col-md-9">
             <h3 className="title1">
             you can contact our technical support
              </h3>
              <a href='https://www.facebook.com/profile.php?id=100088989336658' target='-blank'>
              <i class="bi5 bi-facebook"/> 
             </a>
             <i class="bi5 bi-whatsapp"/>
             <a href='https://www.instagram.com/'target='-blank'>
             <i class="bi5 bi-instagram"/>
            </a>
            <i class="bi5 bi-envelope-at-fill"></i>
           </div>
        </div>
     </div>
     <div className="col-lg-7">
        <div className="cont">

        <p className="detail">
          if your cell phone has any problem
          example:
       
          <ul className="list-group ">
          
          <li class="list-group-item">-se fracturo la pantalla, carcasa, etc.</li>
          <li class="list-group-item">-La pantalla no funciona, tactil ,altavoz</li>
          <li class="list-group-item">-got wet or had moisture problems</li>
          <li class="list-group-item">-etc..</li>
          </ul>
       


       
            You can contact our technical support, which will provide you with the best possible attention and will give you a budget according to your problem.

            our branch is located
            West zone
            paso del rey, av 9 de mayo 3224
            in the corner
        </p>
        </div>
        </div>
    </div>
   </>

)}

export default Repair;