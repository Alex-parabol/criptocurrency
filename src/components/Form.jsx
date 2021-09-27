import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useMoneda from '../hooks/useMoneda'
import Error from './Error'
import useCriptomoneda from '../hooks/useCriptomoneda'
import axios from 'axios'


const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size:20px;
    padding:10px;
    background-color: #66a2fe;
    border:none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`

const Form =({setMoneda, setCryptomoneda})=>{

    const [ listaCripto, setCriptomonedas ] = useState([])
    const [ error, setError ] = useState(false)

    //monedas a utilizar
    const Monedas = [
        {codigo: 'USD', nombre: 'Dolar de Estados  Unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'}
    ];

    // utilizamos el custom hook useMoneda y useCriptomoneda, siendo moneda el state del custom hook,seleccionar la función del render 
    // y setState la función 

    const [ moneda, Seleccionar ] = useMoneda('Elige tu Moneda','', Monedas)

    const [ cryptomoneda, SelectCrypto ] = useCriptomoneda('Elige tu Cryptomoneda','', listaCripto)

    // Llamamos a la API

    useEffect (() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url)
            setCriptomonedas(resultado.data.Data)
        }
        consultarAPI()
    }, [])

    //cuando el usuario hace submit

    const handleChange = e =>{
        e.preventDefault();
        // validamos si ambos campos están llenos

        if( moneda === '' || cryptomoneda === ''){
            setError(true)
            return;
        } else {
            setError(false)
        }

        //pasamos moneda y crypto al componente principal a través de las props.
        setMoneda(moneda);
        setCryptomoneda(cryptomoneda)
        

    }

    return (
        <form 
            onSubmit={handleChange}
        >
            {error ? <Error mensaje='Todos los campos son obligatorios' /> : null}
            <Seleccionar/>
            <SelectCrypto/>
            <Boton
                type='submit'
                value='calcular'
            />
        </form>
    );
}

export default Form;