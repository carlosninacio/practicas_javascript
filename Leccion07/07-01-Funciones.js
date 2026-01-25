miFuncion(4,6); // Se puede llamar antes de definirla (Hoisting)

function miFuncion(a, b) {
    console.log("Suma: " + (a+b));
}

miFuncion(2,3);


function miFuncion1(a,b) {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b + arguments[2];
}

let resultado = miFuncion1(2,3,1);
console.log(resultado);

// Declaración función de tipo expresion
let x = function (a,b) {return a + b};

resultado = x(1,2);
console.log(resultado);

(function (a, b){
    console.log("Ejecutando la función: " + (a+b));
})(3,4);

console.log(typeof miFuncion1);

var miFuncionTexto = miFuncion1.toString();
console.log(miFuncionTexto);

// Función tipo flecha
const sumarFuncionTipoFlecha = (a,b) => a+b;
resultado = sumarFuncionTipoFlecha(3,5);
console.log(resultado);

let resultadoTodo = sumarTodo(5, 4, 13, 10, 9);
console.log(resultadoTodo);

function sumarTodo() {
    let suma = 0;
    for(let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}

// Paso por referencia
const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

console.log(persona);

function cambiarValorObjeto(p1) {
    p1.nombre = 'Carlos';
    p1.apellido = 'Ramirez';
}

cambiarValorObjeto(persona);
console.log(persona);