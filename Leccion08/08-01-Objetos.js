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


// Forma 2 de crear objetos, menos común
let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'Avenida 8E Quinta Oriental';
persona2.cel = '3004669565';

console.log(persona2.cel)
console.log(persona2);

// Mas formas de acceder a propiedades del objeto
console.log(persona['email']);

for(nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

persona.tel = '55443322'; // Se crea nueva propiedad
persona.tel = '44332211'; // Se modifica la propiedad
console.log(persona);

delete persona.tel; // Eliminar propiedad
console.log(persona);