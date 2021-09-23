import React, {useState} from 'react'
import styled from '@emotion/styled'
import useMoneda from '../hooks/useMoneda'

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

const Form =()=>{

    // utilizamos el custom hook useMoneda, siendo moneda el state del custom hook,seleccionar la función del render 
    // y setState la función 

    const [moneda, Seleccionar, setState] = useMoneda('Elige tu Moneda')

    return (
        <form >

            <Seleccionar/>
            <Boton
                type='submit'
                value='calcular'
            />
        </form>
    );
}

export default Form;