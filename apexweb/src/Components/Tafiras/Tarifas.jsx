import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import './Tarifas.css'

export default function Tarifas() {
    return (      
      <>
      <Container className='mt-3'>
        <h2 className='titulo'>Estas son Nuestras Tarifas</h2>        
      </Container>
      <Container className='mt-2'>
        <p className='parrafo'>Septiembre - Octubre - Noviembre</p>
      </Container>
      <Container>
        <div className='d-flex justify-content-between mb-3 mx-4 tarifa-item'>
            <p className='dias'>X5</p> 
            <p className='semana'>DIAS POR SEMANA</p> 
            <p className='precio'>$25.250</p>
        </div>
        <div className='d-flex justify-content-between mb-3 mx-4 tarifa-item'>
            <p className='dias'>X4</p> 
            <p className='semana'>DIAS POR SEMANA</p> 
            <p className='precio'>$24.000</p>
        </div>
        <div className='d-flex justify-content-between mb-3 mx-4 tarifa-item'>
            <p className='dias'>X3</p> 
            <p className='semana'>DIAS POR SEMANA</p> 
            <p className='precio'>$23.750</p>
        </div>
        <div className='d-flex justify-content-between mb-3 mx-4 tarifa-item'>
            <p className='dias'>X2</p> 
            <p className='semana'>DIAS POR SEMANA</p> 
            <p className='precio'>$22.500</p>
        </div>
      </Container>
      <Container className='mt-2'>
        <p className='detalle-tarifas'>Fecha de pago del 1 al 10 de cada mes</p>
        <p className='detalle-tarifas'><strong>Luego recargo del 15%</strong></p>        
      </Container>
      </>
    )
}
