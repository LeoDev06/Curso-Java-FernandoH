/*
  Set: establece un valor
  Get: obtiene el valor

  se declaran como un metodo pero se hace uso de la palabra
  reservada set o get, estos metodos se llaman de manera diferente
  y cada set y get responde a un unico argumento que sera el que
  este directamente relacionado con este ejem comida, pero se debe 
  tener en cuenta que el nombre del metodo set no puede ser igual 
  al nombre de la variable, esto crea un ciclo infinito la convencion 
  es colocar setComida 
*/

class Persona {

  nombre = '';
  codigo = '';
  comida = '';

  constructor(nombre, codigo){
    this.nombre = nombre;
    this.codigo = codigo;
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

