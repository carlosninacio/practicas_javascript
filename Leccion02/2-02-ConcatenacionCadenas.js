var nombre = 'Carlos';
var apellido = 'Ramirez';

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);
console.log(typeof nombre);

var x = nombre + 2 + 4; // Se trata el numero como cadena porque va de izquierda a derecha
console.log(x);

x = nombre + (2 + 4);
console.log(x);

x = 2+4+nombre;
console.log(x);