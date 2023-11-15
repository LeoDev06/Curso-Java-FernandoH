console.warn('Asignaciones con operadores');
const soyUndefined =  undefined;
const soyNull =  null;
const soyFalse =  false;

const a1 = true && 'Hola mundo' && 150;
const a2 = false && 'Hola mundo' && 150;
const a3 = 'Hola' && ' mundo' && soyFalse;

const a4 = true || 'Hola mundo' || 150;
const a5 = false || 'Hola mundo' || 150;
const a6 = soyNull || soyUndefined ||soyFalse;

console.warn('Asignaciones con &&');
console.log(a1);
console.log(a2);
console.log(a3);

console.warn('Asignaciones con or');
console.log(a4);
console.log(a5);
console.log(a6);