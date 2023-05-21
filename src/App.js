import ImageComponent from './components/img';
import React from 'react';
import './App.css';
import Navbar from './components/navbar.js';


function App() {
  return (
    <div className="App">
      <div className='header'>
        <ImageComponent/>
       <Navbar/>
     
       </div>
    </div>
  );
}

export default App;
