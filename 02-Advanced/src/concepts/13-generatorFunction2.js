/**
 * 
 * @param {HTMLDivElement} elementHtml 
 */


export const generatorFunction2Component = (elementHtml) => {

  const getId = idGenerator();
  console.log(getId.next());

  const button = document.createElement('button');
  button.innerText = `Click me`;
  elementHtml.append(button);

  const renderButton = () =>{
    const {value} = getId.next();
    button.innerText = `Click ${ value }`
  }

  button.addEventListener('click', () => renderButton());

}

function* idGenerator() {
  let currentId = 0;
  while(true){
    yield ++currentId;
  }
}