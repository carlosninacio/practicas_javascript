/*
Ejemplos de tipos de datos en JS
*/

// String
var nombre = "Karen";
console.log(typeof nombre);
console.log(nombre);

// Numerico
var numero = 27;
console.log(typeof numero);
console.log(numero);

// Object
var objeto = {
    nombre : "Kiwi",
    apellido : "Irineo",
    edad : 2
}
console.log(typeof objeto);
console.log(objeto);

// Boolean
var bandera = false;
console.log(typeof bandera);
console.log(bandera);

// Function
function miFuncion() {}
console.log(typeof miFuncion);
console.log(miFuncion);

// Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);
console.log(simbolo);

// Clase es una function
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);
console.log(Persona);

// Undefined
var x;
console.log(typeof x);
console.log(x);

x = undefined;
console.log(typeof x);
console.log(x);

// null = ausencia de valor
var y = null;
console.log(typeof y);
console.log(y);

var autos = ['BMW', 'Audi', 'Volvo'];
console.log(typeof autos);
console.log(autos);

var z = '';
console.log(typeof z);
console.log(z);