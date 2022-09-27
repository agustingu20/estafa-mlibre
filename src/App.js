import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import {
  RouterProvider,
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import Router from './Router';
import { spinner } from './hooks/sweetAlert';

function App() {
  useEffect(() => {
    spinner();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={Router}/>
      <Footer/>
    </div>
  );
}

export default App;
