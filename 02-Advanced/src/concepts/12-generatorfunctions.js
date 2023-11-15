/**
 * 
 * @param {HTMLDivElement} elementHtml 
 */


export const generatorfunctionsComponent = (elementHtml) => {

  const myGenerator = myFirstGeneratorFunction();

  console.log(myGenerator.next()); // * devielve el primer valor del yield, done: en false
  console.log(myGenerator.next()); // * devielve el primer valor del yield, done: en false
  console.log(myGenerator.next()); // * devielve el primer valor del yield, done: en false
  console.log(myGenerator.next()); // * devielve el valor del return, done: en true
  console.log(myGenerator.next()); // * el done: True significa que ya no hay mas valores por retornar

}

function* myFirstGeneratorFunction () {
  
  yield 'primer valor';
  yield 'segundo valor';
  yield 'tercer valor';

  return 'ya no hay valores';
}