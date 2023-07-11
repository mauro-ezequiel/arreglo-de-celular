import React from "react";
import '../style/products.css';


function Card (props) {

    return (
       
        <div className="card">
        <img className="image"
        src={props.image} 
        alt={props.title} />
        <h2 className="title">{props.title}</h2>
        <h3 className="price">{props.price}</h3>
        <p className="paragraph">{props.paragraph}</p>
 
      </div>
    );
  }
  
  export default Card;