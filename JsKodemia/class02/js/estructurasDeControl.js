/*
*ESTRUCTURAS DE CONTROL

if(){}  PERMITE EVALUAR UNA EXPRESION PARA OBTENER UN BOLEANO
if (esto es veradero){
  Haz esta instruccion
}
*/
if (true) {
  console.log("el valor que esta dentro de if es verdadero");
}

let logueado = true;
let tdc = true;
if (logueado && tdc) {
  console.log("Puede revisar su detalle de la tarjeta");
}

/*
IF ELSE
if (esto es verdadero){
  se ejecuta esto
}else{si no es veradero entonces ejecuta esto}
*/

if (logueado && tdc) {
  console.log("Puede revisar su detalle de la tarjeta");
} else {
  console.log("el usuario no tiene tarjeta de credito o no esta logueado");
}

if (logueado && tdc) {
  console.log("Puede revisar su detalle de la tarjeta");
} else if (logueado === false && tdc) {
  console.log("el usuario no tiene tarjeta de credito o no esta logueado");
}

/**
 * switch valida en que caso esta asignada la variable
 */

let paso = 0;
switch (paso) {
  case 1:
    console.log("Datos personales");
    break;
  case 2:
    console.log("Datos academicos");
    break;
  default:
    console.log("Aun no hay datos que llenar");
}

/**
 * EJERCICIOS
 * 1 Generar un programa en js que te diga si un numero es mayor que otro o no
 * //Datos numericos Enteros
 * //declarar variable Resultado
 */

let numero1 = 5;
let numero2 = 10;
let resultadoFinal;
if (numero1 > numero2) {
  let resultadoFinal = numero1;
  console.log(`el ${resultadoFinal} es mayor`);
} else {
  let resultadoFinal = numero2;
  console.log(`el ${resultadoFinal} es mayor`);
}
/**
 * Ejercicio 2
 * 2 Generar
 */
let myCity = "puebla";
let bYear = 1995;
let iam = "benja";
let stature = 1.85;
let theSkyBlue = true;
console.log(`hola yo soy ${iam} y vivo en ${myCity}`);
let pawsTable = 4;
let bMonth = "october";
let favoriteSerie = "How I Meet Your Mother";
const PII = 3.1416;
