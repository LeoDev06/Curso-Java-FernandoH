/**
 * 
 * @param {HTMLDivElement} elementHtml 
 */

import { heroes } from "../data/heroes"


export const promiseHellComponent = (elementHtml) => {

  const renderHero = (hero) => {
    elementHtml.innerHTML = hero.name;
  }
  
  const renderTwoHero = (hero1, hero2) => {
    elementHtml.innerHTML = `
      <h4>${hero1.name}</h4>
      <h4>${hero2.name}</h4>
    `;
  }

  const renderError = (error) => {
    elementHtml.innerHTML = `
      <h4>${error}</h4>
    `;
  }

  // *Usando la promesa
  const id1 = '5d86371f25a058e5b1c8a65e';
  const id2 = '5d86371f2343e37870b91ef1';
  
  // !Promise Hell
  findHero(id1)
    .then( (hero1) => {

      findHero(id2)
        .then((hero2) =>{
          renderTwoHero(hero1, hero2);
        })
        .catch ( renderError )
    })
    .catch ( renderError );

}


/**
 * Función que busca un heroe por el id
 * @param {String} id 
 * @returns {Promise<Object>}
**/

const findHero = (id) => {

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