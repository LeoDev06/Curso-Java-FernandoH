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