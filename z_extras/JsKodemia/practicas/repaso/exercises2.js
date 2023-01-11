/**

14.- generar una función que sume todos los números que están dentro de una lista de números, por ejemplo

	let suma = sumarElementos([1,2,3,4,5]); 
	console.log(suma) // 15


15.- generar una función que quite todos los números que sean mayores al numero 10 de una lista de números, por ejemplo

	let nuevoArreglo = limpiarArreglo([11,12,3,4,15,5,8,10,20,1,2]); 
	console.log(nuevoArreglo) // [3,4,5,8,10,1,2]


17.- generar una función para quitar un koder de la lista de koders

	let listaKoders = ['Hector', 'Manu', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 'Rodri', 'Rafa', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Xavy', 'Annie']; // variable global

	quitarKoder('Manu');

	// ['Hector', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 'Rodri', 'Rafa', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Xavy', 'Annie']; // variable global

	quitarKoder('Rafa');

	// ['Hector', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 'Rodri', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Xavy', 'Annie']; // variable global

	quitarKoder('Xavy');

	// ['Hector', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 'Rodri', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Annie']; // variable global

	quitarKoder('Fanny');

	// ['Hector', 'Jonathan', 'Fernando', 'Cintia', 'Rodri', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Annie']; // variable global
 */

  /**
   *  * 13.- generar una función que genere un arreglo a partir de una cadena de texto por ejemplo:
	let arreglo = generarArreglo('hola'); 
	console.log(arreglo) // ['h', 'o', 'l', 'a']
   */

  let generarArreglo = (palabra) => {
    for (let letra in palabra){
      console.log(letra)
    }
  };
  generarArreglo(palabra);

  /**
   * 16.- generar una función que imprima el numero de día de la semana según el día que reciba, por ejemplo 

	recibimos 'lunes' entonces imprimira 0 
	recibimos 'martes' entonces imprimira 1 
	recibimos 'miércoles' entonces imprimira 2 
	recibimos 'jueves' entonces imprimira 3 
	recibimos 'viernes' entonces imprimira 4
	recibimos 'sábado' entonces imprimira 5
	recibimos 'domingo' entonces imprimira 6  
   */
  let impresionDeDias = (dia)=> {
    if (dia == 'lunes'){
      console.log(0);
    }else if (dia== 'martes'){
      console.log(1);
    }else if(dia == 'miercoles'){
      console.log(2);
    }else if(dia == 'jueves'){
      console.log(3);
    }else if (dia == 'viernes'){
      console.log(4);
    }else if (dia == 'sabado'){
      console.log(5);
    }else if (dia == 'domingo'){
      console.log(6);
    }
  }
  impresionDeDias('jueves')