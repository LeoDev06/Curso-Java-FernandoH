/*
  Son un objeto muy parecidos a una lista de informacion y se represanta 
  mediante llaves cuadradas, las pociciones de los objetos almacenados 
  dentro del arreglo siempre se cuentan desde la posicion cero en adelante
*/

/* 
  Array de 10 posiciones 
  const arreglo = new Array(10); 
*/

const videoJuegos = ['Mario 3', 'Megaman', 'Valorant'];
console.log(videoJuegos);
console.log('Elemento en la ultima posición: ' + videoJuegos[2]);

let arregloCosas = [
  27,
  'Leonardo',
  ['colombia','Cundinamarca', 'facatativa',[
    'Berlin', 'Acasias', 'Los Rosales']]
]

console.log('segundo elemento array principal: ' + arregloCosas[1]);
console.log('ultimo elemento array uno: ' + arregloCosas[2][2]);
console.log('ultimo elemento array dos: ' + arregloCosas[2][3][2]);