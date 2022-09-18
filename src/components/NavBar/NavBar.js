import React from 'react';
import './navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <p className="navbar-logo">Logo Estafa Mlibre</p>
        <div className='mx-auto'>
          <input type="text" className="search-input" placeholder="Buscar" />
          <button className="search-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
