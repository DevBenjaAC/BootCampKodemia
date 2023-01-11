const ejemplo = [25, 'Ford Mustang', true, [1, 0]];
//Cambiar Arrays
ejemplo[1] = 'Charger';
console.log(ejemplo);

// ejemplo = []; No se puede reasignar, solo cambiar referencia

//Acceder a alementos
let c = ejemplo [3][1];
console.log(c);

//Recorrer Arrays
const carros = ['Honda', 'Ford Mustang', 'Toyota Corolla', 'Fiat 500'];
//Metodo #1
for (let a = 0; a < carros.length; a++){
  console.log(carros[a]);
}
//Metodo #2 for of
// fot (let carro of carros){
//   console.log(carro);
// }

//Metodo #3 For Each
carros.forEach((carro) => {
  console.log(carro.toUpperCase());
})

/**
 * Pop = Saca el ultimo elemento de del array
 * shift = Saca el primer elemento
 * push = Agrega elemento al final del array
 * unshift = Agrega elelemtno al inicio del array
 * splice () = Borra o agrega elemento de acuerdo con el indice especificado
 * 
 */

//  Retornar un objeto con los nombres de los usuarios ordenados por edad, de mayor a menor