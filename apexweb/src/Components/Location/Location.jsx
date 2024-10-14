import React from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'; // Cambiado al paquete correcto
import './Location.css'

function Contact() {
  return (
    <>
      <Container className='mt-4 mb-3'>
        <h3 className='titulo'>¿Dónde estamos? vení a conocernos.</h3>
        
        <p className='parrafo'>
          <FontAwesomeIcon icon={faLocationDot} size='2x' className='location-icon' /> 
          Uriburu 360, 8340 Zapala, Neuquén
        </p>
                
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.1884186904374!2d-70.06391688466493!3d-38.90062597957008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960bca1e25557771%3A0xa0b376f35ed33ae7!2sUriburu%20360%2C%20Q8340BQH%20Zapala%2C%20Neuqu%C3%A9n%2C%20Argentina!5e0!3m2!1ses-419!2sus!4v1690565038371!5m2!1ses-419!2sus"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Container>
    </>
  );
}

export default Contact;








