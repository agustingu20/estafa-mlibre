import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import Home from './pages/Home/Home';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: 'pagina no encontrada',
  },
  {
    path: '/about',
    element: <AboutUs/>,
    errorElement: 'pagina no encontrada',
  },
]);

export default Router;
