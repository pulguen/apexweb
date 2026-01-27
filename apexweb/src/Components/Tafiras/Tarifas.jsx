import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './Tarifas.css';

const PLANES = [
  { dias: 'X4', precio: 52000, destacado: true },
  { dias: 'X3', precio: 50000, destacado: false },
  { dias: 'X2', precio: 48000, destacado: false },
];

export default function Tarifas() {
  return (
    <>
      <Container className="mt-3 text-center">
        <div className="bloque-titulo">
          <h2 className="titulo">
            <FontAwesomeIcon icon={faDollarSign} className="me-2 icono" />
            Tarifas
          </h2>
          <p className="parrafo meses"></p>
        </div>
      </Container>

      <Container>
        <div className="tarifa-header d-flex justify-content-between align-items-center mx-4">
          <p className="header-dias">DÍAS POR SEMANA</p>
          <span className="header-spacer" aria-hidden="true"></span>
          <p className="header-precio">PRECIO</p>
        </div>
        {PLANES.map((plan) => (
          <div
            key={plan.dias}
            className="tarifa-item d-flex justify-content-between align-items-center mb-3 mx-4"
          >
            <p className="dias">{plan.dias}</p>
            <span className="semana-spacer" aria-hidden="true"></span>
            <div className="text-end">
              <p className="precio">${plan.precio.toLocaleString('es-AR')}</p>
              {plan.destacado && (
                <small className="badge-destacado">¡El más completo para Atletas!</small>
              )}
            </div>
          </div>
        ))}
      </Container>

      <Container className="mt-2 text-center">
        <p className="detalle-tarifas">Fecha de pago del 1 al 10 de cada mes</p>
        <p className="detalle-tarifas">
          <strong>Luego recargo del 15%</strong>
        </p>
      </Container>
    </>
  );
}


