let variableGlobal = 15;

function saludar(){
  //scopeLocal
  let variableLocal = 10;
  console.log(variableGlobal, variableLocal); //la variable global entra en todas las funciones pero la local solo en su funcion
  function adios(){
    console.log(variableGlobal, variableLocal);
  }
  adios();
}
saludar();

let arrowFunction =() => { // que son las arrowFunction y sus diferencias con las normales --> HomeWork

}

/**
 * js tiene callstack por dentro abajo de la falda
 */