/**
 * 
 * @param {HTMLDivElement} elementHtml 
 */

import { heroes } from "../data/heroes"


export const callbackHellComponent = (elementHtml) => {

  const id1 = '5d86371fd55e2e2a30fe1cc3';
  const id2 = "5d86371fd55e2e2a30fe1ccb";

  fineHeroe(id1, (error, hero1) => {

    // ? Manejo de errores en callbacks
    if(error){
      elementHtml.innerHTML = error;
      return;
    }

    fineHeroe(id2, (error, hero2) => {

      // ? Manejo de errores en callbacks
      if(error){
        elementHtml.innerHTML = error;
        return;
      }
  
      elementHtml.innerHTML = `${hero1.name} - ${hero2.name}`;
    });
  });
}

/**
 * Un callback es una funcion que recibe como argumento otra función 
 * @param {String} id 
 * @param {(error: String | Null, hero: Object) => void} callback 
 */
const fineHeroe = (id, callback) => {

  const heroe = heroes.find(hero => hero.id === id);

  // ? Manejo de errores en callbacks
  if(!heroe){
    callback(`Hero with id ${id} not found.`);
    return;
  }

  callback( null, heroe);

}