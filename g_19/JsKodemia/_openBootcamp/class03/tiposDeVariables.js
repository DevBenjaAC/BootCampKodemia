var variable;
let variableLet;
// const constantes;
const constante = "hola soy una constante";
console.log(constante);
// constante = "adios"; NO ES POSIBLE

var a = 1;
console.log(a);
a = 4;
console.log(a);

let b = 3;
console.log(b);
b = 5;
console.log(b);

var variable = "Hola soy una variable VAR";
for (var i = 0; i < 3; i++) {
  var variable = "soy la segunda Varible VAR"
}
console.log(variable);


let variable = "Hola soy una variable LET";
for (var i = 0; i < 3; i++) {
  let variable = "soy la segunda Varible LET" 
}
console.log(variable);

console.log(typeof hola);