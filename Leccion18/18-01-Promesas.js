let miPromesa = new Promise((resolver, rechazar) => {
   let expresion = true;
   if(expresion) {
    resolver('Resolvió correcto');
   } else {
    rechazar('Se produjo un error');
   }
});

// miPromesa.then(valor => console.log(valor), error => console.log(error));
// miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));

let promesa = new Promise((resolver) => {
    //console.log('Inicio promesa');
    setTimeout(() => resolver('Saludos con promesa y timeout'), 3000)
    //console.log('Fin Promesa');
});

// promesa.then(valor => console.log(valor));

//async indica que una función regresa una promesa
async function miFuncionConPromesa() {
    return 'saludos con promesa y async';
}

//miFuncionConPromesa().then(valor => console.log(valor));

//async con await
async function funcionConPromesaAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });

    console.log(await miPromesa);
}

//funcionConPromesaAwait();

//promesas, await, async y setTimeout

async function funcionPromesaAwaitTimeout() {
    console.log('Inicio de función');
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('Promesa con await y timeout'), 5000);
    });

    console.log(await miPromesa);
    console.log('Fin de la función'); // El fin no se ejecuta hasta que no termine de procesarse la promesa, por el await
}

funcionPromesaAwaitTimeout();