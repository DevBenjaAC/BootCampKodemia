//Declaracion de funcion
function holaKoder(name) {
  return 'hola amigos!!' + name
};

//Ejecucion de funcion

holaKoder('anne');


//function de rafa
function saludar(despedirme) {
  console.log('rafa esta saludando');
  despedirme()
};

saludar(() => {
  console.log('rafa se esta despidiendo');
});

//Callback normalmente son funciones anonimas

//Firma de un metodo: Es la forma en la que va a recibir la funcion los parametros
//Firma de un callback es el error y la data
