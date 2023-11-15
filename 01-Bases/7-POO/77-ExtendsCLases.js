/* 
  Extends Clases y Subclases "Herencia"

*/

class Persona {

  static _conteo = 0;

  static get conteo(){
    return Persona._conteo + ' instancias';
  }

  static mensaje(){
    console.log('soy un metodo statico');
  }

  nombre = '';
  codigo = '';
  comida = '';

  constructor(nombre, codigo){
    this.nombre = nombre;
    this.codigo = codigo;
    Persona._conteo++
  }

  //set establece un valor a una variable
  set setComida(comida) {
    this.comida = comida;
  }

  //get recupera el valor de la variable
  get getComida(){
    return `la comida favorita de ${this.nombre} es ${this.comida}`;
  }

  //Metodo sin argumentos
  quienSoy(){
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
  }

  otroMetodo(){
    console.log('Soy otro metodo y estoy llamando al metodo quien soy');
    this.quienSoy();
  }

}

/* 
  HACIENDO HERENCIA MEDIANTE LA PALABRA RESERVADA EXTENDS
  lo que se pretende es crear una clase heroe basada en las 
  mismas propiedades de la clase persona.

  para poder inicializar las propiedades que solo existen dentro de la
  clase Padre lo que se debe hacer es llamar el constructor de la clase 
  Persona dentro de la clase heroe, y para esto hacemos uso del metodo
  super(); el cual hace referencia a la clase que extiende directamente.
  de esta manera tendremos acceso a la referencia de las propiedades de 
  la clase Padre. De esta manera ya se puede solicitar los mismos argumentos
  desde la subclase Heroe que extiende de Persona.
*/

class Heroe extends Persona{
  clan = 'Sin clan';

  //captura y envio de los argumentos a la clase padre desde 
  //clase heroe.
  constructor(nombre, codigo){
    //primero el super
    super(nombre, codigo);
    //luego las propiedades de la misma clase
    this.clan = 'The Avengers';
  }

  //acceder a los metodos del padre
  quienSoy(){
    console.log(`Soy ${this.nombre} y me conocen como ${this.codigo}`);
    super.quienSoy();
  }
}

const spider = new Heroe('Peter Parker','SipiderMan');
spider.quienSoy();