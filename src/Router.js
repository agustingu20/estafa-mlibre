import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import Error404 from './components/error404/Error404';

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
  {
    path: '/*',
    element: <Error404/>,
    errorElement: 'pagina no encontrada',
  },
]);

export default Router;
