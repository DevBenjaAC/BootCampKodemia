//Ciclo for Cuando uno sabe el numero de iteraciones

for ( let i = 1; i <= 4; i++) {
  console.log(`iteracion ${i}`)
}
console.log('Fin del ciclo')

//Ciclo For al reves.
for ( let h = 4; h >= 1; h--) {
  console.log(`iteracion ${h}`)
}
console.log('Fin del ciclo')

//Ciclo Anidados son menos eficientes
for (let p = 1 ; p <= 4; p++) {
  console.log(`Empieza Iteracion ${p}`);
  for (let j = 0; j<4; j++) {
    console.log(j);
  }
}
console.log('Fin del ciclo');

//While cuando no sabes el numero de iteraciones
//Pregunta y luego haz.
let x = 1;
while (x <= 4){
  console.log(`Iteracion ${x}`);
  x++;
}
console.log('Fin de While');

//DO WHILE  Primero haz y despues preguntas.
let y = 1;
do{
  console.log(`iteracion ${y}`);
  y++;
}while(y <= 4);