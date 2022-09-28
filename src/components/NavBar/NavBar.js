import React, { useEffect, useState } from 'react';
import './navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import {
  faMagnifyingGlass,
  faBarsStaggered,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  Container, Dropdown, Nav, Navbar,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import logo from '../../assets/logo-estafa-libre.png';
import { setSearchResults } from '../../app/searchSlice';

const NavBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState('Vehiculos');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const searchResults = useFetch(
    `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=12`,
  );

  const searchOnClick = () => {
    setQuery(searchValue);
  };

  useEffect(() => {
    dispatch(setSearchResults(searchResults.data?.results));
  }, [searchResults]);

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
                  <Link to={'/search'}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="search-icon"
                      onClick={searchOnClick}
                    />
                  </Link>
                </button>
              </div>
              <div className="buttons-container">
                <div>
                  <Dropdown>
                    <Dropdown.Toggle className="dropdown-icon">
                      <FontAwesomeIcon
                        icon={faBarsStaggered}
                        className="filter-icon"
                      />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Action 2</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="d-flex justify-content-center">
                  <p className="user-text">User</p>
                  <Dropdown>
                    <Dropdown.Toggle className="dropdown-icon-user">
                      <FontAwesomeIcon icon={faUser} className="filter-icon" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Perfil</Dropdown.Item>
                      <Dropdown.Item>Cerrar Sesión</Dropdown.Item>
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
