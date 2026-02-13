import React from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'; // Cambiado al paquete correcto
import './Location.css'

function Location() {
  return (
    <>
      <Container className='mt-4 mb-3'>
        <h3 className='titulo'>¿Dónde estamos? vení a conocernos y entrená con nosotros!.</h3>
        
        <p className='parrafo'>
          <FontAwesomeIcon icon={faLocationDot} size='2x' className='location-icon' /> 
          Chaneton 1130, 8340 Zapala, Neuquen
        </p>
                
        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Chaneton+1130,+Zapala,+Neuquen,+Argentina&output=embed"
          width="100%"
          height="250"
          className="map-frame"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Container>
    </>
  );
}

export default Location;











