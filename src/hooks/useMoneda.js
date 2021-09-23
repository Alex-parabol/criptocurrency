import React, {Fragment, useState} from 'react'

const useMoneda = () => {

    // state de nuestro custom hook.
    const [state, setState ] = useState('')

    const Seleccionar = () => (
        <Fragment>
            <label>Moneda</label>
            <select name="" id="">
                <option value="MXN">Peso mexicano</option>
            </select>
        </Fragment>

    )

    // hacemos return del state, del render y de la fn que modifica el state.

    return [state, Seleccionar, setState ]

};

export default useMoneda;