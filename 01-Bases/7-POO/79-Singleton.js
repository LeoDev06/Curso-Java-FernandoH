/*
  Singleton
  Es una instancia unica de la clase que presisamente
  regresa siempre la misma instancia
*/

class Singleton {

  static instancia; // devuelve undefined
  nombre ='';
  
  constructor(nombre = ''){
    /*
      a = undefine;
      !a = true
      !!a = false

      por lo anterior preguntamos si ya existe una instancia
      entonces retuorneme la instancia ya existente
    */

    if(!!Singleton.instancia){
      return Singleton.instancia;
    }
    
    //si no existe una instancia entonces cree una 
    Singleton.instancia = this;
    this.nombre = nombre;
  }
}

/*   
  como ya existe una primera instancia no importa cuantas nuevas intancias
  se creen de la clase siempre va a devolver la primer instancia creada ya
  que apunta al mismo espacio en memoria 
*/
const instancia1 = new Singleton('IronMan');
const instancia2 = new Singleton('BatMan');

console.log(instancia1); // Devuelve IronMan
console.log(instancia2); // Devuelve IronMan