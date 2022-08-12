/**
 * Crear una funcion  que suma 2 numeros  y regrese el resultado
 * Exercise 1
 */
let numero1;
let numero2;
function sumar(numero1, numero2) {
  let resultado = numero1 + numero2;
  return resultado;
}
let resultadoSuma = sumar(1, 4);
console.log(resultadoSuma);

/**
 * Crear una funcion que recibe  un nombre
 * y devuelve un saludo  por nombre  y si  no se provee  el nombre saludo simplemente  por "amigo".
 */

//Exercise 2
function saludo(nombre = "amigo") {
  return `Hola ${nombre}`;
}
console.log(saludo("deni"));
console.log(saludo("cintia"));
console.log(saludo("benja"));
console.log(saludo(""));
console.log(saludo());

//homework
/**
 * 1.-Crear una funcion que altere el valor de una variable  global cada que se ejecuta (no debe retornar nada)
 */

let variableGlobal = 284;
function alteracion() {
  console.log(++variableGlobal);
}
alteracion() //Aqui variableGlobal vale 285
alteracion() //Aqui variableGlobal vale 286
//etc...

/*
 * 2.-Crear una funcion que reciba un parametro  de tipo numero y regrese true si el paramentro es un numero par  o false si
 * es un numero inpar.
 */
//En cualquier lenguaje de programación .
//Si el módulo a dos del número es igual a cero el número es par, en caso contrario impar.
function esPar(number){
  console.log((number % 2) == 0);
}
esPar(260) // Es par
esPar(514) // Es par
esPar(1083) //Es Impar
esPar(157.9) //Es impar
