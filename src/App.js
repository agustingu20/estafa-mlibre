import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutUs/>
      <Footer/>

    </div>
  );
}

export default App;
