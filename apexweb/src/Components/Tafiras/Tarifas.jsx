import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import './Tarifas.css';

export default function Tarifas() {
    return (
      <>
        <Container className="mt-3 text-center">
          <h2 className="titulo">Nuestras Tarifas 2024</h2>
        </Container>

        <Container className="mt-2 text-center">
          <p className="parrafo">Septiembre - Octubre - Noviembre</p>
        </Container>

        <Container>
          <div className="tarifa-item d-flex justify-content-between align-items-center mb-3 mx-4">
            <p className="dias">X5</p>
            <p className="semana">DIAS POR SEMANA</p>
            <p className="precio">$25.250</p>
          </div>
          <div className="tarifa-item d-flex justify-content-between align-items-center mb-3 mx-4">
            <p className="dias">X4</p>
            <p className="semana">DIAS POR SEMANA</p>
            <p className="precio">$24.000</p>
          </div>
          <div className="tarifa-item d-flex justify-content-between align-items-center mb-3 mx-4">
            <p className="dias">X3</p>
            <p className="semana">DIAS POR SEMANA</p>
            <p className="precio">$23.750</p>
          </div>
          <div className="tarifa-item d-flex justify-content-between align-items-center mb-3 mx-4">
            <p className="dias">X2</p>
            <p className="semana">DIAS POR SEMANA</p>
            <p className="precio">$22.500</p>
          </div>
        </Container>

        <Container className="mt-2 text-center">
          <p className="detalle-tarifas">Fecha de pago del 1 al 10 de cada mes</p>
          <p className="detalle-tarifas"><strong>Luego recargo del 15%</strong></p>
        </Container>
      </>
    );
}