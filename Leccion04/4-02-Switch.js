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