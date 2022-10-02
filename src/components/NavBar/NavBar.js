import React, { useState } from 'react';
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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-estafa-libre.png';
import { setqueryResults } from '../../app/querySlice';

const NavBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const searchOnClick = () => {
    dispatch(setqueryResults(searchValue));
  };
  const handleChange = (e) => {
    const { value } = e.target;
    if (e.key === 'Enter' && location.pathname !== '/search') {
      searchOnClick();
      navigate('/search');
    } else if (e.key === 'Enter') {
      searchOnClick();
    } else {
      setSearchValue(value + e.key);
    }
  };

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
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
                  onKeyPress={handleChange}
                />
                <Link to={'/search'}>
                  <button className="search-button" data-testid='searchButton'>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="search-icon"
                      onClick={searchOnClick}
                    />
                  </button>
                </Link>
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
