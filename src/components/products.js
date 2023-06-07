import React from "react";
import '../img/img1.png';


const Products = () => {
 return(
     
  <div className="container">
   <div className="row">
    <div className="col-md-3">
     <img className="img"
     src={img1}
     alt="123"/>
     <h1 className="title">j7 prime</h1>
     <h2 className="price">12000</h2>
     <p1 className= 'info'>
        32gb interna
        4gb RAM
        8mpx
        </p1>

    </div>
    <div className="col-md-3">
     <img className="img"
     src={img1}
     alt="123"/>
     <h1 className="title">j7 prime</h1>
     <h2 className="price">12000</h2>
     <p1 className= 'info'>
        32gb interna
        4gb RAM
        8mpx
        </p1>

    </div>

    <div className="col-md-3">
     <img className="img"
     src={img1}
     alt="123"/>
     <h1 className="title">j7 prime</h1>
     <h2 className="price">12000</h2>
     <p1 className= 'info'>
        32gb interna
        4gb RAM
        8mpx
        </p1>

    </div>
    <div className="col-md-3">
     <img className="img"
     src={img1}
     alt="123"/>
     <h1 className="title">j7 prime</h1>
     <h2 className="price">12000</h2>
     <p1 className= 'info'>
        32gb interna
        4gb RAM
        8mpx
        </p1>

    </div>

   </div>
   </div>
 )
 }

 export default Products;