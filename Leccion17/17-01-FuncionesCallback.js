function miFuncion1() {
    console.log('Función 1');
}

function miFuncion2() {
    console.log('Funcion 2');
}

// Las llamadas a las funciones son secuenciales
miFuncion1();
miFuncion2();

// Función de tipo callback
let imp = function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback) {
    let resultado = op1 + op2;
    funcionCallback(`Resultado: ${resultado}`);
}

sumar(5,3,imp);

// Llamadas asíncronas con uso setTimeout
function miFuncionCallback() {
    console.log('Saludo asíncrono depués de 3 seg.')
}

setTimeout(miFuncionCallback, 3000);
setTimeout(function(){console.log('Saludo asíncrono 2')}, 4000);

setTimeout(() => console.log('Saludo asincrono 3'), 1000);

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj,2000); // 2 segundos