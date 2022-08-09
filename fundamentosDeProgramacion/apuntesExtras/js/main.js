// // 1.Inicio
// // 2. Declaramos la variable operacion, suma,  resta, division, multiplicacion, exponencial.
// // 3. Declaramos  numeroUno y numeroDos.
// // 4. Pedimos al usuario "Ingrese la operacion que quiere realizar"
// // 5. Pedimos  al usuario "ingrese numeroUno"
// // 6. Pedimos  al usuario "ingrese numeroDos"
// // 7. Si el usuario elige la operacion  "suma"
// // 	entonces suma = numeroUno + numeroDos
// // 		 si no, regrese al paso numero 4.
// // 9. Si el usuario elige la operacion "resta"
// // 	entonces resta =numeroUno - numeroDos
// // 		si no, regresar al paso numero 4.
// // 10 Si el usuario elige la opcion  "division "
// // 	entonces division = numeroUno / numeroDos
// // 		si no, regresar al paso numero 4
// // 11. Si el usuario elige la opcion multiplicacion
// // 	entonces multiplicacion = numeroUno * numeroDos
// // 		si no, regresar al paso 4
// // 12. si el usuario elige la opcion exponencial
// // 	entonces exponencial = numeroUno ** numeroDos
// // 		si no regresar al paso 4
// // 13 Fin Si
// 14. Fin
// alert("Hola soy la calculadora de ben!");
// let numberOne = prompt("Dame un numero entero", "5");
// let numberTwo = prompt("Dame otro numero entero", "6");
// let suma = numberOne + numberTwo;
// let resta = numberOne - numberTwo;
// let division = numberOne / numberTwo;
// let multiplicacion = numberOne * numberTwo;

// // let suma = (numberOne + numberTwo)
// // let resta = (numberOne - numberTwo)
// // let division = (numberOne / numberTwo)
// // let multiplicacion = (numberOne * numberTwo)

// let peticion = prompt(
//   "Que operacion deseas Realizar",
//   "1=suma, 2=resta, 3=division 4=multiplicacion"
// );
// switch (peticion) {
//   case 1:
//     console.log(suma);
//     break;
//   case 2:
//     console.log(resta);
//     break;
//   case 3:
//     console.log(division);
//     break;
//   case 4:
//     console.log(multiplicacion);
//     break;
// }

// ===================================================================================================

// Ordena 3 numeros de mayor a menor
// permutaciones con 3 elementos
// posibilidades 3! = 3*2*1=6

// let a = prompt("introduce el primer numero", "5");
// let b = prompt("introduce el segundo numero", "4");
// let c = prompt("introduce el tercer numero", "3");

// if (a >= b && a >= c) {
//   if (b > c) {
//     console.log(`El orden es ${a}, ${b}, ${c}`)
//   }else console.log(`El orden es ${a}, ${c}, ${b}`)
// }else if(b>a && b>c){
//   if(a>c){
//     console.log(`El orden es ${b}, ${a}, ${c}`)
//   }else console.log(`El orden es ${b}, ${c}, ${a}`)
// }else if (c>=a && c>= b){
//   if(a>=b){
//     console.log(`El orden es ${c}, ${a}, ${b}`)
//   }else console.log(`El orden es ${c}, ${b}, ${a}`)
// }
//=====================================================================================================
