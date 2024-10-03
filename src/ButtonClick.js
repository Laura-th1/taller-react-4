import React, { useState } from "react";
import BotonReset from "./ButtonR";

function ButonClick() {
    const [texto, setTexto] = useState('¡Holaa, que tengas bonito día!.');

    const changeClick = () => {
        setTexto('¡Botón clickeado!')
    };

    const changeReset = () => {
        setTexto('¡Holaa, que tengas bonito día!.');
    };

    return (
        <div>
            <p>&nbsp; {texto}</p>
            &nbsp; <button onClick={changeClick}>
                Click Aquí
            </button> &nbsp;
            <BotonReset onReset={changeReset}>
                Volver
            </BotonReset>
        </div>
    );
}
export default ButonClick;