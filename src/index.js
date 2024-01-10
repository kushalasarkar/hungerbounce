import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/body/Body';
import About from './components/body/About';
import Contact from './components/body/Contact';
import Cart from './components/body/Cart';
import Error from './Error';
import RestaurantMenu from './components/body/RestaurantMenu';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },{
        path: "/about",
        element: <About />
      }, {
        path: "/Contact",
        element: <Contact />
      }, {
        path: "/cart",
        element: <Cart />
      },{
        path: "/restautants/:resid",
        element: <RestaurantMenu />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
