/*
  Los parametros por valor y por referencia se diferencian en que
  los parametros por valor son las variables de tipo primitovo y 
  los parametros por referencia son los objetos  
*/

let a = 10;
let b = a;
a = 30;

console.log({a , b})


/*
  cuando colocamos los tres puntos en una variable sirve para
  separar todas las propiedades de un objeto y es conocido como
  el operador spread

  //Esta es la solucion para romper la referencia
  let juan = {nombre: 'Juan'};
  let ana = {...juan};
  ana.nombre = 'Ana';
*/

let juan = {nombre: 'Juan'};
let ana = juan;
ana.nombre = 'Ana';

console.log({juan , ana});

/* 
 cuando colocamos los tres puntos en el argumento de una funcion
 este operador es conocido como el operador rest el cual une todos 
 los argumentos en una sola variable y lo transforma como un arreglo 
 
 //Esta es la solucion para romper la referencia
  const cambiaNombre = (...persona) => {
    persona.nombre = 'Tony';
    return persona;
  }
 */
const cambiaNombre = (persona) => {
  persona.nombre = 'Tony';
  return persona;
}

let peter = {nombre: 'Peter'};
let Tony = cambiaNombre(peter);
console.log({peter, Tony});

//Rompiendo la referencia en los arreglos
/*
  Lo que se desea evitar es que la referencia cambie erroneamente
  el valor de nuestra variable original  y al igual que en los
  anteriores casos se desea romper la referencia  
*/
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.log({frutas, otrasFrutas})