/**
 * Js en la web
 * Node se trabaja para backend
 * INLINE
 * ARCHIVO EXTERNO
 * ARCHIVO EXTERNO TIPO MODULO
 *  SCRIPT-> se ejectura Snipet JS
 * 
 * DOM-> DOCUMENT OBJECT MODEL
 * La representacion de nuestra etiquetas HTML, en donde cada hoja es una etiqueta NODO
 * DOCUMENT-> Apartir de este nodo, podemos hacer cambios
 *  Almacena, es el punto de entrada a todo el arbol
 *  Almacena cualquier pagina web en forma de arbol de nodos y sirve como como 
 *  elemento de entrada
 * WINDOW-> La ventana que va a tener el DOM, Representa una ventana que contiene un arbol DOM,
 *  la propiedad docuemnt apunta al DOM que esta cargado en esa ventana.
 *  Representa la ventana en donde se esta ejecuntando el JS.
 * 
 * COMO obtener elementos del DOM
 * getElementById
 * getElementByName
 * getElementByClassName
 * querySelector
 * querySelectorAll
 * 
 * QUE SE HACE CON ELLOS-> 
 *  Cambiar el atributo
 *  Acceder a las propiedad
 *  Crear elementos del HTML
 *  Eliminar Elementos
 *  
 * 
 * HERENCIA CASCADA ESPECICIDAD
 */

const parrafos = document.getElementsByClassName('parrafo');
console.log(parrafos);

const div = document.getElementById('div1');
div.style.color= 'red';
console.log(div);

const div2 = document.getElementById('div2');

console.log(div2);

const segundoParrafo = document.querySelector('div > parrafo')
console.log(segundoParrafo);