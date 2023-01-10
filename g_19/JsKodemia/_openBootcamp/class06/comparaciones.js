//Comparaciones

//Igualdad
if (5 == 5) {
  console.log("5 es igual a 5");
}
//absolutamente igual
if (5 === 5) {
  console.log("5 es absolutamente igual a 5");
}

let a = 5;
console.log(typeof a);
let b = "5";
console.log(typeof b);

// == VALOR
// === VALOR Y TIPO
if (a == b) {
  console.log(" a es igual a b Debil");
}

if (a === b) {
  console.log(" a es absolutamente igual a b FUERTE");
}

let c = 4;
let d = "4";

//Desigualdades

if (c != d) {
  console.log("c es diferente de d DEBIL");
}
if (c !== d) {
  console.log("c es  absolutamente diferente de d FUERTE");
}
// COmparaciones mayor que y menor que
let max = 10;
let min = 5;

if (max > min) {
  console.log("max es mayor que min");
}
if (max >= 10) {
  console.log("max es mayor que min");
}

if (min < max) {
  console.log("min es menor que max");
}
if (min <= max) {
  console.log("min es menor que max");
}
