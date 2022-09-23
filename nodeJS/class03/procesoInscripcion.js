/**
* TODO: Proceso de inscripción a Kodemia
* ! 1° Recibir informacion | entrvista
* ! 2° Enviar la oferta
* ! 3° Incripción
* ! 4° Prebootcamp

const inscriptionKodemiaCin = {
        name: 'Cin Ruiz',
        isInterviewed: false, // true
        hasOffer: false,
        isInscript: false,
        canTakeClass: false
    }
*/

const inscriptionKodemiaCin = {
  name: 'Cin Ruiz',
  isInterviewed: false, // true
  hasOffer: false,
  isInscript: false,
  canTakeClass: false
}

function ProcesoInscripcion(callback) {
  console.log(`Mi nombre es: ${inscriptionKodemiaCin.name}`);
  setTimeout(() => {
    callback(null, "Hola, quiero inscribirme al bootcamp");
  }, 3000);
}

function entrevista(callback) {
  console.log('Llendo a casa');
  setTimeout(() => {
      callback(null, 'Hola, ya estoy en casa :D')
  }, 3000);
}



ProcesoInscripcion((error, message) => {
  if(error) {
      console.log('Ah ocurrido algo: ', error);
      return; // Salidas tempranas
  }
  console.log(message);


  console.log(message);
  entrevista((errorArriveHome, messageHome) => {
      if(errorArriveHome) {
          console.log('Error: ', errorArriveHome);;
          return;
      }
      console.log(messageHome);
  })
})


function takeInterview (koderToInterview, callback) {
  console.log(`Entrevistando a ${koderToInterview.name}`);
  setTimeOut
};