import React from 'react';
import img1 from '../img/img1.webp';
import '../style/img.css';

// Componente de imagen
const  ImageComponent= ({ src}) => {
  return (
    <div className='img1'>
      <img className='img' 
      src={img1} 
      />
    </div>
  );
};

export default ImageComponent;

