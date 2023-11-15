/**
 * 
 * @param {HTMLDivElement} elementHtml 
 */


export const promiseRaceComponent = (elementHtml) => {

  elementHtml.innerHTML = '<h4>Loading...</h4>';

  const renderValue = (value) => {
    elementHtml.innerHTML = value;
  }

  // * Es identico al Promise.alll.
  // * Pero en este caso devuelve la primera promesa 
  // * en resolverse

  Promise.race([
    slowPromise(),
    mediumPromise(),
    fastPromise()
  ])
  .then( renderValue )
}

// * slowPromise es una funcion que regresa una promesa
const slowPromise = () => new Promise((resolve)=>{
  setTimeout(() => {
    resolve('SlowPromise');
  }, 2000)
})

const mediumPromise = () => new Promise((resolve)=>{
  setTimeout(() => {
    resolve('mediumPromise');
  }, 1500)
})

const fastPromise = () => new Promise((resolve)=>{
  setTimeout(() => {
    resolve('fastPromise');
  }, 1000)
})
