import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Bienvenidos a Estafa Mlibre</h1>
      <h2>Clon E-commerce de ML.</h2>
      <Footer/>
    </div>
  );
}

export default App;
