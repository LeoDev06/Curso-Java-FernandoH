
/*
  Variables:
  Let: Permite declarar una variable limitando el alcanse al bloque (scope) donde se esta usando
  var: Permite declara una variable local o global en una funcion sin importar el ambito del bloque (scope) 
  Const: Permite declara una variable local donde su valor no cambia en donde se este usando
*/

let a = 30;
var b = 'Leonardo';
const c = 'hola ';

const saludo = c + b;

// console: objeto & log: metodo
console.log(`variable a = ${a}`);

console.log(saludo);

console.table({a, b, c});