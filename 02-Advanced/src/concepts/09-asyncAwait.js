import { heroes } from "../data/heroes";

/**
 * para hacer uso del await debe estar siempre dentro
 * de una funcion asyncrona de otro modo no funciona
 * @param {HTMLDivElement} elementHtml 
 */

export const asyncAwaitComponent = async(elementHtml) => {

  const id1 = '5d86371fd55e2e2a30fe1cc3';
  const id2 = "5d86371fd55e2e2a30fe1ccb";

  try {
    const hero1 = await findHero( id1 ); // sin await devuelve una promesa
    const hero2 = await findHero( id2 ); // con await debuelve el objeto
  
    elementHtml.innerHTML = ` ${hero1.name} - ${hero2.name}`;
  } catch (error) {
    elementHtml.innerHTML = ` Hero with id ${ error } not found`;
  }
}

/**
 * Función que busca un heroe cuando recibe el parametro id 
 * @param {String} id 
 * @returns {Promise<String>} // retorna una promesa que resuelve un String
 */
const findHero = async(id) => {
  const hero = heroes.find(hero => hero.id === id);
  if(!hero)
    throw new Error(`Id: ${ id } not found`)
  return hero;
}