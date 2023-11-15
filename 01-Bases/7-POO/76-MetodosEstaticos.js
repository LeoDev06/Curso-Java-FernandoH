/*
 Los metodos estaticos nos permite hacer uso de estos mismos
 sin necesidad de instanciar la clase contenedora,

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

const spider = new Persona('Petter Parker', 'spiderMan');
const IronMan = new Persona('Tony Stark', 'IronMan');
console.log(spider, IronMan);

/* spider.quienSoy();
IronMan.otroMetodo(); */

spider.setComida = 'Pie de cereza'
console.log(spider.getComida);
console.log('Conteo static: ', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();