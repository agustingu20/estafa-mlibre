import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  RouterProvider,
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={Router}/>
      <Footer/>
    </div>
  );
}

export default App;
