console.warn('for');

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Acuaman', 'Flash'];

for(let i=0; i < heroes.length; i++ ){
  console.log(heroes[i]);
}

console.warn('for in');
for(let i in heroes ){
  console.log(heroes[i]);
}


console.warn('for of');
/* El for of lo que hace es extraer mediante el iterador el
valor de cada posicion en el arreglo por cada iteracion
a diferencia del for in el iterador se nombra de la forma singular
del nombre original del arreglo */
for(let heroe of heroes ){
  console.log(heroe);
}
