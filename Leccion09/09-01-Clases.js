// let persona3 = new Persona('Karen', 'Ordonez'); // No es posible crear objetos antes de declarar la clase. No se aplica Hoisting como funciones

class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Carlos', 'Ramirez');
console.log(persona1);
console.log(persona1.nombre)
persona1.nombre = 'Juan Carlos';
console.log(persona1);
console.log(persona1.nombre)


let persona2 = new Persona('Pedro', 'Sanchez');
console.log(persona2);

let persona3 = new Persona('Karen', 'Ordonez');