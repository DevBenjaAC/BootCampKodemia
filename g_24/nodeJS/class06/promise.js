/**
 * !Promesa Representa el resultado de una ejcucion asincrona
 *
 * Las promesas pasan por un estado:
 *  Pendiente -> Resuelta //Resolve
 *  Pendiente -> Rechazada //Rejected
 * !Un Objeto que representa el resultado de una ejecucion asincrona
 *
 * !Se crean: new promise
 */

new Promise((resolve, reject) => {
  if ("Todo cool") resolve("todo excelente");
  if ("hay un error") reject("paso algo");
});
//Resolve (es una funcion) al invocarla se cambiara el estado de la promesa a resolved
//Reject (es una funcion) al invocarla se cambiara el estado de la promesa a rejected

const myFirstPromise = new Promise((resolve, reject) => {
  // recibe un callback
  setTimeout(() => {
    let error = null;
    if (error) {
      reject("ocurrio algo");
    }
    resolve("Todo cool!! :D");
  }, 2000);
});
console.log(myFirstPromise);
/**
 * .then (() => {} ) //-> Maneja la promesa cuando haya sido exitosa
 *-Recibe un callback
 *-Regresa lo que pasa en la funcion resolve()

 *.catch (() => {} ) //-> Maneja la promesa cuando haya sido rechazada
 *-Recibe un callback
 *-Regresa lo que se pasa en la funcion reject()
 */

myFirstPromise
  .then((result) => {
    // resolve promise
    console.log("result", result);
  })
  .catch((err) => {
    // reject promise
    console.log("error:", err);
  });

/**
 * Otra forma promise:
 * -Wrapeando por una funcion
 *
 *  funciton algoAsincrono() {
 *  Regresa la promesa
 * }
 */

function algoAsincrono() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = null;
      if (error) {
        reject("Hubo un error");
      }
      resolve("Todo cool!! :D");
    }, 1000);
  });
}
algoAsincrono() //Regresa una promesa
  .then((result) => {
    console.log("result: ", result);
  }) //Exitosa
  .catch((error) => {
    console.log("error", error);
  }); // Rechazada

//Ejercicio: Hacer las compras
const cinMakePurchases = {
  name: "cyn Ruiz",
  atSuperMarket: false,
  paidPantry: false,
  atHome: false,
};

function goToSuperMarket(personGoToSuperMarket) {
  return new Promise((resolve, reject) => {
    console.log(`${personGoToSuperMarket} llendo al supermercado`);
    setTimeout(() => {
      personGoToSuperMarket.atSuperMarket = true;
      if (!personGoToSuperMarket.atSuperMarket) {
        reject(`${personGoToSuperMarket.name} No pudo llegar al supermercado`);
      }
      resolve(personGoToSuperMarket);
    }, 3000);
  });
}

// goToSuperMarket(cinMakePurchases)
//   .then((personAtTheSuperMarket) => {
//     console.log(`${personAtTheSuperMarket.name} Ya esta en el supermercado`);
//     console.log(personAtTheSuperMarket);
//     //
//     payThings(personAtTheSuperMarket)
//     .then(personaWithHisThings) =>{
//       console.log(`${personaWithHisThings.name} Ya pago su despensa`)
//       console.log(personaWithHisThings);

//       gotToHome(personaWithHisThings)
//       .then((personAtHome) =>
//       console.log(`${personAtHome.name} Ya esta en casa`))
//       console.log(personAtHome);
//     }
//     .catch((error) => {
//       console.log(error);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// function payThings(personToPay) {
//   return new Promise((resolve, reject) => {
//     console.log(`${personToPay.name} Esta haciendo fila para pagar`);
//     setTimeout(() => {
//       personToPay.paidPantry = true;
//       if (!personToPay.paidPantry) {
//         reject(`${personToPay.name} No pudo pagar`);
//       }
//       resolve(personToPay);
//     }, 2000);
//   });
// }

