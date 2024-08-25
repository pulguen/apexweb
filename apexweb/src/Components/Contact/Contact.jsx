import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <>
      <Container className='mt-3'>
        <h3 className='titulo'>¡Escribinos! brindamos planes de entrenamiento 100% personalizado</h3>
      </Container>

      <Container className='mt-1 d-flex align-items-center'>
        <Button className='btn-wpp'
          variant="outline-primary" 
          href="https://wa.me/542942348241" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="1x" className='wpp-icon' />
          <span className='wpp-text'>Emanuel Sepulveda</span>
        </Button>
        <Button 
          className='btn-link'
          variant="link">
          +info
        </Button>
      </Container>      

      <Container className='mt-1 d-flex align-items-center'>
        <Button className='btn-wpp'
          variant="outline-primary" 
          href="https://wa.me/542942616781" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="1x" className='wpp-icon' />
          <span className='wpp-text'>David Follonier</span>
        </Button>
        <Button 
          className='btn-link'
          variant="link">
          +info
        </Button>
      </Container>  
      <Container className='mt-1 d-flex align-items-center'>
        <Button className='btn-wpp'
          variant="outline-primary" 
          href="https://wa.me/542942645512" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="1x" className='wpp-icon' />
          <span className='wpp-text'>Maximiliano Flores</span>
        </Button>
        <Button 
          className='btn-link'
          variant="link">
          +info
        </Button>
      </Container>  

      <Container className='mt-1 d-flex align-items-center'>
        <Button className='btn-wpp'
          variant="outline-primary" 
          href="https://wa.me/542942447165" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="1x" className='wpp-icon' />
          <span className='wpp-text'>Leandro Figueroa</span>
        </Button>
        <Button 
          className='btn-link'
          variant="link">
          +info
        </Button>
      </Container>  
    </>
  );
}

export default Contact;
