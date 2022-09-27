import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import carritos from '../../assets/carritos.jpg';
import './error404.css';

const error404 = () => {
  return (
    <div className=" backgroud-general">
      <div className="d-flex justify-content-center my-5">
        <Image className="" src={carritos} rounded />
      </div>
      <div className="d-flex justify-content-center">
      <h5 className="w-50 text-center text-light">Estamos experimentando problemas técnicos y
       no logramos encontrar la pagina que buscas,
        inténtalo nuevamente mas tarde si tenes ganas.</h5>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Link className="btn home border-0  " to={'/'}>
          <FontAwesomeIcon icon={faHome} className="fa-3x"></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
};

export default error404;
