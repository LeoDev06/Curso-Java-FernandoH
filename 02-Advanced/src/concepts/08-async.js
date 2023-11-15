import {heroes} from '../data/heroes'
/**
 * Función asincrona que trabaja igual que una Promise
 * @param {HTMLDivElement} elementHtml 
 */


export const asyncComponent = (elementHtml) => {

  const id =  "5d86371f233c9f2425f16916";

  findHero( id )
  .then(({name}) => {
    elementHtml.innerHTML = name
  })
  .catch((error) => {
    elementHtml.innerHTML = `Id: ${id} not found`
  })
}

/**
 * Función que busca un heroe cuando recibe el parametro id 
 * @param {String} id 
 * @returns {Promise<String>} // retorna una promesa que resuelve un String
 */
const findHero = async(id) => {
  const hero = heroes.find(hero => hero.id === id);
  return hero;
}