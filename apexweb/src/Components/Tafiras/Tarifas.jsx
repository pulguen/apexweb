import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './Tarifas.css';

const PLANES = [
  { dias: 'X4', precio: 48000, destacado: true },
  { dias: 'X3', precio: 46000, destacado: false },
  { dias: 'X2', precio: 44000, destacado: false },
];

export default function Tarifas() {
  return (
    <>
      <Container className="mt-3 text-center">
        <div className="bloque-titulo">
          <h2 className="titulo">
            <FontAwesomeIcon icon={faDollarSign} className="me-2 icono" />
            Tarifas 2025
          </h2>
          <p className="parrafo meses">Septiembre - Octubre - Noviembre</p>
        </div>
      </Container>

      <Container>
        {PLANES.map((plan) => (
          <div
            key={plan.dias}
            className="tarifa-item d-flex justify-content-between align-items-center mb-3 mx-4"
          >
            <p className="dias">{plan.dias}</p>
            <p className="semana">DÍAS POR SEMANA</p>
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
