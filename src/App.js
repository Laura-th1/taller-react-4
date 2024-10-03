import React, { useState } from "react";

//Ejercicio 1//
import ButtonClick from "./ButtonClick";


const App = () => {
    return (
        <div>
            <h1>&nbsp;Ejercicio 1: Manejo de eventos</h1>
            <ButtonClick />

        </div>
    );
}
export default App;



// Ejercicio 2//
// import FormularioUsuario from "./FormularioUsuario";

// const App = () => {
//     return (
//         <div>
//             <h1> Ejercicio 2: Creación y gestión de formularios</h1>
//             <FormularioUsuario />
//         </div>
//     );
// }
// export default App;


//Ejercicio 3//


// import Formulario from './Formulario';
// import Resultado from './Resultado';

// const App = () => {
//     const [num, setNum] = useState('');

//     const changeC = (nuevoNum) => {
//         setNum(nuevoNum);
//     };

//     return (
//         <div>
//             <h1> &nbsp;Ejercicio 3: Lifting State Up</h1>
//             <Formulario changeC={changeC} />
//             <Resultado num={num} />
//         </div>
//     );
// };

// export default App;