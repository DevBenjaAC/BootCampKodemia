/** LOOPS
 * Si quiero hacer algo repetidas veces utilizo un Loop para hacerlo automatico y dinamico
 * WHILE
 * FOR
 *
 */

/**
 * ---WHILE----
 * While ejecuta funcion especifica  siempre que la codicion de prueba se evalue como verdadera.
 * La condicion se evalua antes de ejecturar la instrucción.
 */
//

let n = 0;
while (n <= 3) {
  console.log(n, "paso por el loop");
  n++;
}

let frutas = ["manzana", "platano", "fresa", "melon"]; //la longitu es cuatro pero la posicion es 3
let indice = 0;
function imprimirFrutas(frutas) {
  while (frutas[indice] !== undefined) {
    console.log(frutas[indice]);
    indice++;
  }
}
imprimirFrutas(frutas);

/**
 * ---For----
 * Un bucle que repite el codigo que este dentro de su cuerpo {} hasta que una condicion se evalue como falsa
 */
//

function imprimirFrutas(frutas) {
  for (let i = 0; i <= frutas.length - 1; i++) {
    console.log(frutas[i]);
  }
}
imprimirFrutas();
/**
 * ---For In----
 * Recorres las propiedades de un objeto
 */
//

let persona = {
  nombre : 'aldo', // llaves y valores // propiedades y valores
  edad : 30,
  sexo : 'masculino',
}

for(const llave in persona){
  console.log(llave)
  console.log(persona[llave])
}


// for Of crea un ciclo que itera sobre ciclos iterables  se ejecutan acciones con valores obtenidos de cada iteracion.
let frutasPreferidas =['mango', 'pera', 'manzana verde']
for (const fruta of frutasPreferidas){ // el valor 
  console.log(fruta);
}
