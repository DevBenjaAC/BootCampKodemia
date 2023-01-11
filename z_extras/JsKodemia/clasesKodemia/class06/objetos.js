
let carro = {
  puertas: 4,
  color: 'gris', //atributos guardan datos primitivos
  electrico: false,
  acelerar: () => {  //metodos guardan funciones
    console.log('Estoy avanzando')
  }
}
carro.acelerar();

let fun = carro.acelerar;

function carro() {
  this.puertas = 0, // ESTE CONTEXTO
  this.color = 'gris',
  this.electrico = false,
  this.acelerar = () => {
    console.log('this')
  }
}
//SUGAR SYNTAX ECMA SCRIPT 6

//Destructuracion -> Revisar que es
//Funcion constructora--Tiempo de ejecucion// no va a exisitir 
let miniCooper = new carro();
console.log(miniCooper.acelerar(), carro.acelerar());

let string = new string(); 
console.log(typeof string)

//string lo genera como un arreglo

let number = 10 ;  //Por debajo tiene un prototipo  que tiene metodos
let otroNumero = number.toString();
console.log(typeof number, typeof otroNumero);
console.log(typeof console)

function recibirCallback(fun) {
  fun();
}
recibirCallback(fun);

function returnOtraFuncion() {
  
    let referencia = () => {
    console.log('HOLA CHAVOS')
  };
  return referencia;
}
let resultado = returnOtraFuncion();

entrarABBVA((user, password, autorizacion) => {
  let rsultado
}

)