import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { spinner } from './hooks/sweetAlert';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Error404 from './components/error404/Error404';
import SearchResultsCards from './components/SearchResultsCards/SearchResultsCards';
import ProductDetail from './components/ProductDetail/ProductDetail';
import PerfilUsuario from './pages/PerfilUsuario/PerfilUsuario';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SearchResultsByCategory from './components/SearchResultsByCategory/SearchResultsByCategory';
import LoginRegistro from './pages/LoginRegistro/LoginRegistro';

function App() {
  useEffect(() => {
    spinner();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop></ScrollToTop>
        <NavBar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/search" element={<SearchResultsCards />} />
          <Route path="/search/category/:categoryId" element={<SearchResultsByCategory />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/items/:itemId" element={<ProductDetail />} />
          <Route path="/user" element={<PerfilUsuario />} />
          <Route path="/login-registro" element={<LoginRegistro />} />
          <Route path="/*" element={<Error404/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
