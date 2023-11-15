

/* 
  la declaracion de las funciones no se recomienda hacer como la siguiente 
  ya que si por error nombramos una variable de tipo var con el mismo nombre de la funcion
  con otro contenido como un estring o un numero, lo que hara es 
  sustituir la funcion por el valor de la variable perdiendo la referencia 
  a la funcion.
*/
function saludar(){
  console.log('Hola mundo');
}

//var saludar = 'remplazo';
saludar();

/* 
  Funcion anonima
  Por buenas practicas y en vista de evitar el error anterior una
  funcion anonima permite controlar que el nombre no sea re asignado a otra variable
*/
const saludar2 = function( nombre ) {
  console.log(`Hola ${nombre}`);
}

saludar2('leonardo');

/*
  lambdaFunction  o arrowFunction
  o funciones de flecha es una de las mas usadas dentro de javaScript
*/

const saludar3 = (nombre) => {
  console.log(`Hola de nuevo ${nombre}`);
}

saludar3('Leonardo');

const saludar4 = nombre => {
  console.log(`Hola por cuarta vez, ${nombre}`);
}

saludar4('Leonardo Ojeda');