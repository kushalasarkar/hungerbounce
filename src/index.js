import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/body/About';
import ContactUs from './components/body/ContactUs';
import Cart from './components/body/Cart';
import Error from './Error';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>
  },{
    path: "/about",
    element: <About/>
  },{
    path: "/Contactus",
    element: <ContactUs/>
  },{
    path: "/cart",
    element: <Cart/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
