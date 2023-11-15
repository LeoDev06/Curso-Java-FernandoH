let juegos = ['MetalGears', 'Undecember', 'Valorant', 'Diablo'];

let primeraPosicion = juegos[0];
console.log(primeraPosicion);

let ultimaPosicion = juegos[juegos.length - 1];
console.log(ultimaPosicion);

juegos.forEach((elemento, indice, arreglo)=>{
  console.log({elemento, indice, arreglo});
});

//METODOS DE LOS ARREGLOS

//Metodo para incertar un elemento nuevo en el array PUSH
let nuevosjuegos = juegos.push('GearsOfWar');
console.log({nuevosjuegos, juegos});

//Metodo para añadir un nuevo elemento al principio del array unshift
nuevosjuegos = juegos.unshift('MedalOfHonor');
console.log({nuevosjuegos, juegos});

//Metodo para eliminar el ultimo elemento del array
let juegoBorrado = juegos.pop();
console.log({juegos, juegoBorrado});

console.log(juegos)
//Metodo para borrar un elemento en una pocision especifica splice
//(posicion / cuantos elementos eliminar desde esa posicion)
let posicionElemento = 2;
let resultado =  juegos.splice(posicionElemento, 1);
console.log({juegos, resultado});

//Metodo para buscar el indice de un elemento en particular 
//dentro de un arreglo con indexof
let metalGearsIndex = juegos.indexOf('MetalGears');
console.log(metalGearsIndex);