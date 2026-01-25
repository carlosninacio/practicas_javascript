miFuncion(4,6); // Se puede llamar antes de definirla (Hoisting)

function miFuncion(a, b) {
    console.log("Suma: " + (a+b));
}

miFuncion(2,3);


function miFuncion1(a,b) {
    console.log(arguments.length);
    return a + b;
}

let resultado = miFuncion1(2,3);
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