// function goToHome(personGoHome) {
//   return new Promise((resolve, reject) => {
//     console.log(`${personGoHome.name} Esta llendo a casa`);
//     setTimeout(() => {
//       personGoHome.atHome = true;
//       if (!personGoHome.atHome) {
//         reject(`${personGoHome.name} No pudo llegar a casa`);
//       }
//       resolve(personGoHome);
//     }, 3000);
//   });
// }

/**
 * !Encadenamiento de promesas:
 */

// goToSuperMarket(cinMakePurchases)
//   .then((personAtTheSuperMarket) => {
//     console.log(`${personAtTheSuperMarket.name} llego al super Mercado`);
//     console.log(personaAtTheSuperMarket);
//     return payThings(cinMakePurchases);
//   }) // Regresa otra promesa
//   .then((personaWithHisThings) => {
//     console.log(`${personaWithHisThings.name} Ya pago su despensa`);
//     console.log(personaWithHisThings);
//     return goToHome(personaWithHisThings);
//   }) // Regresa otra promesa
//   .then((personAtHome) => {
//     console.log(` ${personAtHome.name} ya esta en casa`);
//     console.log(personAtHome);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

//!ENCADENAMIENTO DE PROMESAS

//ASYNC & AWAIT
/**
 * ASYNC -> Marca una función como asincrona
 * AWAIT -> Espera el resultado de una promesa
 *
 *
 * !Condiciones:
 * Para usar AWAIT Necesitamos una funcion que Wrapeara (marcaremos) como asyncrona
 *  Donde Utilizo await necesitamos marcar la funcion que la contiene como asincrona
 * PUEDO MANEJARLAS CUANDO QUIERA MANEJAR PROMESAS
 * !-Las funciones marcadas como asincronas por defecto regresan una promesa
 * !Son funciones en las que tienes acceso dentro del callback
 * !Se puede usar alert o innertext dentro de async en FRONTEND
 */
console.log("con async await");

async function main() {
  const personAtTheSuperMarket = await goToSuperMarket(cinMakePurchases); // Regresa una promesa
  console.log(` ${personAtTheSuperMarket.name} ya llego al supermercado`);
  console.log(personAtTheSuperMarket);

  const personaWithHisThings = await payingThings(personAtTheSuperMarket);
  console.log(` ${personaWithHisThings.name} Ya pago su despensa`);
  console.log(personaWithHisThings);

  const personAtHome = await goToHome(personaWithHisThings);
  console.log(` ${personAtHome.name} ya esta en casa`);
  console.log(personaWithHisThings);
}

main()
  .then(() => {
    console.log("Todo cool");
  })
  .catch((err) => {
    console.error("Error: ", err);
  });

/**
 *  ! 1º Realizar el proceso de inscripción a kodemia con promesas
 * -Encadenamiento d epromesas
 *  async & await
 *
 * ! 2º A partir de archivo Json Hacer CRUD
 */

const fs = require("fs");
function updateKoderById(idKoder, newData) {
  const datFile = fs.promises
    .readFile("./koders.json", "utf-8") // Regresa una persona
    .then((data) => {
      //aqui ya tengo la data del archivo 
      console.log(data); //Aqui regresa un string
      const json = JSON.parse(data);
      console.log(json);

      const koderFound = json.koders.find((koder) => koder.id === idKoder);
      console.log('koderFound:', koderFound);
      const koderUpdated = {...koderFound, ...newData}
      console.log('koderUpdated:', koderUpdated);
      const koders = json.koders.filter((koder) => koder.id !=== idKoder);
      console.log('koder sin rafa:', koders);
      koders.push(koderUpdated);
      json.koders.push(koders);
      console.log('kodersActualizados');
      console.log(json.koders);
      fs.writeFile(./koders.json, JSON.stringify(json,null, 2));

      )});

    })
    .catch((err) => {
      console.error("Error: ", err);
    });
}

updateKoderById(1, newDataRafa)

//SpredOperator
const objetoFer = {
  name: 'Fernanda',
  lastName: 'Palacios',
}

const otherObject = {
  age: 26,
  gitHub: '@EveFer',
  lastName: 'Vera'
}

const newObject ={... objetoFer, ...otherObject}
  console.log(newObject);
