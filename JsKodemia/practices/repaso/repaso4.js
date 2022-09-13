//Objetos
// let lapiz = {
//   tamaño: "Pequeño",
//   forma: "Hexagonal",
//   color: "amarillo",
//   escribir: (texto) => {
//     return "use mi lapiz para escribir el texto: " + texto;
//   },
// };

console.log(lapiz.color);
console.log(lapiz.forma);
console.log(lapiz.tamaño);
console.log(lapiz.escribir("Benjamin Alvarado Cisneros"));

let lapizGrande = {
  tamaño: "Grande",
  forma: "Circular",
  color: "Verde",
  escribir: (texto) => {
    return "use mi lapiz para escribir el texto: " + texto;
  },
};
//funcion constructora
// function Lapiz(tamanio, forma, color) {
//   this.tamanio = tamanio;
//   this.forma = forma;
//   this.color = color;
//   this.escribir = (texto) => {
//     return "use mi lapiz para escribir el texto: " + texto;
//   };
// }

let lapizRojo = new Lapiz("pequeño", "redondo", "rojo");
let textoRojo = lapizRojo.escribir("Este texto lo escribi con mi lapiza rojo");
console.log(textoRojo);
console.log(lapizRojo);

// let lapizVerde = new Lapiz("grande", "cuadrado", "verde");
// console.log(lapizVerde);
//New -> se usa para nuevas instancias de una clase,(Que es clase)

let rugir = (texto) => {
  return "soy un Dinosaurio: " + texto;
};
//Funcion constructora para crear Dinosaurios //
function Dinosaurio(epoca, alimentacion, habitat) {
  this.epoca = epoca;
  this.alimentacion = alimentacion;
  this.habitat = habitat;
  this.rugir = (texto) => {
    return "soy un Dinosaurio: " + texto;
  };
}
let trex = new Dinosaurio('Periodo Cratático','carnivoro', 'Terrestre');
console.log(trex);
let rugido =trex.rugir('ROOOARW')
console.log(rugido)

//
function Lapiz(tamanio, forma, color) {
  this.tamanio = tamanio;
  this.forma = forma;
  this.color = color;
  this.escribir = (texto) => {
    return "use mi lapiz para escribir el texto: " + texto;
  };
}

let lapiz = {
  tamaño: "Pequeño",
  forma: "Hexagonal",
  color: "amarillo",
  escribir: (texto) => {
    return "use mi lapiz para escribir el texto: " + texto;
  },
};
console.log(lapiz);
let lapizVerde = new Lapiz("grande", "cuadrado", "verde");
console.log(lapizVerde);

//Reinos En biologia
/**
 * Reino animal
 * Reino Vegetal
 * Reino Fungi
 * Reino Cuantico
 */

//SABER EXPLICAR, PARA QUE FUNCIONA, COMO FUNCIONA, QUE ES
//Uno no sabe lo que sabe hasta que lo intenta.
/**
 * 
 * Los metodos son propiedades que son funciones
 * class animal {
 * constructor(epoca, alimentacion, habitat) {
  this.epoca = epoca;
  this.alimentacion = alimentacion;
  this.habitat = habitat;
  this.rugir = (texto) => {
    return "soy un Dinosaurio: " + texto;
  };

  comida{
    'METODO'
  }
 * }

  Herencia:

  class oviparo  extends animal{
    constructor naceDeHuevo() {
      this.naceDeHuevo{
        super() //OBLIGATORIO MANDARLA A LLAMAR
        this.naceDeHuevo = naceDeHuevo;
      }
    }

  }
 */
