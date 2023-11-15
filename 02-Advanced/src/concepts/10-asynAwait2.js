/**
 * optimizacion de una funcion asincrona no secuancial
 * @param {HTMLDivElement} elementHtml 
 */


export const asyncAwaitNotSecuentialsComponent = async(elementHtml) => {
  
  console.time('Start');
  /*
    ! se ejecuta mas lento el codigo si lo usamos de esta manera 
    const value1 = await slowPromise();
    const value2 = await mediumPromise();
    const value3 = await fastPromise();
  */

  //! se ejecuta mas rapido el codigo si lo usamos de esta manera
  const [value1, value2, value3] = await Promise.all([
  slowPromise(),
  mediumPromise(),
  fastPromise(),
  ]);

  elementHtml.innerHTML = `
    value1 = ${value1} <br/>
    value2 = ${value2} <br/>
    value3 = ${value3} <br/>
  `
  console.timeEnd('Start');
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