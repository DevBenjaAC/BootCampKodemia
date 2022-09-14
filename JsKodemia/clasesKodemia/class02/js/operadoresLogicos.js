//operadores logicos binarios
/*
sirven para validaciones 
conjuncion
disyuncion
negacion

type coercion 

si alguno de los dos es falso Va a dar falso
si ambos son verdaderos Sera verdadero

hosting declara variable en indefinida undefined
*/

let logueado = null;
let tieneTDC = true;
//operador && (and)
console.log(logueado && tieneTDC);
/*
*true && true = true
*true && false = false
*false && true = false
*false && false = false

*/
console.log(logueado && tieneTDC && otraVariable);
console.log(logueado || tieneTDC || otraVariable);

// Operador Negacion NOT !
/*
 *!true =false
 *!false =true
 */
console.log(!logueado);
/*
 *  >= MAYOR O IGUAL
 *  <= MENOR o IGUAL
 * <> mayor y menor
 */
console.log(10 >= 5);
console.log(10 >= 10);
console.log(10 >= 10);

console.log(10 <= 5);
console.log(10 <= 10);
console.log(10 <= 10);

console.log(10 > 11);
console.log(10 < 11);

// == Operador de Comparador
//Misma referencia
let carro1 = "mercedes"; // ABC
let carro2 = "audi"; // CBA
console.log(carro1 == carro2); // false

// === ESTRICTAMENTE IGUAL type coercion
let carro3 = 1;
let carro4 = '1';
console.log(carro3 == carro4);
console.log(carro3 === carro4);
