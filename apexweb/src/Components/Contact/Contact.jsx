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
  // Estados para controlar la visibilidad de la información de cada coach
  const [open1, setOpen1] = useState(false); // Emanuel
  const [open2, setOpen2] = useState(false); // David
  const [open4, setOpen4] = useState(false); // Leandro
  const [open5, setOpen5] = useState(false); // Paula

  return (
    <>
      <Container className='mt-3'>
        <h3 className='titulo'>¡Escribinos! brindamos planes de entrenamiento 100% personalizados.</h3>
        <p className='parrafo'>
          Estamos comprometidos en ofrecerte el plan de entrenamiento perfecto que se adapte a tus objetivos y necesidades. 
          Contáctanos para obtener más información sobre nuestros horarios y entrenadores.
        </p>
        <p className='parrafo'>• Horarios Marzo</p>
      </Container>

      {/* Emanuel (habilitado con horarios diferenciados) */}
      <Container className='mt-1 d-flex align-items-center'>
        <Button 
          className='btn-wpp'
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
          variant="link"
        >
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
                • Entrenador de Fuerza (CPC 1 y 2)<br/>
                • Entrenador de Levantamiento Olímpico<br/>
                • Hiit<br/>
                • Rehabilitación y salud<br/>                
              </Card.Text>
            </Card.Body>
          </Card>
          <div className='icono-horario'>
            <FontAwesomeIcon icon={faCalendarDays} size="2x" className='time-icon' />
            <h4 className='titulo'>Horarios</h4>
          </div>
          <div className='contenedor-horarios'>
            <p className='parrafo'>
              🔼 Lunes, Miércoles y Viernes: de 16:00 a 19:00 hs. <span className="no-cupos-banner">Sin cupos disponibles</span>
            </p>
            <p className='parrafo'>
              🔼 Martes y Jueves: 15:00 a 18:00 hs. <span style={{ fontStyle: 'italic', color: 'green' }}>Cupos disponibles</span>
            </p>
          </div>
        </div>
      </Collapse>

      {/* David (habilitado con horarios diferenciados) */}
      <Container className='mt-1 d-flex align-items-center'>
        <Button 
          className='btn-wpp'
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
          variant="link"
        >
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
                • Más allá de la fuerza nivel 1 y 2.<br/>
                • Métodos y programas de entrenamiento.<br/>
                • Mi forma de planificar de Ezequiel Costa.<br/>
                • Instructorado de fuerza.<br/>
                • Planificación de fuerza nivel 1 y 2.<br/>
                • Personal trainer del equipo high fitness.<br/>
                • Workshop de powerlifting de JM.<br/>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className='icono-horario'>
            <FontAwesomeIcon icon={faCalendarDays} size="2x" className='time-icon' />
            <h4 className='titulo'>Horarios</h4>
          </div>
          <div className='contenedor-horarios'>
            <p className='parrafo'>
              🔼 Lunes a Viernes: 8:00 a 11:00 hs. <span style={{ fontStyle: 'italic', color: 'green' }}>Cupos disponibles</span>
            </p>
          </div>
        </div>
      </Collapse>

      {/* Leandro (habilitado con horarios diferenciados) */}
      <Container className='mt-1 d-flex align-items-center'>
        <Button 
          className='btn-wpp'
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
          variant="link"
        >
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
                Hola, soy Leandro, profesor de Educación física y Coach en Apex desde Febrero de 2023. Realicé cursos de "Entrenamiento de Fuerza", "Nutrición Deportiva", "Personal Trainer" entre otros. También cuento con planificaciones y seguimientos online, y entrenamiento para adultos mayores. 
                El camino de la fuerza también es el camino a una vida más saludable. Súmate a entrenar con nosotros.
              </Card.Text>
            </Card.Body>
          </Card>
          <div className='icono-horario'>
            <FontAwesomeIcon icon={faCalendarDays} size="2x" className='time-icon' />
            <h4 className='titulo'>Horarios</h4>
          </div>
          <div className='contenedor-horarios'>
            <p className='parrafo'>
              🔼 Lunes y Viernes: 20:00 a 23:00 hs. <span style={{ fontStyle: 'italic', color: 'green' }}>Cupos disponibles</span>
            </p>
            <p className='parrafo'>
              🔼 Martes y Jueves: 18:00 a 23:00 hs. <span style={{ fontStyle: 'italic', color: 'green' }}>Cupos disponibles</span>
            </p>
          </div>
        </div>
      </Collapse>

      {/* Paula (habilitada con indicador visible de "Sin cupos disponibles") */}
      <Container className='mt-1 d-flex align-items-center flex-column'>
        <Container className='d-flex align-items-center'>
          <Button 
            className='btn-wpp'
            variant="outline-primary" 
            href="https://wa.me/542942657202" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="1x" className='wpp-icon' />
            <span className='wpp-text'>Paula Garcia</span>
          </Button>
          <Button 
            onClick={() => setOpen5(!open5)}
            aria-controls="example-collapse-text-5"
            aria-expanded={open5}
            className='btn-link'
            variant="link"
          >
            +info
          </Button>
          <p className="no-cupos-banner" style={{ marginLeft: '10px' }}>
            Sin cupos disponibles
          </p>
        </Container>
        <Collapse in={open5}>
          <div id="example-collapse-text-5">
            <Card border="primary" style={{ width: '100%' }}>
              <Card.Header>Perfil Coach</Card.Header>
              <Card.Body>
                <Card.Title className='titulo titulo-contact'>Prof. Educación Física</Card.Title>
                <Card.Text className='parrafo'>
                  Hola, soy Paula, profesora de Educación física.<br/>
                  • Coach de POWERLIFTING.<br/>
                  • Entrenadora de fuerza aplicada al rendimiento deportivo, la salud, la rehabilitación y la estética.<br/>
                  • Entrenadora de halterofilia.<br/>
                  • Personal trainer.<br/>
                  • Atleta de POWERLIFTING.<br/>
                </Card.Text>
              </Card.Body>
            </Card>
            <div className='icono-horario'>
              <FontAwesomeIcon icon={faCalendarDays} size="2x" className='time-icon' />
              <h4 className='titulo'>Horarios</h4>
            </div>
            <div className='contenedor-horarios'>
              <p className='parrafo'>
                🔼 Lunes, Miércoles y Viernes: 20:00 a 22:00 hs. <span className="no-cupos-banner">Sin cupos disponibles</span>
              </p>
            </div>
          </div>
        </Collapse>
      </Container>
    </>
  );
}

export default Contact;
