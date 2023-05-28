import React from 'react';
import './App.css';
import Bar from './components/bar';
import Carousel from './components/carousel';





function App() {
  return (
    <div className="App">
      <div className='header'>
        <Bar/>
        <Carousel/>
  
      </div>
      <div class='container'>
        <h1>reparacion </h1>
        <i class="bi bi-android2"></i>
      </div>
    </div>
    
  );
}

export default App;
