import React from 'react';
import './App.css';
import Navbar from'./Components/Navbar/Navbar.jsx';
import Header from './Components/Header/Header.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Location from './Components/Location/Location.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Tarifas from './Components/Tafiras/Tarifas.jsx';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Contact />
      <Tarifas />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
