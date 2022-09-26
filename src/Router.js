import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';

const Router = createBrowserRouter([
  {
    path: '/',
    element: 'Aqui va el home',
    errorElement: 'pagina no encontrada',
  },
  {
    path: '/about',
    element: <AboutUs/>,
    errorElement: 'pagina no encontrada',
  },
]);

export default Router;
