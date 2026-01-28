// HERENCIA EN JAVASCRIPT

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

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    nombreCompleto() {
        return this._nombre + ' ' + this._apellido;
    }

    // Sobreescribiendo el metodo de la clase padre Object
    toString() {
        // Se aplica poliformismo
        return this.nombreCompleto();
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido); // Llamar al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }

    // Sobreescritura (modificar comportamiento del metodo de la clase padre)
    nombreCompleto() {
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Carlos', 'Ramirez');
console.log(persona1);
console.log(persona1.toString());

let empleado1 = new Empleado('Karen','Ordonez', 'Salud');
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.departamento);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString())