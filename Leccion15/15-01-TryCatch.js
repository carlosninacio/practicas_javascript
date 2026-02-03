'use strict'

try {
    let x=10;
    //miFuncion();
    throw 'Mi error'; // Arrojar error propio
} catch(error) {
    console.log(error);
} finally { // Opcional
    console.log('termina revisión de errores');
}

console.log('fuera del try-catch')

// Ejemplo:

let resultado = '5';

try {
    // x=10;
    if (isNaN(resultado)) {
        throw 'No es un número';
    } else if (resultado === '') {
        throw 'Es cadena vacía';
    } else if (resultado >= 0) {
        throw 'Valor positivo';
    } else if (resultado < 0) {
        throw 'Valor negativo';
    }
} catch(error) {
    console.log(error);
    // console.log(error.name);
    // console.log(error.message);
} finally {
    console.log('Termina revisión de errores.')
}