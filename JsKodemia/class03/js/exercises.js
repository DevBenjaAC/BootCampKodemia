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