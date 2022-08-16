/**
 * Funciones pasadas como argumentos de otras funciones
 * Podemos trabajar con funciones como si fueran cualquier otro tipo de valores
 * Promesas
 *
 */

function calculadora(num1, num2, callback) {
  //Retornamos la ejecucion de la funcion que nos pasen con los valores que nos pasen
  return callback(num1, num2);
}
let suma = (num1, num2) => num1 + num2;

console.log(calculadora(10, 10, suma));

/**
 * 
Un código síncrono es aquel código donde cada instrucción espera a la anterior para ejecutarse mientras que un código asíncrono no espera a las instrucciones diferidas y continúa con su ejecución.

Javascript es síncrono pero Nodejs es asíncrono, V8 el motor de JS que utiliza node, convierte el código JS en lenguaje máquina que puede ser interpretado por el CPU.

Callback Hell
 */


let padre = (hijo1, hijo2, hijo3) => {
  hijo2();
  hijo1();
  hijo3();
}
let fun1 = () => {
  console.log('funcion hijo 1');
}
let fun2 = () => {
  console.log('funcion hijo 2');
}
let fun3 = () => {
  console.log('funcion hijo 3');
}

padre(fun1, fun2, fun3);

let hacerEnsalada = (Contenedor, verduras, cuchillo, lavar, cortar, mezclar) => {
  //1.- Contenedor
  //2.- Verduras
  //3.- cuchillo
  // lavar
  // cortar
  // mezclar

  //Que debo hacer
  let verdurasLimpias = lavar(verduras);
  let verdurasCortadas = cortar(verduras);
  let ensalada =mezclar(contenedor, verdurasCortadas,);
  
  return ensalada;
};
let verdurasNuevas = ['zanahora', 'pimiento', 'calabaza'];

let lavarAlgo = (algo) => {
    console.log(`Lavando... ${algo}`) // como se lavan las verduras
}
let cortar = (cuchillo, algo) => {
    console.log(`Cortando con el cuchillo... ${algo}`) // como se lavan las verduras
}
let lavarAlgo = (contenedor, algo) => {
    console.log(`Mezclando dentro del contenedor... ${algo}`) // como se lavan las verduras
}
hacerEnsalada('tupperWare', verduras, 'chucky', lavar, cortar, mezclar )