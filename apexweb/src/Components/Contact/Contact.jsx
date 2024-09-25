import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Contact.css';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';

function Contact() {
  // Define un estado para cada collapse
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <>
      <Container className='mt-3'>
        <h3 className='titulo'>¡Escribinos! brindamos planes de entrenamiento 100% personalizado.</h3>
      </Container>

      {/* Primer Botón */}
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
          onClick={() => setOpen1(!open1)}
          aria-controls="example-collapse-text-1"
          aria-expanded={open1}
          className='btn-link'
          variant="link">
          +info
        </Button>
      </Container>
      <Collapse in={open1}>
        <div id="example-collapse-text-1">
          <Card border="primary" style={{ width: '100%' }}>
            <Card.Header>Perfil Coach</Card.Header>
            <Card.Body>
              <Card.Title className='titulo titulo-contact'>Prof. Educación Física</Card.Title>
              <Card.Text className='parrafo'>
                Más allá de la fuerza nivel 1 y 2.<br/>
                Métodos y programas de entrenamiento.<br/>
                Mí forma de planificar de Ezequiel Costa.<br/>
                Instructorado de fuerza.<br/>
                Planificación de fuerza nivel 1 y 2.<br/>
                Personal trainer del equipo high fitness.<br/>
                Workshop de powerlifting de JM.<br/>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className='icono-horario'>
            <FontAwesomeIcon icon={faCalendarDays} size="2x" className='time-icon' />
            <h4 className='titulo'>Horarios</h4>
          </div>
          <div className='contenedor-horarios'>
            <p className='parrafo'>🔼 Lunes a Viernes de 15:00 a 19:00 hs.</p>            
            <p className='parrafo'>🔼 Martes y Jueves de 16:00 a 18:00 hs.</p>
            <p className='parrafo'>🔼 Miércoles de 16:00 a 19:00 hs.</p>
          </div>
        </div>
      </Collapse>

      {/* Segundo Botón */}
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
          onClick={() => setOpen2(!open2)}
          aria-controls="example-collapse-text-2"
          aria-expanded={open2}
          className='btn-link'
          variant="link">
          +info
        </Button>
      </Container>
      <Collapse in={open2}>
        <div id="example-collapse-text-2">
          <Card border="primary" style={{ width: '100%' }}>
            <Card.Header>Perfil Coach</Card.Header>
            <Card.Body>
              <Card.Title className='titulo titulo-contact'>Prof. Educación Física</Card.Title>
              <Card.Text className='parrafo'>
                Más allá de la fuerza nivel 1 y 2.<br/>
                Métodos y programas de entrenamiento.<br/>
                Mí forma de planificar de Ezequiel Costa.<br/>
                Instructorado de fuerza.<br/>
                Planificación de fuerza nivel 1 y 2.<br/>
                Personal trainer del equipo high fitness.<br/>
                Workshop de powerlifting de JM.<br/>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className='icono-horario'>
            <FontAwesomeIcon icon={faCalendarDays} size="2x" className='time-icon' />
            <h4 className='titulo'>Horarios</h4>
          </div>
          <div className='contenedor-horarios'>
            <p className='parrafo'>🔼 Lunes a Viernes de 8:00 a 12:00 hs.</p>
            <p className='parrafo'>🔼 Miércoles de 20:00 a 22:00 hs.</p>
            <p className='parrafo'>🔼 Viernes de 20:00 a 23:00 hs.</p>
          </div>
        </div>
      </Collapse>

      {/* Tercer Botón */}
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
          onClick={() => setOpen3(!open3)}
          aria-controls="example-collapse-text-3"
          aria-expanded={open3}
          className='btn-link'
          variant="link">
          +info
        </Button>
      </Container>
      <Collapse in={open3}>
        <div id="example-collapse-text-3">
          <Card border="primary" style={{ width: '100%' }}>
            <Card.Header>Perfil Coach</Card.Header>
            <Card.Body>
              <Card.Title className='titulo titulo-contact'>Prof. Educación Física</Card.Title>
              <Card.Text className='parrafo'>
                Más allá de la fuerza nivel 1 y 2.<br/>
                Métodos y programas de entrenamiento.<br/>
                Mí forma de planificar de Ezequiel Costa.<br/>
                Instructorado de fuerza.<br/>
                Planificación de fuerza nivel 1 y 2.<br/>
                Personal trainer del equipo high fitness.<br/>
                Workshop de powerlifting de JM.<br/>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className='icono-horario'>
            <FontAwesomeIcon icon={faCalendarDays} size="2x" className='time-icon' />
            <h4 className='titulo'>Horarios</h4>
          </div>
          <div className='contenedor-horarios'>
            <p className='parrafo'>🔼 Lunes, Miércoles y Viernes de 13:00 a 15:00 hs.</p>
          </div>
        </div>
      </Collapse>

      {/* Cuarto Botón */}
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
          onClick={() => setOpen4(!open4)}
          aria-controls="example-collapse-text-4"
          aria-expanded={open4}
          className='btn-link'
          variant="link">
          +info
        </Button>
      </Container>
      <Collapse in={open4}>
        <div id="example-collapse-text-4">
          <Card border="primary" style={{ width: '100%' }}>
            <Card.Header>Perfil Coach</Card.Header>
            <Card.Body>
              <Card.Title className='titulo titulo-contact'>Prof. Educación Física</Card.Title>
              <Card.Text className='parrafo'>
                Más allá de la fuerza nivel 1 y 2.<br/>
                Métodos y programas de entrenamiento.<br/>
                Mí forma de planificar de Ezequiel Costa.<br/>
                Instructorado de fuerza.<br/>
                Planificación de fuerza nivel 1 y 2.<br/>
                Personal trainer del equipo high fitness.<br/>
                Workshop de powerlifting de JM.<br/>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className='icono-horario'>
            <FontAwesomeIcon icon={faCalendarDays} size="2x" className='time-icon' />
            <h4 className='titulo'>Horarios</h4>
          </div>
          <div className='contenedor-horarios'>
            <p className='parrafo'>🔼 Lunes de 20:00 a 22:00 hs.</p>
            <p className='parrafo'>🔼 Martes y Jueves 18:00 a 23:00 hs.</p>

          </div>
        </div>
      </Collapse>
    </>
  );
}

export default Contact;
