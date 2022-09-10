//generando un animal con una función constructora
function Animal(tieneOjos, ojos, corazon){  //parámetros -> carcterísticas que tendrá el animal
  this.tieneOjos = tieneOjos;
  this.ojos = ojos;
  this.corazon = corazon;
  this.color = 'verde';
  this.comer = (tipoComida) => {
      console.log(`Este animal come: ${tipoComida}`)
  }
}

const serpiente = new Animal(true, 2, true); //instancia
console.log(serpiente.ojos) //para ver una característica 
serpiente.comer('ratones')


const gato = new Animal(true, 2, true);
gato.comer('wiskas')



//oviparo seríia una extensión ya que tiene las misma carac del animal pero tienee una característica que lo hace dif de los otros animales (pone huevos)

function Oviparo(naceDeHuevo){
  this.naceDeHuevo = naceDeHuevo;
}

function Viviparo(naceDeHuevo){

}

//la clase nos indicará que clase de objeto es

class Animal{ //generaremos un nuevo objeto del cual se crearán instancias 
  constructor(tieneOjos, ojos, corazon){ //método constructor(palabra reservada para las clases) -> tendrá los datos q la función constructora tiene
      this.tieneOjos = tieneOjos;
      this.ojos = ojos;
      this.corazon = corazon;
  }
  comer(comida) {
      console.log(`Este animal come esto: ${comida}`) //así entiende la clase una función (no se necesita la sintaxis de arrow function)
  }
}

const perro = new Animal(true, 2, true) //instancia 
perro.comer('pedigree');

//para usar react front generar etiquetas html usar a partir de funciones método constructor 
//la herencia se escribe 

class Oviparo extends Animal{ //cuando extendemos una clase heredamos las propiedades y métodos de la clase padre (animal) extends-> palabra reservada q nos permite extender clases  
  constructor(naceDeHuevo){ //cuando generemos métoods a traves de clases necesitamos un csntructor
      super(true, 2, true); //obligatorio mandar llamar a la función q mandamos llamar cuando queremos extender un objeto, para asignarle valores a las caracteristicas del padre (animal)
      this.naceDeHuevo = naceDeHuevo;
  }
}

const ave = new Oviparo(true); //true es el argumento de naceDeHuevo 
console.log(ave);

const squirtle = new Oviparo(false);
console.log(squirtle);

// ...spredOperator
/**
 * Capitalcase -> Funciones constructoras- CON MAYUSCULA LA PRIMERA
 * Que es
 * para que sirve
 * como funciona
 * 
 * 
 * FORMS
 * 
 */
//OBJETI Y PROPTOTIPO
// objeto es un ojeto como tal 
// un prototipo es la base de un objeto