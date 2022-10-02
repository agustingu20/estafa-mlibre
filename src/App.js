import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import SearchResultsCards from './components/SearchResultsCards/SearchResultsCards';
import ProductDetail from './components/ProductDetail/ProductDetail';
import PerfilUsuario from './pages/PerfilUsuario/PerfilUsuario';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchResultsCards />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/items' element={<ProductDetail />}/>
          <Route path='/user' element={<PerfilUsuario />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
