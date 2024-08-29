import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, } from '@fortawesome/free-brands-svg-icons';
import './Header.css';
import Container from 'react-bootstrap/esm/Container';

export default function Header() {
  return (
    <>
    <Container className='mt-3 ml-1'>
      <h2 className='titulo'>¡Hola!¡Somos Apex!</h2>
      <h1 className='encabezado'>Tu camino<br /> Hacia la<br /> Fuerza</h1>
      <p className='parrafo'>Gimnasio de fuerza y acondicionamiento físico dedicado a ayudar a los atletas a alcanzar su máximo potencial.</p>
      <div className=" mt-0 social-links">
        <a href="https://www.facebook.com/profile.php?id=61564456332415" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.tiktok.com/es/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} size="2x" />
        </a>
        <a href="https://www.instagram.com/apex.fuerza.zapala/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      </Container>
    </>
  );
}
