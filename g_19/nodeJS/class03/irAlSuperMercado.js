function goToSuperMarket(callback) {
  console.log('Llendo al supermercado');
  setTimeout(() => {
      callback(null, 'Hola, ya llegue al supermercado');
  }, 5000)
}
function payThings(callback) {
  console.log('Haciendo fila para pagar...');
  setTimeout(() => {
      callback(null, 'Hola, ya pague la despensa');
      //callback('Se me olvido el monedero', null);
  }, 3000);
}
function arriveHome(callback) {
  console.log('Llendo a casa');
  setTimeout(() => {
      callback(null, 'Hola, ya estoy en casa :D')
  }, 3000);
}
goToSuperMarket((error, message) => {
  if(error) {
      console.log('Ah ocurrido algo: ', error);
      return; // Salidas tempranas
  }
  console.log(message);
  //ya llego al supermercado
  payThings((error, message) => {
      if(error) {
          console.log('Error: ', error);
          return;
      }
      console.log(message);
      arriveHome((errorArriveHome, messageHome) => {
          if(errorArriveHome) {
              console.log('Error: ', errorArriveHome);;
              return;
          }
          console.log(messageHome);
      })
  })
})
// callback hell
/**
* TODO: Proceso de inscripción a Kodemia
* ! 1° Recibir informacion | entrvista
* ! 2° Enviar la oferta
* ! 3° Incripción
* ! 4° Prebootcamp
*/