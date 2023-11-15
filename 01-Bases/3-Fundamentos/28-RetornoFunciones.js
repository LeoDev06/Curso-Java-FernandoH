//Retorno de funciones
/* 
  Por defecto todas las funciones devuelven undefine si no existe un retorno explicito 
  es impportante tenerlo en cuenta
*/

const saludar = function( nombre ){
  console.log(`Hola ${nombre} eres un carechimba`);
  return 1000;
}

const retornoSaludar = saludar('Constanza');
console.log(retornoSaludar);

//Ejemplos de retorno

const suma = function(a, b){
  return a+b;
}

let resp1 = suma(5, 6);
console.log(resp1)

const suma2 = (a, b) =>{
  return a + b;
}

let resp2 = suma2(7, 6);
console.log(resp2)

const suma3 = (a, b) => a+b;
let resp3 = suma3(2, 2);
console.log(resp3);

//ejercicio
function aleatorio(){
  return Math.random()
}

const ale1 = aleatorio();
console.log(ale1);

const aleatorio2 = () => Math.random();
console.log(aleatorio2());