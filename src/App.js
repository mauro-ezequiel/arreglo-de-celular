
import React from 'react';
import './App.css';
import Bar from './components/bar';
import Carousel from './components/carousel';
import Bottom from './components/bottom';


function App() {
  return (
   <div className="App">
      
         <Bar/>
         <Carousel/>
     
       <section>
       <div className='Container'>
        <h1 className='Title'>
        MOBILE PHONE REPAIR
        <h2 className='Title__h2'>retail and wholesale of accessories  </h2> <p1 className='p1'>android <p2 className='p1__p2'>apple</p2></p1>
        </h1>

     
        <i class="bi bi-android2"></i> <i class="bi1 bi-apple"></i>
   
       </div>

       
         <Bottom/>
          
          <>
            <a href='https://wa.me/541150941389'
             className='btn-wsp' target='-blank'>
               <i class="bi20 bi-whatsapp"/>
             </a>
             </>
         </section>
          </div>

  );
}

export default App;
