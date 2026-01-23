let condicion = false;

if (condicion) {
    console.log("Condición verdadera")
} else {
    console.log("Condición falsa")
}

// Ejercicio
let numero = 3;

if(numero == 1) {
    console.log("Número 1")
} else if(numero == 2) {
    console.log("Número 2")
} else if(numero == 3) {
    console.log("Número 3");
} else {
    console.log("Número distinto")
}

let mes = 6;
let estacion;

if (mes == 1 || mes == 2 || mes == 12) {
    estacion = "Invierno";
} else if (mes == 3 || mes == 4 || mes == 5) {
    estacion = "Primavera";
} else if (mes == 6 || mes == 7 || mes == 8) {
    estacion = "Verano";
} else if (mes == 9 || mes == 10 | mes == 11) {
    estacion = "Otoño";
} else {
    estacion = "Valor incorrecto";
}

console.log(estacion);

/*
Ejercicio: Imprimir mensaje según hora del día:
6am-11am - Buenos días
12pm-18pm - Buenas tardes
19pm-24pm - Buenas noches
0am-6am - Durmiendo
*/

let horaDia = 19;
let mensaje;

if (horaDia>=6 && horaDia<=11) {
    mensaje = "Buenos días";
} else if (horaDia>=12 && horaDia<=18) {
    mensaje = "Buenas tardes";
} else if (horaDia>=19 && horaDia<=24) {
    mensaje = "Buenas noches";
} else if (horaDia>=0 && horaDia<6) {
    mensaje = "Durmiendo";
} else {
    mensaje = "Valor incorrecto!";
}

console.log(mensaje);