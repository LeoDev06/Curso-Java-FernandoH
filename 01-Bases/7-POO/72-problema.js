// Instanciando objetos en javaScript

function Persona(nombre, edad){
  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function(){
    console.log(`Nombre: ${this.nombre}  \nEdad: ${this.edad}`)
  }
}

/*
  Instanciando un objeto de tipo Persona mediante la palabra
  reservada new sin embargo, es una forma antigua que ya no se usa
  pero aun hay programas que instancian objetos de esta manera 
*/
const maria = new Persona('Maria', 18);
console.log(maria);

