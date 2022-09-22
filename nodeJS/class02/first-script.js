/**
 * Crear una funcion que reciba una nombre como argumento y devuleva un saludo con dicho nombre
 */

function saludar(nombre) {
  return `hola ${nombre} me da gusto verte`;
}
console.log(saludar("Benja🔥🥳"));

const nameXavy = "xavy";
const greatZavy = saludar(nameXavy);

/**
 * Crear una funcion que me devuelva un nombre aleatorio de un arreglo
 */
//declaracion de la funcion
let random = () =>{
const nombres = ["benja", "rafa", "deni", "fer", "xavy", "anne"];
const aleatorio = nombres[Math.floor(Math.random() * nombres.length)];
console.log("El arreglo es: ");
console.log(nombres);
console.log("Y un aleatorio es: ");
console.log(aleatorio);

} 
//ejecucion de la funcion
random()

function getRandomName(){
  const arrayNames = ['benja', 'anne', 'fer', 'rafa'];
  const min = 0;
  const max = arrayNames.length;
  const indexRandom = Math.floor(Math.random() * (max -min) + min);
  return arrayNames[indexRandom];
}
console.log(`Obteniendo un nombre random: ${getRandomName()}`);


//saludar un nombre Random con las dos function anteriores
console.log(saludar(getRandomName()));

//Pasar como argumento la ejecucion de un funcion
const firtsHello = saludar(getRandomName());
const secondHello = saludar(getRandomName());
console.log(firtsHello);
console.log(secondHello);


//Leer 90% -> 
function hola(name) {
  return `hola ${name}, buenas noches`
};
const x = hola('xavy');
console.log(x);

const otraFuncion = hola;
console.log(otraFuncion);

//las funciones pueden pasarse de una variable a otra como cualquier dato
  //En JS las funciones son llamados objetos de primera clase
    //funciones autoejecutables
    //funcion que genere funciones o 'factoryFunctions'
    //

