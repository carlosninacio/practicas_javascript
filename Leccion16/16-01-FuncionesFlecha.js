function miFuncion () {
    console.log('Saludos desde mi función')
}

miFuncion();

// Funciones Anonimas

let miFuncion1 = function () {
    console.log('Saludos desde mi función anonima');
}

miFuncion1();

// Funciones flecha - No se les aplica Hoisting, se deben llamar despues de creadas

let miFuncionFlecha = () => {
    console.log('Saludos desde mi función flecha');
}

miFuncionFlecha();

const miFuncionFlecha1 = () => console.log('Saludos desde funcion flecha sin abrir cuerpo');

miFuncionFlecha1();

const saludar = () => {
    return 'Saludos desde función flecha';
}

console.log(saludar());

const saludar1 = () => 'Saludos desde función flecha';
console.log(saludar1());

const regresarObjeto = () => ({nombre: 'Carlos', apellido: 'Ramirez'});
console.log(regresarObjeto());

// const funcionConParametros = (mensaje) => console.log(mensaje);
const funcionConParametros = mensaje => console.log(mensaje);
funcionConParametros('Saludos con parametros');

const funcionConParametrosClasico = function (mensaje) {
    console.log(mensaje);
}

// const funcionConVariosParametros = (op1,op2) => op1 + op2;
const funcionConVariosParametros = (op1,op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
}
console.log(funcionConVariosParametros(2,3));