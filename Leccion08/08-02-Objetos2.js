let persona = {
    nombre: 'Karen',
    apellido: 'Perez',
    email: 'karen@gmail.com',
    edad: 18,
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto); // Con get no es necesario los parentesis