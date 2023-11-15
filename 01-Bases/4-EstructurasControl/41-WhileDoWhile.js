
const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
let i = 0;

/* 

  Forma comun de hacer un while para recorrer array
  while(i < carros.length ){
    console.log(carros[i]);
    i++;
  } 
*/

console.warn('Estructura ciclica while');
//Forma mas limpia de hacer un while para recorrer array
while( carros[i] ){
  console.log(carros[i]);
  i++;
}

console.warn('Estructura ciclica Do-while');
let j = 0;

do{

  console.log(carros[j]);
  j++;

}while(carros[j]);