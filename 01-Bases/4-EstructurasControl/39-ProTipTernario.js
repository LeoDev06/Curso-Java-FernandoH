const elMayor = (a, b) => {
  return (a > b ) ? a : b;
}

console.log(elMayor(5, 10));

//Resumiendo
const elMayor2 = (a, b) => (a > b ) ? a : b;
console.log(elMayor2(15, 10));

const tieneMembresia = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares';
console.log(tieneMembresia(true));

const nota = 100;
const grado = nota >= 90 ? 'A+' :
              nota >= 80 ? 'A' :
              nota >= 70 ? 'B+' :
              nota >= 60 ? 'B' : 'C';

console.log({nota, grado});