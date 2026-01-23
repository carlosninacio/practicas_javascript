let numero = 4;
let numeroTexto = "Valor desconocido"

switch(numero) {
    case 1:
        numeroTexto = "Numero 1";
        break;
    case 2:
        numeroTexto = "Numero 2";
        break;
    case 3:
        numeroTexto = "Numero 3";
        break;
    default:
        numeroTexto = "Caso no encontado";
}

console.log(numeroTexto);

let mes = 19;
let estacion = "Estacion desconocidad";

switch (mes) {
    case 1: case 2: case 12:
        estacion = "Invierno";
        break;
    case 3: case 4: case 5:
        estacion = "Primmavera";
        break;
    case 6: case 7: case 8:
        estacion = "Verano";
        break;
    case 9: case 10: case 11:
        estacion = "Otoño";
        break;
    default:
        estacion = "Valor incorrecto";
}

console.log(estacion);