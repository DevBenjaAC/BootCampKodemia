const fs = require('fs');

//
fs.writeFile('koders.txt', 'hola koders desde fs',(error) =>{
  if (error){
    console.log('ocurrio un error: ' + error);
    return
  }
  console.log('se ha creado el Archivo!! 🔥');
} );