/**
 * ARROW FUNCTIONS
 * 
 * clase 4 Familizarizarse con el concepto de function flecha
 * Es una forma de generar funciones de manera compacta
 * utiliza el scope de cuando estan declaradas
 */

const saludar = (prefijo, nombre) => { // se parece a una expresion //Si tiene solo un parametro se pueden omitir()
  console.log(`Hola ${prefijo} ${nombre}`);
};
saludar('Benja'); // argumento 

//this


// IIFE inmediatly invoked function expression 
/**
 * podemos retornar implicitamente sin poner return
 */

//return explicito
const arrowFunction = () => {
  return 'HOLA BENJA';
}
console.log(arrowFunction());

//Return implicito
const arrowFunction1 = () => 'HOLA BENJA';

console.log(arrowFunction1());
