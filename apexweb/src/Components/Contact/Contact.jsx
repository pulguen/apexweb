import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import './Contact.css';

function Contact() {
  const [openSections, setOpenSections] = useState({
    Emanuel: false,
    David: false,
    Leandro: false,
    Paula: false
  });

  const toggleSection = (name) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [name]: !prevState[name]
    }));
  };

  const coaches = [
    {
      nombre: "Emanuel Sepulveda",
      whatsapp: "https://wa.me/542942348241",
      horarios: [
        { dia: "Lunes, Miércoles y Viernes", horas: "15 a 20 hs", cupos: "Cupos disponibles" },
        { dia: "Martes y Jueves", horas: "15 a 19 hs", cupos: "Cupos disponibles" },
      ],
      perfil: [
        "Entrenador de Fuerza (CPC 1 y 2)",
        "Entrenador de Levantamiento Olímpico",
        "Hiit",
        "Rehabilitación y salud"
      ],
      id: "Emanuel"
    },
    {
      nombre: "David Follonier",
      whatsapp: "https://wa.me/542942616781",
      horarios: [{ dia: "Lunes a Viernes", horas: "8 a 11 hs", cupos: "Cupos disponibles" }],
      perfil: [
        "Más allá de la fuerza nivel 1 y 2",
        "Métodos y programas de entrenamiento",
        "Instructorado de fuerza",
        "Planificación de fuerza nivel 1 y 2"
      ],
      id: "David"
    },
    {
      nombre: "Leandro Figueroa",
      whatsapp: "https://wa.me/542942447165",
      horarios: [
        { dia: "Lunes y Viernes", horas: "20 a 23 hs", cupos: "Cupos disponibles" },
        { dia: "Martes y Jueves", horas: "19 a 23 hs", cupos: "Cupos disponibles" }
      ],
      perfil: [
        "Coach en Apex desde 2023",
        "Entrenamiento de Fuerza",
        "Nutrición Deportiva",
        "Entrenamiento para adultos mayores"
      ],
      id: "Leandro"
    },/*
    {
      nombre: "Paula Garcia",
      whatsapp: "https://wa.me/542942657202",
      horarios: [{ dia: "Lunes, Miércoles y Viernes", horas: "20 a 22 hs", cupos: "Cupos disponibles" }],
      perfil: [
        "Coach de Powerlifting",
        "Entrenadora de Fuerza y Rehabilitación",
        "Personal Trainer",
        "Atleta de Powerlifting"
      ],
      id: "Paula"
    }*/
  ];

  return (
    <Container className="mt-3">
      <h3 className="titulo">¡Escribinos! brindamos planes de entrenamiento 100% personalizados.</h3>
      <p className="parrafo">
        Estamos comprometidos en ofrecerte el plan de entrenamiento perfecto que se adapte a tus objetivos y necesidades.
        Contáctanos para obtener más información sobre nuestros horarios y entrenadores.
      </p>      

      {coaches.map((coach) => (
        <Container key={coach.id} className="mt-3">
          <div className="entrenador-item d-flex justify-content-between align-items-center">
            <Button
              className="btn-wpp"
              variant="outline-primary"
              href={coach.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="1x" className="wpp-icon" />
              <span className="wpp-text">{coach.nombre}</span>
            </Button>
            <Button onClick={() => toggleSection(coach.id)} className="btn-link" variant="link">
              +info
            </Button>
          </div>

          <Collapse in={openSections[coach.id]}>
            <div className="perfil-container">  
              <Card className="perfil-card">
                <Card.Body>
                  <Card.Title className="titulo-contact">Prof. Educación Física</Card.Title>
                  <Card.Text className="parrafo">
                    {coach.perfil.map((item, idx) => (
                      <span key={idx}>• {item}<br /></span>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>

              <div className="icono-horario">
                <FontAwesomeIcon icon={faCalendarDays} size="2x" className="time-icon" />
                <h4 className="horarios-titulo">Horarios</h4>
              </div>

              <div className="contenedor-horarios">
                {coach.horarios.map((horario, idx) => (
                  <div key={idx} className="horario-item">
                    <p className="dias">{horario.dia}</p>
                    <p className="horas">{horario.horas}</p>
                    <span className={`estado-cupo ${horario.cupos === "Cupos disponibles" ? "cupos-disponibles" : "sin-cupos"}`}>
                      {horario.cupos}
                    </span>
                  </div>
                ))}
              </div>
            </div> 
             
          </Collapse>
        </Container>
      ))}
      <p className="parrafo">• Horarios <strong>Diciembre 2025</strong></p>
    </Container>
  );
}

export default Contact;
