import React, {Fragment, useState} from 'react'
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    font-weight: bold;
    font-size: 2rem;
    margin-top: 2rem;
    display:block
`
const Select = styled.select`
    width:100%;
    display: block;
    padding: 1rem;
    --webkit-appearance:none;
    border-radius: 10px;
    border: none;
    font-size: 1.3rem;
`
const useMoneda = (label, initialState, opciones) => {

    // state de nuestro custom hook.
    const [state, setState ] = useState(initialState)

    const selectMoneda = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select 
                onChange={e=> setState(e.target.value)}
                value={state}
            >
            <option value="">--Seleccione--</option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo}  value={opcion.codigo} >{opcion.nombre} </option>
                ))} 
            </Select>
        </Fragment>

    )

    // hacemos return del state, del render y de la fn que modifica el state.

    return [state, selectMoneda, setState ]

};

export default useMoneda;