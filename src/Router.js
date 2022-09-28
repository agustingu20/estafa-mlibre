/* istanbul ignore file */
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import SearchResultsCards from './components/SearchResultsCards/SearchResultsCards';
import AboutUs from './pages/AboutUs/AboutUs';

const Router = createBrowserRouter([
  {
    path: '/',
    element: 'Aqui va el home',
    errorElement: 'pagina no encontrada',
  },
  {
    path: '/about',
    element: <AboutUs />,
    errorElement: 'pagina no encontrada',
  },
  {
    path: '/search',
    element: <SearchResultsCards />,
    errorElement: 'pagina no encontrada',
  },
]);

export default Router;
