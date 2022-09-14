//Listas, array o arreglo
const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(2, "hola", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento, index 0";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Objetos ->Representaciones de la vida real
const movil = {
  altura: 10,
  anchura: 5,
  marca: "xiaomi",
  isWhite: false,
  contactos: ["Gorka", "martin", "Raul"],
  tarjeta: {
    marca: "sandisk",
    almacenamiento: 32,
  },
  "altura-tarjeta": 4
};

movil.anio = 2019;
movil.marca = "samsung";
console.log(movil.marca);

//Fechas
//Librerias de apoyo Moment.js
//Fecha Actual en que se genera la variable
const ahora = new Date()
console.log(ahora);

const fecha_milis = new Date(10) //Utilizando los milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date (2022, 0, 15);
console.log(fecha_valores);
//Fecha Actual dia, mes, anio
const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const anio = ahora.getFullYear()

console.log(dia, mes, anio);