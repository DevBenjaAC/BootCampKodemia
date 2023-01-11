/**
 * BUCLES
 *
 * FOR ( LOS MAS UTILIZADOS) - por
 *
 * i = i + 1
 * i += 1
 * i++
 *
 */

for (let i = 0; i < 10; i++) {
  // Esto es el bucle
  console.log(i);
}
//for
let lista = [1, 4, 6, 2, 7, 10, 12, 800];
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i] * 2);
}

// for of - por de
for (let valor of lista) {
  console.log(valor);
}

//for each - por cada
lista.forEach((valor) => {
  console.log(valor);
});

//for in - por en
let persona = {
  nombre: 'benja',
  apellido: 'Alvarado',
  edad: 26,
  isDeveloper: true
}

for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}