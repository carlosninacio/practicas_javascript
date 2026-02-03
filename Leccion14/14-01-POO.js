class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles() {
        return `Empelado -> nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre,sueldo,departamento) {
        super(nombre,sueldo);
        this.departamento = departamento;
    }

    // Sobreescritura de metodo
    obtenerDetalles() {
        return `Gerente -> ${super.obtenerDetalles()} depto: ${this.departamento}`
    }
}

function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente) {
        console.log('Es un objeto de tipo gerente');
    } if (tipo instanceof Empleado) {
        console.log('Es un tipo empleado');
    } if (tipo instanceof Object) {
        console.log('Es un tipo object');
    }
}

let empleado1 = new Empleado('Karen', 20000);
console.log(empleado1.obtenerDetalles());

let gerente1 = new Gerente('Carlos', 15000, 'Sistemas');
console.log(gerente1.obtenerDetalles());

imprimir(gerente1);
imprimir(empleado1);