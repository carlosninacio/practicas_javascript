// Constructor de objetos de tipo Persona
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function() {
        return this.nombre + ' ' + this.apellido;
    }
    
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

let padre = new Persona('Juan', 'Perez', 'juan@gmail.com');
console.log(padre);
console.log(padre.tel);


let madre = new Persona('Juana', 'Perez', 'juanitaperez@gmail.com');
console.log(madre);
console.log(madre.tel);

Persona.prototype.tel = '44332211'; // metodo prototype y valor por default
console.log(padre.tel);
console.log(madre.tel);

padre.tel = '3004669565';
console.log(padre.tel);
console.log(madre.tel);

padre.nombre = 'Carlos';
console.log(padre);
console.log(padre.nombreCompleto());

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(true);
let miBoolean2 = true;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function() {
};