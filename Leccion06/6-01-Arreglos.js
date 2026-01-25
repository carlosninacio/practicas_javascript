// let autos = new Array('BMW', 'Mercedes Benz', 'Volvo'); // Forma antigua de declarar arreglo
const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);
console.log(autos[0]);

for(let i = 0; i < autos.length; i++) {
    console.log(i + ': ' + autos[i]);
}

autos[1] = 'MercedesBenz';
console.log(autos[1]);

autos.push("Audi");
console.log(autos);
console.log(autos.length);

console.log(Array.isArray(autos));
console.log(autos instanceof Array);