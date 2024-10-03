import React, { useState } from "react";

function FormularioUsuario() {
    const [nombre, setNombre] = useState("");

    const changeC = (evento) => {
        setNombre(evento.target.value);
    }



    const changeEnvio = (evento) => {
        evento.preventDefault();
        alert(`Hola, ${nombre}.`)

        //reset
        setNombre('');

    };
    return (
        <form onSubmit={changeEnvio}>
            <div>
                <label>

                    <p>&nbsp;Ingrese su nombre en la casilla.</p>
                    &nbsp;Nombre: &nbsp;
                    <input type="text"
                        value={nombre}
                        onChange={changeC} />
                </label>
            </div>&nbsp;
            <button type="submit"> Enviar </button>
        </form >
    );
}
export default FormularioUsuario;