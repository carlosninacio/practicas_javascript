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