let personaje = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    log: -118.089
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10800, 90265',
    ubicacion: 'Malibu, California'
  },
  'ultima-Pelicula':'Infinity War' 
};

console.log(personaje);
console.log('Nombre: '+ personaje['nombre'])
console.log('Edad: '+ personaje.edad);
console.log('Coordenadas '+ JSON.stringify(personaje.coords));
console.log('ubicacion: ' + personaje.direccion.ubicacion);

console.log('Numero de trajes: ' + personaje.trajes.length);

const x = 'vivo';
console.log('Esta vivo: '+ personaje[x]);

//para aceder a variables tipo string se hace de la siguiente manera
console.log('Ultima Pelicula: '+ personaje["ultima-Pelicula"]);

//MAS DETALLES

//Eliminar un elemento de nuestro objeto
delete personaje.edad;
console.log(personaje);

//Conbierte el objeto a un array de arrays
const entriesPares = Object.entries(personaje);

//Bloqueo del objeto para evitar anexarle mas
//propiedades y evita cambiar las propiedades ya asignadas
Object.freeze( personaje );

personaje.dinero = 1000000000;
personaje.vivo = true;
console.log(personaje);

//Conocer todas las propiedades de los objetos
const propiedades = Object.getOwnPropertyNames(personaje); 
const valores = Object.values(personaje);
console.log({propiedades, valores});

//mas info: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object