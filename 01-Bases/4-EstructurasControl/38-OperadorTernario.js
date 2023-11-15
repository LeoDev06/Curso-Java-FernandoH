/* 
  Entrar a un sitio web, para consultar si esta abierto hoy
  Dias de la semana abrimos a las 11,
  fines de semana abrimos a las 9

*/

const diaActual = 0;
const horaActual = 10;

let horaApertura;
let mensaje;

/* if(diaActual === 0 || diaActual === 6){
  console.log('Fin de semana');
  horaApertura = 9;
}else{
  console.log('Dia entre semana');
  horaApertura = 11;
}

if(horaActual >= horaApertura){
  mensaje = 'Esta abierto';
}else{
  mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}am`;
} */


//RESUMIENDO EL CODIGO CON OPERADOR TERNARIO
horaApertura = ([0, 6].includes(diaActual)) ? 9 : 11;
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}am`;
console.log({horaApertura, mensaje});