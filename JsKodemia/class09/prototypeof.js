//Metodos de Array

/**
 * Concat = concatenar elementos de un arreglo
 * this //Contexto de ejecución
 * spread operator- Soltar
 */

let array1 = [0, 1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];

"benjaminalcis.icloud.com".toUpperCase;
const newArray = array1.concat(array2);
console.log(newArray);

/**
 * Ejercicios En clase:
 */
const flight = {
  airline: "Oceanic",
  number: 815,
  departure: {
    IATA: "SYD",
    time: "2004-09-22 14:55",
    city: "Sydney",
  },
  passengers: [
    {
      name: "aldo",
      edad: 30,
    },
    {
      name: "Juan",
      edad: 30,
    },
    {
      name: "Alberto",
      edad: 30,
    },
    {
      name: "Judith",
      edad: 30,
    },
  ],
};
console.log(flight.passengers[2]);
console.log(flight);

let schedules = ["09:00", "10:00", "11:00", "12:00"];

let array = [
  "Aldo sale a las 09:00",
  "Aldo sale a las 09:00",
  "Aldo sale a las 09:00",
  "Judith sale a las 12:00",
];

// 1.- Funcion que se encargue de parsear objeto
//PARSEAR .. TRANSFORMAR UN DATO EN OTRO
function parseFlight(Vuelo) {
  //arreglo
  let newArray = []
  for (const passengers of Vuelo.passengers) {
    newArray.push(passengers.name);
  }
  return newArray;
}
console.log(parseFlight(flight));
let 

// 2.- Funcion que concatene los elementos(arreglos)
function concatenarArreglos (array1, array2) {
  return array1.concat(array2);
}
console.log(concatenarArreglos(array1,array2))
// 3.- Que mande llamar las dos funciones anteriores
// 4.- El resultado debe ser algo parecido a lo siguiente
// let array = ['Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Judith sale a las 12:00']
// i = 0;
// let pasajeros = () => {
//   flight.passengers[i]
//   console.log(`El pasajero es ${pasajeros}`)
//   i++
// }



/**
 * 
 * 
 * 
 */