// let frutas; //Declaramos Variable
// let frutas =[1, 2, 3, ,4]; //Lo que almacena frutas es una referencia de memoria
let frutas = []; // Inicializar el arreglo con un arreglo Vacio
let indice = 0;
frutas[0] = "fruta1";
frutas[0] = "frutasss"; // Se queda con el ultimo valor asignado
// frutas[1] = 'fruta2'; // se muestra un empty en el console.log
frutas[2] = "fruta3";
frutas[3] = 10;
frutas[4] = true;
frutas[5] = false;

// En un arreglo podemos tener valores de cualquier tipo
console.log(frutas);

function comprarFrutas(nombreDeLaFruta) {
  frutas[indice] = nombreDeLaFruta; // = --> es el operador de asignacion
  indice++; //El indice incrementa de uno en uno
}

console.log(frutas); // aqui esta vacio el array
comprarFrutas("manzana");
comprarFrutas("fresa");
comprarFrutas("platano");
comprarFrutas("cereza");
console.log(frutas);

let nombre = "aldo";
console.log(nombre.length);
console.log(frutas[frutas.length - 1]); //Expresion length es la longitud

//objetos y arreglos normalmente se definen en const
const arreglo =[1, 2, 3];  //se puede definir const por que el arreglo no cambia referencia, solo cambia el contenido
arreglo[0] = 'string';

const verduras = new Array(); //Funciones constructoras--> Generan objetos
console.log(verduras);