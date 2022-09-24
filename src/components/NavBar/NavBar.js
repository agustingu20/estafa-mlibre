import React, { useState } from 'react';
import './navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faBarsStaggered,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  Container, Dropdown, Nav, Navbar,
} from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import logo from '../../assets/logo-estafa-libre.png';
import useFetch from '../../hooks/useFetch';

const NavBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState('Vehiculos');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const searchOnClick = () => {
    setQuery(searchValue);
  };

  const searchResults = useFetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=12`,
  );
  console.log(searchResults.data?.results);

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo_estafa_mlibre" className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="button-colapse"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-class">
              <div className="mx-auto d-flex justify-content-center">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Buscar"
                  onChange={handleChange}
                />
                <button className="search-button">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="search-icon"
                    onClick={searchOnClick}
                  />
                </button>
              </div>
              <div className="buttons-container">
                <div>
                  <Dropdown>
                    <DropdownToggle className="dropdown-icon">
                      <FontAwesomeIcon
                        icon={faBarsStaggered}
                        className="filter-icon"
                      />
                    </DropdownToggle>
                    <Dropdown.Menu>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Action 2</DropdownItem>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="d-flex justify-content-center">
                  <p className="user-text">User</p>
                  <Dropdown>
                    <DropdownToggle className="dropdown-icon-user">
                      <FontAwesomeIcon icon={faUser} className="filter-icon" />
                    </DropdownToggle>
                    <Dropdown.Menu>
                      <DropdownItem>Perfil</DropdownItem>
                      <DropdownItem>Cerrar Sesión</DropdownItem>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
