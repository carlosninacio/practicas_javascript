class Persona {

    static contadorObjetosPersona = 0;

    constructor(nombre, apellido) {
        Persona.contadorObjetosPersona++; // Para acceder a atributos estaticos usar la clase, no 'this.'
        this._nombre = nombre;
        this._apellido = apellido;
        console.log('Se incrementa contador a:' + Persona.contadorObjetosPersona);
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

    static saludar() {
        console.log('Saludos desde metodo estatico');
    }

    static saludar2(persona) {
        console.log('Saludos ' + persona.nombre + ' ' + persona.apellido);
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
console.log(empleado1.toString());

/*
persona1.saludar();
Los metodos estaticos se asocian con la clase, no con los objetos
*/
Persona.saludar();

// Se puede enviar el objeto como parametro
Persona.saludar2(persona1);

// Se pueden ejecutar metodos estaticos desde clases hijas
Empleado.saludar();
Empleado.saludar2(empleado1);

// ATRIBUTOS ESTATICOS. SOLO SE PUEDEN ACCEDER DESDE LA CLASE, NO LOS OBJETOS
console.log(persona1.contadorObjetosPersona); // esto no es la variable estatica
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);