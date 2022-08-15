/**
 * Crea una funcion que reciba un array y lo regrese en orden invertido.
 */
let array1 = ["t", "p", "i", "r", "c", "s", "a", "v", "a", "j"];
let array2 = ["amigos", "buenos", "mis", "hola"];

function enReversa(arreglo) {
  console.log("El arreglo sin invertir:", arreglo);
  let reversed = arreglo.reverse();
  console.log("El arreglo invertido es:", reversed);
}
enReversa(array2);
enReversa(array1);

/**
 * Crear una funcion que reciba un arreglo de numeros y devuelve el valor mas grande dentro del arreglo.
 */


let b = [2,5,7,6]
function elMaximo(numbers) {
  console.log("Todos los numeros", numbers);
  console.log("El valor mas grande es:", Math.max(numbers));
}
elMaximo(b);