/**
 * etiquetas labels
 */

// las etiquetas te permiten nombrar los bucles

//sin etiquetas
let unidades = 0;
let decenas = 0;

bucleDecenas: while(true) {
  bucleUnidades: while(true){
  console.log(`el numero actual es ${decenas} ${unidades}`);
  unidades++
    if(unidades === 10) {
      unidades = 0; 
      break bucleUnidades
    }
  if(decenas === 2) {
    break bucleDecenas
  }
}
decenas++
}
console.log('Ya hemos terminado');
