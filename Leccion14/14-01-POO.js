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

    obtenerDetalles() {
        return `Gerente -> ${super.obtenerDetalles()} depto: ${this.departamento}`
    }
}

let gerente1 = new Gerente('Carlos', 15000, 'Sistemas');
console.log(gerente1.obtenerDetalles());