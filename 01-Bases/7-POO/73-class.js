/*
  Constructor:
  Metodo que se va ejecutar en el momento en que se 
  crea una nueva instancia de la clase Persona
*/

class Persona {

  nombre = '';
  codigo = '';

  constructor(nombre, codigo){
    this.nombre = nombre;
    this.codigo = codigo;
  }

}

const spider = new Persona('Petter Parker', 'spiderMan');
const IronMan = new Persona('Tony Stark', 'IronMan');
console.log(spider, IronMan);