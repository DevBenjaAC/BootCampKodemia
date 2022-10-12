//Sentencia Switch
let nota = 4;
switch(nota) {
  case 5:
    console.log('buen trabajo, sobresaliente');
    break;
  case 4:
    console.log('Buen trabajo pero podrias haberlo hecho mejor');
    break;
  case 3:
    console.log('has obtenido un suficiente');
    break;
  case 2:
    console.log('no haz aprobado por poco');
    break;
  case 1:
    console.log('No haz estudiado nada, trabaja un poquito mas');
  default:
    console.log('Error');
    break;
}