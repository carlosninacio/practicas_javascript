let a = 3, b = 2;
let z = a+b;
console.log(typeof z);
console.log("Resultado suma: " + z);
z = a-b;
console.log("Resultado resta: " + z);
z = a*b;
console.log("Resultado multiplicación: " + z);
z = a/b;
console.log("Resultado división: " + z);
z = a%b;
console.log("Resultado residuo división (modulo): " + z);
z = a**b;
console.log("Resultado exponenciación: " + z);

// Incremento:

// Pre-incremento (simbolo antes de variable ++)
z = ++a;
console.log(a)
console.log(z)
// Post-incremento (simbolo despues de variable ++)
console.log(b)
console.log(z)
z = b++;
console.log(b)
console.log(z)

// Decremento:

//Pre-decremento
z = --a;
console.log(a);
console.log(z);

//Post-decremento
z = b--;
console.log(b)
console.log(z)

// Precedencia de operadores
let a1 = 3, b1 =2, c = 1, d = 4;

let x = a1 * b1 + c / d;
console.log(x);

x = c + a1 * b1 / d;
console.log(x);

x = (c + a1) * b1 / c;
console.log(x);


z = a>b;
console.log(typeof z);
console.log("Resultado comparación a>b: " + z);

// Operadores de asignación

let e = 1;

e += 2;
console.log(e);

e -= 1;
console.log(e);

e *=2;
console.log(e);

e /= 4;
console.log(e);

e **= 2;
console.log(e);

e %= 1;
console.log(e);

let f = 3, g = 2, h = "3";

let o = f == h; // se revisa el valor sin importar el tipo
console.log(o);

o = f === h; // se revisan los valores pero también el tipo
console.log(o)

o = f != h; // para saber si son distintos
console.log(o);

o = f !== h;
console.log(o)

o = f < g;
console.log(o);

o = f <= h;
console.log(o);

o = f > g;
console.log(o);

o = f >= g;
console.log(o);

a = 10;

if(a % 2 == 0) {
    console.log("par")
} else {
    console.log("impar")
}

let edad = 20, adulto = 18;

if (edad >= adulto) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

// Ejemplo AND && los dos true = regresa true
a = 5;
let valMin = 0, valMax = 10;

if (a>=valMin && a<=valMax) {
    console.log("Está en el rango");
} else {
    console.log("No está en el rango");
}

// Ejemplo OR || regresa true si cualquiera de los dos es true
let vacaciones = true, diaDescanso = false;
if (vacaciones || diaDescanso) {
    console.log("Padre puede asistir al juego")
} else {
    console.log("Padre ocupado")
}

// Ejemplo Operador Ternario
let resultado = (1>2) ? "Se cumple" : "No se cumple";
console.log(resultado);

let numero = 3;
resultado = (numero % 2 == 0) ? "Numero Par" : "Numero Impar"
console.log(resultado);

let miNumero = "17x";
console.log(miNumero)
console.log(typeof miNumero);

let edadParseada = Number(miNumero);
console.log(edadParseada);
console.log(typeof edadParseada);

if (isNaN(edadParseada)) {
    console.log("No es un numero")
} else {
    resultado = (edadParseada >= 18) ? "Puede votar" : "No puede votar";
    console.log(resultado);
}


// Incrementos y decrementos
x=5;
y=10;
z= ++x + y--
console.log(x);
console.log(y);
console.log(z);

// Ejercicios de jerarquia de operadores

resultado = 4 + 5 * 6 / 3;
console.log(resultado);

resultado = (4 + 5) * 6 / 3;
console.log(resultado);