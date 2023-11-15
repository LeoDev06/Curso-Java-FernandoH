/*
  Metodos:
  los metodos se suelen crear por buenas practicas debajo
  del constructor de la clase
*/

class Persona {

  nombre = '';
  codigo = '';
  comida = '';

  constructor(nombre, codigo){
    this.nombre = nombre;
    this.codigo = codigo;
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

spider.quienSoy();
IronMan.otroMetodo();