// TODO: Libreria externa que permite generar ids unicos
import {v4 as uuid} from 'uuid'

export class Todo {
  /**
   * Crea un Todo, es decir una tarea
   * @param {String} description 
   */

  constructor(description){
    this.id = uuid();
    this.done = false;
    this.createDate = new Date();
    this.description = description;
  }
}



