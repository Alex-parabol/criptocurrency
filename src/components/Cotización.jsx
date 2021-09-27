import React from 'react'
import styled from '@emotion/styled'

const Lista = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;

    .big {
        font-size: 28px;
    }

    p {
        font-size: 18px;

        span {
            font-weight: bold;
        }
    }
`;

const Cotizacion =({resultado})=>{
    if(Object.keys(resultado).length === 0) return null;
    console.log(resultado)
    return (
        <Lista>
            <p className='big'>El precio es: <span>{resultado.PRICE}</span></p>
            <p>Precio más alto del día: <span>{resultado.HIGHDAY}</span></p>
            <p>Precio más bajo del día: <span>{resultado.LOWDAY}</span></p>
            <p>Variación en las últimas 24h: <span>{resultado.CHANGEPCT24HOUR}</span></p>
            <p>Última Actualización: <span>{resultado.LASTUPDATE}</span></p>
        </Lista>
    );
}

export default Cotizacion;