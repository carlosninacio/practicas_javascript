// Constructor de objetos de tipo Persona
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let persona = {
    nombre: 'Karen',
    apellido: 'Perez',
    email: 'karen@gmail.com',
    edad: 18,
    idioma: 'es',
    get lang() {
        return this.idioma.toUpperCase();
    },
    set lang(lang) {
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto); // Con get no es necesario los parentesis
console.log(persona.lang);
persona.lang = 'es_col';
console.log(persona.lang);