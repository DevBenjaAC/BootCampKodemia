/**
 * Generar una variable con el nombre que prefieras por cada tipo de datos.
 */

let macbook = "computer";
const PI = 3.1416;
let screenOn = true;
let undefined; 
const car = {
  color: 'red',
  marca: 'kia',
  modelo: 2022,
  motor: {
    cilindraje: 4,
    automatico: "true",
  },
  puertas: 4,
};

let panes = ["concha", "piedra", "cuernito", "rosca"];

/**
 * Genera una variable de tipo objeto que represente un auto
 */

const car2020 = {
  añoDeFabricacion: 2020,
  cilindraje: "4 Cilindros",
  vidriosElectricos: true,
  clima: false,
  vestiduras: "piel",
};

/**
 * Generar una variable de tipo arreglo con el nombre que prefieras y almenos 10 propiedades.
 *
 */

let razasDePerros = [
  "Husky",
  "San Bernardo",
  "Chihuahua",
  "French Poddle",
  "Mastil Tibetano",
  "Chilaquil",
  "Yorkie",
  "Pitbull",
  "Gran Danes",
  "Dalmata",
];

/**
 * Genera un scrip que imprima 10 Veces el nombre de tu mascota
 */

let contador = 1;
while (contador >= 1 && contador <= 10) {
  console.log("GORDO REX LEVANTA LA PATITA AQUI ->");
  console.log(`${contador}º visita`);
  contador++;
}

/**
 * Generar un programa que imprima el nombre de una persona siempre y cuando sea mayor de edad sino es mayor de edad el mensaje debera decir 'No es mayor de edad'.
 */

let nombre = "farah";
let edad = 1;
if (edad >= 18) {
  console.log(`${nombre} es mayor de edad`);
} else {
  console.log(`${nombre} es menor de edad`);
}

/**
 * Generar un programa que imprima el valor de cada una de las propiedades del siguiente objeto
 */

let usuario = {
  nombre: "juan",
  edad: 20,
  contrasenia: "pasword*2022",
};

for (let value in usuario) {
  console.log(value, usuario[value]);
}

/**
 * Generar el mismo programa pero con nuesto objeto Generado anteriormente
 */
// const car2020 = {
//   añoDeFabricacion: 2020,
//   cilindraje: "4 Cilindros",
//   vidriosElectricos: true,
//   clima: false,
//   vestiduras: "piel",
// };

for (let partesAuto in car2020) {
  console.log(partesAuto, car2020[partesAuto]);
}

/**Generar una variable que me ayude a imprimir el contenido de un arreglo elemento por elemento */
let razasDePerros2 = [
  "Husky",
  "San Bernardo",
  "Chihuahua",
  "French Poddle",
  "Mastil Tibetano",
  "Chilaquil",
  "Yorkie",
  "Pitbull",
  "Gran Danes",
  "Dalmata",
];
for (let raza of razasDePerros2) {
  console.log(raza);
}
