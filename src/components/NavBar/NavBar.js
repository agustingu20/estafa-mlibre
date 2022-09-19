import React from 'react';
import './navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faBarsStaggered,
} from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <p className="navbar-logo">Logo Estafa Mlibre</p>
        <div className="mx-auto">
          <input type="text" className="search-input" placeholder="Buscar" />
          <button className="search-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          </button>
        </div>
        <div className="mx-5">
          <Dropdown>
            <DropdownToggle className='dropdown-icon'>
              <FontAwesomeIcon icon={faBarsStaggered} className="filter-icon" />
            </DropdownToggle>
            <Dropdown.Menu className='dropdown-items'>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Action 2</DropdownItem>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
