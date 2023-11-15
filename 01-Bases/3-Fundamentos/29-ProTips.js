
const crearPersona = (nombre, apellido) => {
  return {nombre, apellido}
}

const persona = crearPersona('Leonardo', 'Ojeda');
console.log(persona);

/*
  Protips:
  en este caso podemos resumir la funcion de arriba de la siguiente manera
  a diferencia de casos anteriores con returns impicitos que devolvian una sola cosa
  aqui lo que se de sea es devolver varias cosas mediante un return implicito
  para ello: devolvemos un objeto entre parentecis y hace exactamente lo mismo
*/

const crearPersona2 = (nombre, apellido) => ({nombre, apellido})

const persona2 = crearPersona2('Leonardo', 'Ojeda');
console.log(persona2);



function imprimieArgumentos(){
  console.log(arguments);
}

imprimieArgumentos('hola', 'Leonardo', 23, true, 0.5);

/*
  Para aplicar la misma funcionalidad con un arrowFunction lo que se usa es el operador
  spread este hace una copia de cada argumento enviado a la funcion y se debe considerar
  que despues de ...args no puede ir ningun otro parametro porque eso arroja un error
  sin embargo podemos colocar argumentos antes del spread
*/

const imprimieArgumentos2 = (...args) => {
  return args;
}

//podemos hacer uso de la desestructuracion de arrays para controlar lo que nos tetorna la funcion
const [saludo, nombre, edad, vivo, velocidad] =  imprimieArgumentos2('hola', 'Leonardo', 23, true, 0.5);
console.log(saludo, nombre, edad, vivo, velocidad);

//desestructuracion de objetos
const {apellido} = crearPersona('Leonardo', 'Ojeda');
console.log(apellido);

/*
  Desestructuracion de argumentos, esto permite que podamos interactuar directamente
  con el objeto queenviamos como argumento a una funcion
*/

const leonardo = {
  apellido: 'Ojeda Bernal',
  edad: 27,
  ocupacion: 'Ingeniero en sistemas',
  hobbie: 'video juegos',
  vive: true
}

const imprimirPersona = ({apellido, edad, ocupacion, hobbie}) => {
  console.log('Desestructuración de argumentos')
  console.log(edad);
  console.log(apellido);
  console.log(ocupacion);
  console.log(hobbie)
}

imprimirPersona( leonardo );