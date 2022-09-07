//for in recibe la variable donde se
// for (const i in objeto) {
//   result += `${obj.name}.${i} = ${objeto[i]}`
// }

const libro = {
  titulo: "Harry Potter y el misterio de JS",
  autor: "Victor",
  paginas: 300,
};

for (let nombrePropiedad in libro) {
  console.log(nombrePropiedad, libro[nombrePropiedad]);
}

//For of
//con fruta se iteran las frutas
//LOS ARREGLOS TIENEN INDICES- SE PUEDEN RECORRER CON FOR OF

let frutas = ["fresa", "mango", "melon"];

for (let fruta of frutas) {
  console.log(fruta);
}

//recorre las propiedades con un for of dentro de un for in
let obj = {
  frutas: ["fresa", "mango", "melon"],
  personajes: ["harry", "sina", "benja"],
};

for (let propiedad in obj) {
  for (let elemento of obj[propiedad]) {
    console.log(elemento);
  }
}

//Function
/**
 * Recibe un valor de entrada, brinda una salida
 * Tener claro que queremos lograr para declarar una funcion
 * Tener claro que necesito para lograr obtener los argumentos
 */

function imprimaNombre(nombre) {
  //Declaracion de funcion
  console.log(`Mi nombre es: ${nombre}`);
  return;
}
imprimaNombre("benjamin"); //Ejecucion de la funcion
let fecha = '06/09/22'
function hacerGelatina (sabor, forma) {
  return `Esta es la gelatina de sabor ${sabor} y con forma ${forma} fue hecha ${fecha}`;
};
let gelatinaDeIsra = hacerGelatina('jerez', 'gato');
let gelatinaDeVictor = hacerGelatina('fresa', 'redonda');
console.log(gelatinaDeVictor);

//SCOPE
/**
 * Scope local, scope global
 */
