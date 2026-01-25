let x = 10;

let persona = {
    nombre: 'Karen',
    apellido: 'Perez',
    email: 'karen@gmail.com',
    edad: 18,
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.nombreCompleto());

console.log(persona);