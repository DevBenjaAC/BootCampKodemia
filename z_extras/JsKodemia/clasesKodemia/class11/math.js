/**
 * OBJETOS GLOBALES
 * Tiene muchos datos matematicos
 * tiene muchas constantes
 * euler
 * logaritmos
 * PI
 * CONSTANTES EN MAYUSCULAS- CONVENCION
 *
 *
 */

const sumaConPI = (numero) => {
  return Math.PI + numero;
};
let resultado = sumaConPI(10);
console.log(resultado);

const areaCirculo = (radio) => {
  return Math.PI * radio ** 2;
};

let resultadoAreaCirculo = areaCirculo(5);
console.log(resultadoAreaCirculo);

/**
 * Liters y fromatters
 * Prettier
 * ESLint-> muestra documentacion de metodos
 */