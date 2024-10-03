import React from 'react';

const Formulario = ({ changeC }) => {
    const changeInput = (e) => {
        changeC(e.target.value);
    };

    return (
        <div>
            <label>&nbsp;
                Ingrese un número:&nbsp;
                <input type="number" onChange={changeInput} />
            </label>
        </div>

    );
};

export default Formulario;
