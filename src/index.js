import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import all of Bootstrap's css

import 'bootstrap/dist/css/bootstrap.min.css';


// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Sale from './components/sale';
import Accessories from './components/accessories';
import Repair from './components/repair';

const router = createBrowserRouter([
  {path:'/',
  element:<App/>,
  errorElement: <h1>error</h1>
  },
  {path:'/products',
  element:<><Sale/> <Accessories/></>,
  },
  {path:'/Repair',
  element:<Repair/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
  <RouterProvider router={router}/> 
 </React.StrictMode>
);

