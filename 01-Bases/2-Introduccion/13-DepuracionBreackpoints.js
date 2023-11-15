
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

/* 
  Para activar el breackpoint hay que oprimir al lado izquierdo del numero
  de la linea del codigo a Depurar, luego en la opcion de menu ejecutar, oprimimos
  iniciar depuracion, luego elejimos node.js entre las opciones y ya empezara a depurar el codigo
*/

/* 
  Otro aspecto importante es que en la terminal de vsCode tenemos el apartado 
  de consola de depuracion alli podremos obserbar todos los console.logs creados
*/