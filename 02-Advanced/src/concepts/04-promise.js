/**
 * 
 * @param {HTMLDivElement} elementHtml 
 */

import { heroes } from "../data/heroes"


export const promiseComponent = (elementHtml) => {

  const renderHero = (hero) => {
    elementHtml.innerHTML = hero.name;
  }

  const renderError = (error) => {
    elementHtml.innerHTML = `
      <h4>${error}</h4>
    `;
  }

  // *Usando la promesa
  const id1 = '5d86371f25a058e5b1c8a65e';

  findHero(id1)
    // *con el Then recuperamos el resolve
    .then(superHero =>  renderHero(superHero))
    // *Con el catch recuperamos el reject
    .catch ( error => renderError(error));

  /* 
    Una forma mas limpia y resumida de escribir lo anterior seria:

    findHero(id1)
      .then( renderHero )
      .catch( renderError );

    en este caso como la variable superHero solo existe con el fin 
    de ser enviada como argumento a la funcion renderHero ya que es 
    lo que nos devuelve la promesa findHero, podemos simplemente usar
    la funcion por refernecia, ya que al ser la misma cantidad de 
    variables respecto a los argumentos que resive la funcion, se puede 
    resumir el codigo, y funciona exactamente igual que como cuando se 
    envia las variables como argumento de la función

  */

}


/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = (id) => {
  // *Cuando se reduelva: resolve
  // *Cuando no se resuelva: reject
  return new Promise((resolve, reject)=>{
    const hero = heroes.find( hero => hero.id === id);
    if(hero){
      resolve( hero );
      return;
    }else{
      reject(`The hero with id ${id} not found`);
    }
  });

  
}