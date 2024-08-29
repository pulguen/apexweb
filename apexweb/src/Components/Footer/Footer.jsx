import React from 'react';
import logo from './img/logo-secundary.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={6} className="mb-3">
            <div className="d-flex align-items-center contenedor-logo-footer">
              <img alt="logo apex" src={logo} className="logo-footer" />
              <span className="logotipo-footer">APEX</span>
            </div>
            <p className="mt-3 titulo-footer">La fuerza que buscas<br/>está a un solo paso.<br />¡Da ese paso hoy mismo!</p>
          </Col>
          <Col md={6} className="text-center">
            <p className='titulo-redes-footer'>Síguenos en las redes sociales</p>
            <Nav className="justify-content-center">
              <div className="social-links links-footer">
                <a href="https://www.facebook.com/profile.php?id=61564456332415" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} size="2x" color="white" />
                </a>
                <a href="https://www.tiktok.com/es/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTiktok} size="2x" color="white" />
                </a>
                <a href="https://www.instagram.com/apex.fuerza.zapala/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
                </a>
              </div>
            </Nav>
          </Col>
        </Row>
        <hr className="border-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0 pie">&copy; 2024 APEX. Todos los derechos reservados.</p>
            <i className="mb-0 pie">by Taller de Otto.</i>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
