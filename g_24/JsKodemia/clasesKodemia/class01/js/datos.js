/*
Tipos de datos primitivos
  Number 1, 2, 3, 4.5, 8**2 NUMEROS
  string TEXTO 
  Boleano = true & false  PARA HACER VALIDACIONES
  undefined NO tiene un valor definido
  null es un valor NULO

Interpolacion es el tomar el valor de una variable para generar
una nueva expression.

operador UNARIO solo a un valor se le puede aplicar typeOf

UNDEFINED es el valor con el que se incializan las variables declaradas
Cannot read property ‘propertyName’ of null/undefined

Caracteristicas de los objetos: LISTADO DE PROPIEDADES -Subvariables
los objetos guardan REFERENCIAS

*/

//Declaracion e inicializacion de variable
let miEdad = 27;
let miNombre = "benjamin Alvarado";
//template String ` esto es un template string ${}`
let miNombreCompleto = `hola yo soy ${miNombre}`;
console.log(miNombreCompleto);
let esMayorDeEdad = true;
let esMenorDeEdad = false;
typeof undefined;
console.log(typeof undefined);
let noEstaDefinido = undefined;
console.log(typeof null);
let usuarioLogueado = null;


//Los objetos guardan REFERENCIAS
let carro = {
  motor: true,
  color: 'negro',
  llantas: 4,
  puertas: 3,
  pasajeros: {
    aldo:{
      edad: 30,
      nombre: 'alberto',
    }
  },
};

//Se esta copiando la referencia y se copia 
let miniCopper = carro;
miniCopper.motor = 'electrico';

console.log(carro.color);
console.log(carro['pasajeros']['aldo']['edad']);

//ARREGLOS son objetos 
let canasta = ['manzanas', 'durazno', 'uvas'];
//a Los arreglos se le pueden preguntar cuantos objetos tienes
console.log(canasta.length);