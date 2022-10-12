/**
 * Casos muy especificos -break continue+
 * !Todo lo que dificulte la legibilidad del codigo  SON MALAS PRACTICAS
 */
let lista = [ 1,2,3,4,5,6,7,8];
for (let i = 0; i < lista.length; i++) {
  if(lista[i] === 3) {
    continue; // lo salta
  }

  console.log(lista[i]);
  if (lista[i] > 5) {
    break; // para el bucle y sigue la siguiente linea
  }
  console.log(i);

}

// cual es el ambito de un bucle SCOPE // Ambito, escope, alcance
/**
 * let mejor que var, VAR No ocuparla
 */

console.log(i);
