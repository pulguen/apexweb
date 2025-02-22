import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import './Tarifas.css';

export default function Tarifas() {
    return (
      <>
        <Container className="mt-3 text-center">
          <h2 className="titulo">Nuestras Tarifas 2025</h2>
        </Container>

        <Container className="mt-2 text-center">
          <p className="parrafo">Marzo - Junio - Julio</p>
        </Container>

        <Container>
          <div className="tarifa-item d-flex justify-content-between align-items-center mb-3 mx-4">
            <p className="dias">X4</p>
            <p className="semana">DÍAS POR SEMANA</p>
            <p className="precio">$34.000</p>
          </div>
          <div className="tarifa-item d-flex justify-content-between align-items-center mb-3 mx-4">
            <p className="dias">X3</p>
            <p className="semana">DÍAS POR SEMANA</p>
            <p className="precio">$32.000</p>
          </div>
          <div className="tarifa-item d-flex justify-content-between align-items-center mb-3 mx-4">
            <p className="dias">X2</p>
            <p className="semana">DÍAS POR SEMANA</p>
            <p className="precio">$30.000</p>
          </div>
        </Container>

        <Container className="mt-2 text-center">
          <p className="detalle-tarifas">Fecha de pago del 1 al 10 de cada mes</p>
          <p className="detalle-tarifas"><strong>Luego recargo del 15%</strong></p>
        </Container>
      </>
    );
}