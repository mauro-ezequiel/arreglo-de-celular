
import React from 'react';
import './App.css';
import Bar from './components/bar';
import Carousel from './components/carousel';
import Bottom from './components/bottom';
import Button from './components/button';

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

       <Button/>
         <Bottom/>
          
        
         </section>
          </div>

  );
}

export default App;
