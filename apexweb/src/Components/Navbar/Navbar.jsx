import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './img/logo-primary.png';
import './Navbar.css';

export default function CustomNav() {
  return (
    <Container>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="/home" className="d-flex align-items-center">
            <img alt="logo apex" src={logo}  className="d-inline-block align-top logo" />
            <span className="logotipo">APEX</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

