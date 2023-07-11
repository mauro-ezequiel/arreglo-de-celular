import React from 'react';
import './App.css';
import Bar from './components/bar';
import Carousel from './components/carousel';
import Sale from './components/sale';
import Accessories from './components/accessories';
import Repair from './components/repair';


function App() {
  return (
   <div className="App">
       <div className='header'  id='beginning'>
         <Bar/>
         <Carousel/>
       </div>
       <div className='Container'>
        <h1 className='Title'>
        mobile phone repair
        </h1>
        <i class="bi bi-android2"></i> <i class="bi1 bi-apple"></i>
       </div>

        <h2 className='offers' id='offer'>
         in offer
        </h2>
       
       <Sale/>

       <h2 className='offers' id="accessories">
       accessories
        </h2>

        <Accessories/>

        <Repair />


           <div className='container-xxl'  >
            <div className='row'>
             <div className="col ">
             <h2 className='text'>
              you can contact us in the following networks:
             </h2>
             </div>
             <div className="col ">
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
          <div>
            
          </div>
          </div>

  );
}

export default App;
