/**
 * FUNCIONES Y SCOPE
 * Conjunto de expresiones y sentencias agrupadas para reutilizar codigo.
 * 
 * validad, construir, devolver cosas
 * 
 * Forma declarativa:   //Palabra Reservada
 * function miFuncion (){
 * return3;
 * }
 * 
 * Forma de expresion:  //Funcion asiganada a variable
 * let miFuncion = function(a, b){
 * return a + b;}
 * 
 * TypeScript = EL ESTANDAR 
 */

//declarativa
function generarNombreCompleto(texto1, texto2){ //parametros
  console.log(`${texto1} ${texto2}`);
}
let nombre = 'Xavi';
let apellido = 'Sin J';

generarNombreCompleto(nombre, apellido) // ejecucion de mi funcion con argumentos

nombre = 'Xavi';
apellido = 'Con J';
generarNombreCompleto(nombre, apellido) // ejecucion de mi funcion con argumentos


function multiplicar (numero1, numero2){
  let resultado = numero1 * numero2;
  console.log(resultado);
  return resultado;
}
multiplicar(10, 5);
let multiplicacion = multiplicar(10, 5);
console.log(multiplicacion);
// console.log(resultado); //no esta definido por el scope

function esMayorQue(numero){
  return numero > 5;
}
esMayorQue(10)

if(esMayorQue(10) === true){
  console.log('es mayor que 5');
  return; //Aqui finaliza el programa
}

console.log('esto se deberia imprimir?')

function discoteca (edad){
  if (edad < 18) {
    return; //SALIDAS TEMPRANAS
  }else{
    console.log('que baile');
  }
}
discoteca(18);
discoteca(15);

/**
 * ESCOPE
 */

//Expresion  --> Util para callbacks/ Termino de primer orden /funciones compartidas /parametros de otra funcion.
let generarNombreCompleto = function(texto1, texto2){
  console.log(`${texto1} ${texto2}`);
}
// arrowFuncition