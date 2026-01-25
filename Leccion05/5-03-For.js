for(let contador = 0; contador < 3; contador++) {
    console.log(contador);
}
console.log("Fin del Ciclo For");

// Ciclo for con break
for(let contador1 = 0; contador1 <= 10; contador1++) {
    if(contador1 % 2 == 0) {
        console.log(contador1);
        break;
    }
}
console.log("Fin del ciclo for para el primer numero par (con break)");