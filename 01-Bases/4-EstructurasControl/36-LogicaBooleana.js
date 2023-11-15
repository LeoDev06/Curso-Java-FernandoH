const regresaTrue = function () {
  console.log('RegresaTrue');
  return true;
}

const regresaFalse = function () {
  console.log('Regresa False');
  return false;
}

console.warn('Negación');
console.log(true);
console.log('Negacion de true ->  ' +!true);
console.log('Negacion de false ->  ' +!false);

console.warn('Negacion de funciones booleanas');
console.log( 'Negacion de una función true ->  ' + !regresaTrue() );
console.log( 'Negacion de una función false ->  ' + !regresaFalse() );

// El operador AND regresa true si todas las condiciones son verdaderos
console.warn('And'); 
console.log(true && true);
console.log(true && false);

console.warn('AND en evaluacion de funciones');
console.log( regresaFalse() && regresaTrue()); // false
console.log( regresaTrue() && regresaFalse()); // false

// El operador or regresa falso cuando las condiciones son falsas
console.warn('or');
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(regresaTrue() || regresaFalse()); //true