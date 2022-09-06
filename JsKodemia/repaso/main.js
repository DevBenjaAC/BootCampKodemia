const PI = 3.1416;

let fruta = {
  color: "roja",
  sabor: "acida",
  precio: 97,
  hermana: {
    color: "amarilla",
    sabor: "dulce",
    precio: 110,
    hermana: {
      color: "azul",
      sabor: "agridulce",
      precio: 120,
      hermana: {
        color: "verde",
        sabor: "dulce",
        precio: 10,
        hermana: {
          color: "rosa",
          sabor: "dulce",
          precio: 80,
        },
      },
    },
  },
  meses: ["enero", "febrero"],
};
console.log(fruta.hermana.hermana.hermana.hermana.precio);
let mesesDeCosecha = fruta.meses;
mesesDeCosecha[0]; //enero
mesesDeCosecha[1]; //febrero

//operadores aritmeticos
let resultado = 10 + 10; //sumar valores aritmeticos
console.log(resultado);

let concatenacion = "Aldo" + " Aldaco"; // concatenar valores string
console.log(concatenacion);

let prueba = Number("5") + 5 + 5; //convercion explicita
console.log(prueba); // 15
let prueba2 = "5" + 5 + 5; //convercion implicita
console.log(prueba2); // 555

let resta = 5 - 5;
console.log(resta);

let resta2 = 10 - "5";
console.log(resta2);

let resta3 = "5" - Number("5");
console.log(resta3);

let multiplicacion = 10 * 2;
let division = 10 / 2;
let potencia = 5 ** 2;
console.log(potencia);
console.log(multiplicacion, division, potencia);

// Operadores Logicos && || , >=, >=, ==, ===

// Estructuras de control
// Validacion if
let isHuman = true;
if (isHuman === true) {
  console.log("Aldo Es Humano");
}

let usuario = 17;
if (usuario >= 18) {
  console.log("El usuario es Mayor De Edad");
} else {
  console.log("Es menor de edad");
}


let jona = 18;

switch (jona) {
  case 18:
    console.log('es mayor de edad');
    break;
  case 30:
    console.log('Es adulto mayor');
    break;
  default:
    console.log('Es menor de edad');
}

let usuario1 = 30;
if (usuario1 >= 18 && usuario1 < 30) {
  console.log("El usuario es Mayor De Edad");
} else if (usuario1 >= 30) {
  console.log("Es Adulto mayor de edad");
} else {
  console.log("el usuario es menor de edad"); 
}

//Ciclos

let jonathan = 19
while(jonathan > 18 && jonathan <30){
  console.log('jhona es mayor de edad', jonathan);
  jonathan += 1;
}

//valor inicial
//Valor final
//valor incremental
for(let annie = 18; annie < 30; annie++){
  console.log('annie es mayor de edad', annie);
}