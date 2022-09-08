//Arrow functions, forma corta de hacer una funcion (en una linea por lo general)
function sumar(numero1, numero2) {
  return numero1 + numero2;
}
let suma1 = sumar(10, 10);
console.log(suma1);

let sumar = (numero1, numero2) => numero1 + numero2;
let suma2 = sumar(10, 10);
console.log(suma2);

let saludo = "hola";
let koder = " soy benja";
let concatenacion = (value1, value2) => value1 + value2;
let concatenado = concatenacion(saludo, koder);
console.log(concatenado);

//Ejemplo2
let sumar = (num1, num2) => {
  const PI = 3.1416;
  let resultado = num1 + num2 + PI;
  return resultado;
};
console.log(sumar(25, 30));

//ejercicio 9

let operacionMatematica = (operacion, valor1, valor2) => {
  if (operacion === "suma") {
    console.log(operacion, valor1 + valor2);
  } else if (operacion === "resta") {
    console.log(operacion, valor1 - valor2);
  } else if (operacion === "multiplicacion") {
    console.log(operacion, valor1 * valor2);
  }
};
operacionMatematica("suma", 10, 100);
operacionMatematica("resta", 200, 100);
operacionMatematica("multiplicacion", 10, 20);

//ejercicio 11
let nombresKoders = [
  "fanny",
  "Xavy",
  "Cin",
  "Fer",
  "Deni",
  "Rafa",
  "Vic",
  "Jona",
  "Hector",
  "Anne",
  "benja",
];

// let imprime = (lista) => {
//   for (let nombre of lista) {
//     console.log(nombre);
//   }
// }
// imprime(nombresKoders)

// let buscarAlumno = (lista, koder) => {
//   for (koder of lista) {
//     if (koder === undefined){
//       return koder;
//     }else {
//       return 'Esta persona no pertenece a la generacion';
//     }
//   }
// }
// buscarAlumno(nombresKoders,'juanito')

let buscarNombre = (lista, nombre) => {
  for (let koder of lista) {
    if (koder === nombre) {
      return koder;
    } else {
      return "No pertenece a esta gen";
    }
  }
};
let impresion = buscarNombre(nombresKoders, "Aldo");
console.log(impresion);

//Ejercicio 10 Generar un objeto literal y retornarlo
const generarObjetoLiteral = () => {
  let persona = {
    nombre: {
      nombre: "Aldo",
      apellidoPaterno: "Aldaco",
      apellidoMaterno: "Contreras",
    },
    edad: "30",
    genero: "Masculino",
    direccion: "Mar del norte",
  };
  return persona;
};

let resultado = generarObjetoLiteral();
console.log(resultado);

//OBJETOS

let carro = {
  puertas: 4,
  color: "gris",
  marca: "seat",
  llantas: 4,
};
console.log(carro.puertas);
console.log(carro["duenio"]);

if (carro.duenio !== undefined) {
  console.log("la propiedad si existe");
} else {
  console.log("la propiedad no existe");
}

carro.duenio = "Aldo";

console.log(carro);

for (let caracteristica in carro) {
  console.log(caracteristica);
}
