/**
 * Un callback es la declaracion/definicion de una funcion que pasara como
 *  parametro a otra funcion para ser ejecutada posteriormente

 */

//Definicion de la funcion
function irAlSuperMErcado(callback) {
  console.log("llendo al super mercado");
  console.log("llegue del super mecado");
  const mensaje = callback(null, "Hola mama, ya estoy en el supermercado");
  console.log(mensaje);
}

//ejecucion de la funcion
irAlSuperMErcado();

//Declaracion de la funcion
function avisar() {
  return "hola, ya estoy en el supermercado";
}

irAlSuperMErcado(avisar);
irAlSuperMErcado(avisar()); //-> la ejecucion de la funcion -> string

function cb(error, data) {
  if (error) {
    console.log("ha ocurrido un error", error);
  } else {
    return mensaje;
  }
}

/**
 * 1º Cuando llegue
 * 2º Cuando compre la despensa
 * 3º Pagar la despensa
 * 3º Cuando haya llegado a casa
 */

function pay(callback) {
  console.log("pagando ");
  const mensaje = callback(null, "hola ya pague la despensa");
  console.log(mensaje);
}
function arriveHome(callback) {
  console.log("llegando a casa");
  const mensaje = callback(null, "hola ya estoy en casa");
  console.log(mensaje);
}

//SINCRONO
console.log("hola");
console.log("¿como estas?");
const num1 = 10;
const num2 = 20;
console.log("la suma es:", num1 + num2);

//ASINCRONISMO EN JS -> js no sabe el proceso de asincronismo
console.log("hola koders");
setTimeout(() => {
  console.log("hola Rafa");
}, 2000);
console.log("buenas noches amigos");
console.log("descansen koders");

//Caso de uso
const userCreated = createUser();
const userTemplate = `${userCreated.name} ${userCreated.lastName}`;
let numero = 0;

//CASO JONA SELECCIONA DOS NUMEROS
//Caso de uso2 ->NaN //clg se ejecuta inmediatamente y la declaracion 
let numero1;
let numero2
console.log('jona eligiendo numeros');
setTimeout(() => {
  numero1 = 20;
  numero2 = 30;
  console.log('jona ya eligio los numeros');
}, 3000);
console.log('suma: ', numero1 + numero2);


/**
 * HOMEWORK -->
 * Hacer asincronas las siguientes tareas: 
 * 
 * 1º Cuando llegue-> 5s
 * 2º Cuando compre la despensa-> 4s
 * 3º Pagar la despensa-> 5s
 * 3º Cuando haya llegado a casa ->4s
 */
