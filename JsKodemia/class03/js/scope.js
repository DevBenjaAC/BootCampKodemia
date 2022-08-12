function discoteca (edad){
  if (edad < 18) {
    return; //SALIDAS TEMPRANAS
  }else{
    console.log('que baile');
  }
}
discoteca(18);
discoteca(15);

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

let objeto = {  //PROGRAMACION DINAMICA TODO ES DINAMICO TODO SON OBJETOS
  saludar: function() {
    console.log('HOLA');
  }
}
objeto['saludar']();  //
objeto.saludar;

/**
 * js tiene callstack por dentro abajo de la falda
 * forma compacta de definir funciones, con ciertas caracteristicas desde sintaxis NO tiene palabra RESERVADA FUNCTION
 */
let persona = {
  saludar: function(){
    console.log(hola);
  }
}
let funcion = 'saludar';
objeto[funcion]();
