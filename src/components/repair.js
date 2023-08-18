import React from "react";
import img1 from '../img/img1.png';
import '../style/repair.css';
import Bar from "./bar";
import Bottom from "./bottom";
import Button from '../components/button';
const Repair = () => {
return( 
  <div>
   <Bar/>
   <section>
   <div className="body">
   <h1 id="offer"> repair</h1>
   <div className="row">
      <div className=" col-md-6">
     
      <div id="column">
        <img className="logo"
        src={img1}
        alt="arreglo de celulares"/>

     

        <p className="detail">
        You can communicate with us through the following networks
        </p>
            <div className="detail">
              
            <a href='https://github.com/mauro-ezequiel' target='-blank'>
                <i class="bi5 bi-github"></i>
                </a>

            <a href='https://www.facebook.com/profile.php?id=100088989336658' target='-blank'>
              <i class="bi5 bi-facebook"/> 
             </a>
             <a href='https://wa.me/541150941389'
             target='-blank'>
             <i class="bi5 bi-whatsapp"/>
             </a>
             <a href='https://www.instagram.com/'target='-blank'>
             <i class="bi5 bi-instagram"/>
            </a>
            <a href='https://mail.google.com/mail/u/0/#search/from%3A%40jooble.org+in%3Aanywhere/FMfcgzGtwCtTwJMFtBCXBlHLrcdTZmpk'target='-blank'>
            <i class="bi5 bi-envelope-at-fill"></i>
            </a>
            </div>
            </div>
      </div>
      <div className="col-md-6">
        <div id="column">
         
         <p className="detail">
          if your cell phone has any problem
          example:
        </p>
       <div className="detail">
          <ul>
          
          <li >-se fracturo la pantalla, carcasa, etc.</li>
          <li>-La pantalla no funciona, tactil ,altavoz</li>
          <li>-got wet or had moisture problems</li>
          <li >-etc..</li>
          </ul>
         </div>


         <p className="detail">
            You can contact our technical support, which will provide you with the best possible attention and will give you a budget according to your problem.

            our branch is located
            West zone
            paso del rey, av 9 de mayo 3224
            in the corner
        </p>
        </div>
        </div>
       </div>
      </div>
      <Button/>
   
    <Bottom/>
             
  
   </section>
   </div>
);
}

export default Repair;