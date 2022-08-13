/** LOOPS
 * Si quiero hacer algo repetidas veces utilizo un Loop para hacerlo automatico y dinamico
 * WHILE
 * 
 */

/**
 * ---WHILE----
 * While ejecuta funcion especifica  siempre que la codicion de prueba se evalue como verdadera.
 * La condicion se evalua antes de ejecturar la instrucción.
 */
//

let n = 0;
while(n <= 3) {
  console.log(n, 'paso por el loop');
  n++;
}

let frutas = ['manzana', 'platano', 'fresa', 'melon'];

function imprimirFrutas(){
  let frutas = ['manzana', 'platano', 'fresa', 'melon'];
  let n = 0;
  
  while(n <= (frutas.length-1)){
      console.log(frutas[n]);
      n++;
  }
}

imprimirFrutas();






