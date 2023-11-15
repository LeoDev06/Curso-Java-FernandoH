let a = 5;

if(a >= 10){
  console.log('A es igual o mayor a 10');
}else{
  console.log('a es menor a 10');
}

console.log('Fin de programa');

const hoy = new Date();
let dia = hoy.getDay();

console.log(hoy);
console.log(dia);

/*
  Diferencia entre = ; == ; ===
  = es una asignacion de un valor a una variable ejm: a = 5;
  == comparacion debil de una variable frente a un valor ejem: 5 == '5'; no importa el tipado
  === comparacion fuerte de una variable frente a un valor ejem 2 === 2; si importa el tipado
*/
if (dia === 0){
  console.log('Hoy es Domingo')
}else if (dia === 1){
  console.log('Hoy es Lunes')
}else if (dia === 2){
  console.log('Hoy es Martes')
}else if (dia === 3){
  console.log('Hoy es Miercoles')
}else if (dia === 4){
  console.log('Hoy es Jueves')
}else if (dia === 5){
  console.log('Hoy es Viernes')
}else if (dia === 6){
  console.log('Hoy es Sabado')
};


//Hacer lo mismo del caso anterior pero con objetos y sin usar
//condicional if else
const diaSemana = {
  0: 'domingo',
  1: 'lunes', 
  2: 'martes',
  3: 'miercoles',
  4: 'jueves',
  5: 'viernes',
  6: 'sabado'
}

console.log(`Hoy es el dia: ${diaSemana[dia]}`);


