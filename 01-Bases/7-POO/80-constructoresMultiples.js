
class Persona{

  /* 
    Aplicamos desestructuracion de objetos en nuestro metodo
    estatico, el cual recibe un objeto con las propiedades de
    persona, esto con el fin de mantener la firma que utiliza
    el constructor de la clase (nombre, apellido , pais).
  */

  static porObjeto ({nombre, apellido, pais}){
    return new Persona(nombre, apellido, pais)
  }

  constructor(nombre, apellido, pais){
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo(){
    console.log(`Info: ${this.nombre} ${this.apellido}, ${this.pais}`);
  }
}

const nombre1 = 'Leonardo', 
      apellido1 = 'Ojeda', 
      pais1 = 'Colombia';

const leo = {
  nombre: 'Stiben Leonardo', 
  apellido: 'Ojeda Bernal', 
  pais: 'Colombia'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
persona1.getInfo();


//como estamos accediendo a un metodo static no se crea una instancia
//del objeto, simplemente se accede directamenta a la clase Persona y
//apuntamos al metodo porObjeto
const persona2 = Persona.porObjeto(leo);
persona2.getInfo();