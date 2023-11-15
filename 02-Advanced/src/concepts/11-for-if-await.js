/**
 * 
 * @param {HTMLDivElement} elementHtml 
 */

import { heroes } from "../data/heroes";


export const forIfAwaitComponent = async(elementHtml) => {

  const id ='5d86371f97c29d020f1e1f6d';
  const herosIds = heroes.map(hero => hero.id);

  const heroPromise = getHeroesAsync(herosIds);

  for await (const hero of heroPromise){
    elementHtml.innerHTML += ` ${hero.name} <br/>`
  }

  if (await getHeroAsync(id)){
    elementHtml.innerHTML = `Si existe el heroe 😊`;
    return;
  }
  
  elementHtml.innerHTML = `No existe el heroe 😥`;
}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
  const heroPromises = [];

  heroIds.forEach( id => {
      heroPromises.push( getHeroAsync(id)  );
  });

  return heroPromises;
}

const getHeroAsync = async(id) => {

  await new Promise(( resolve ) => {
      setTimeout(() => resolve(), 1000)
  });

  return heroes.find( hero => hero.id === id );
}