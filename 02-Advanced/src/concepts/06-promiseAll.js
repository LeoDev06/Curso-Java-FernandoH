/**
 * 
 * @param {HTMLDivElement} elementHtml 
 */

import { heroes } from "../data/heroes"


export const promiseAllComponent = (elementHtml) => {

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

  /* 
    !Forma 3
    mientras las promesas no dependan una de la otra, 
    y sean independientes entre si, podemos hacer uso de
    Promise.all que resive un arreglo de promesas, como se
    espera debuelve un arreglo con la solucion de todas las
    promesas y mediante desestructuracion de arreglos podemos
    obtener por separado cada uno de los valores. Mientras que
    el catch puede ser unico para manejar los errores de cada
    promesa
  */
  Promise.all([
    findHero(id1),
    findHero(id2),
  ])
  .then(([hero1, hero2]) => renderTwoHero(hero1, hero2))
  .catch( renderError );
  
  /* 
    !FORMA 2
    declaramos esta varieble hero1 fuera del scope de la funcion
    con el fin de recuperar el valor que retorna el findHero
    con el id1, esto con el fin de poderlo enviar como argumento
    a la funcion renderTwoHero del segundo findHero

    let hero1;

    findHero(id1)
    .then((hero) =>{
      hero1 = hero;
      return findHero(id2);
    }).then((hero2) => {
      renderTwoHero(hero1, hero2);
    })
    .catch ( renderError ); 
 */


  /* 
   !Forma 1
    findHero(id1)
      .then( (hero1) => {

        findHero(id2)
          .then((hero2) =>{
            renderTwoHero(hero1, hero2);
          })
          .catch ( renderError )
      })
      .catch ( renderError ); 
  */
  
  
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