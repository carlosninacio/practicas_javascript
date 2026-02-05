const personas = [
    new Persona('Carlos', 'Ramirez'),
    new Persona('Karen', 'Ordoñez')
];

function mostrarPersonas() {
    console.log('Mostrar Personas...')
    let texto = '';
    for(let persona of personas) {
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}