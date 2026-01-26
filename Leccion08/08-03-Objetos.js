let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel) {
        return titulo + ': ' +this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

// Uso de call para usar el metodo persona1.nombreCompleto con los datos de persona2
console.log(persona1.nombreCompleto('Lic', '3183314474'));
console.log(persona1.nombreCompleto.call(persona2, 'Ing', '3004669565')); // Metodo call

// Uso de apply
console.log(persona1.nombreCompleto('Prof', '321323132'));

let arreglo = ['Ing', '55443322']
console.log(persona1.nombreCompleto.apply(persona2, arreglo));
console.log(persona1.nombreCompleto.apply(persona2, ['Arq', '663399']));