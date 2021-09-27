import React, {useState, useEffect } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'
import imagen from './5499459.jpg'
import Form from './components/Form'
import Cotizacion from './components/Cotización'


const Contenedor = styled.div `
 
max-width: 900px;
margin: 0 auto;
@media(min-width:992px){
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap:2rem;
}
 
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 8rem;
`

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`

function App() {

  const [moneda, setMoneda ] = useState('');
  const [cryptomoneda, setCryptomoneda ] = useState('');
  const [ resultado, setResultado ] = useState({})

  useEffect (() => {

    const cotizarCryptomoneda = async () => {
      //evitamos la primera ejecución cuando todo está vacío
    if(moneda === '') return;
    //consultamos api
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}`;
    const resultado = await axios.get(url)
    setResultado(resultado.data.DISPLAY[cryptomoneda][moneda])
    }
  
    cotizarCryptomoneda()

  },[moneda, cryptomoneda])

  return (
    <Contenedor>
    <div>
      <Imagen
        src={imagen}
        alt='imagen cryptos'
      />
      </div>
      <div>
        <Heading>Cotiza Cryptomonedas al momento</Heading>
        <Form
          setMoneda={setMoneda}
          setCryptomoneda={setCryptomoneda}
        />
         <Cotizacion 
        resultado={resultado}
      />
      </div>
     
    </Contenedor>
  );
}

export default App;
