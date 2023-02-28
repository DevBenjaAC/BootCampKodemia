// funcion para hacer gelatina con callbacks
let hacerGelatina = (callback1, callback2, callback3, callback4) => {
    setTimeout(() => {
        callback1("El agua esta hirviendo");
        setTimeout(() => {
            callback2("El sobre esta vertido");
            setTimeout(() => {
                callback3("La mezcla esta enfriándose");
                setTimeout(() => {
                    callback4("Ya puedes comer tu gelatina!");
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}

let imprimir1 = (oracion) => {
    console.log(oracion);
}

let imprimir2 = (oracion) => {
    console.log(oracion);
}
let imprimir3 = (oracion) => {
    console.log(oracion);
}
let imprimir4 = (oracion) => {
    console.log(oracion);
}


hacerGelatina(imprimir1, imprimir2, imprimir3, imprimir4);
// funcion para hacer gelatina con callbacks



//Calbacks de saludo de dia o de noche
let saludarEnMomentoDelDia = (momentoDelDia, nombrePersona, callbackSaludo, callbackDespedida) => {
    if (momentoDelDia === 'dia') {
        callbackSaludo(nombrePersona);
    } else if (momentoDelDia === 'noche') {
        const despedida = `Buenas noches, ${nombrePersona}. Hasta mañana, que descanses!`;
        callbackDespedida(despedida);
    } else {
        console.log('Error en la sintaxis debe ser "día" o "noche"');
    }
}
let imprimirSaludo = nombrePersona => {
    const saludo = `Buenos días, ${nombrePersona} que tengas un gran dia!`;
    console.log(saludo);
};

let imprimirDespedida = despedida => console.log(despedida);


// saludarEnMomentoDelDia("noche", "antonio", imprimirSaludo, imprimirDespedida);

// saludarEnMomentoDelDia("dia", "kim", imprimirSaludo, imprimirDespedida);

// saludarEnMomentoDelDia("error", "benja", imprimirSaludo, imprimirDespedida);
