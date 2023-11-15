/*
  2C = Clubs
  2D = Diamonds
  2H = Hearts
  2S = Swords
*/

//Funcion anonima autoinvocadas pertenecientes al patron modulo

const blackJack = (() => {
  //activando el modo estricto
  'use strict'

  let deck = [];

  const tipos      = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

  let puntosJugadores =  [];

  //Referencias al html
  const btnNuevoJuego = document.querySelector('#btnNuevo'),
        btnPedir      = document.querySelector('#btnPedir'),
        btnDetener    = document.querySelector('#btnDetener');

  const cartasJugadores = document.querySelectorAll('.cartas'),
        small         = document.querySelectorAll('small');

  //inicializar el juego
  const inicializarJuego = function(numeroJugadores = 2){
    deck = crearDeck();
    puntosJugadores = [];

    for(let i = 0; i < numeroJugadores; i++){
      puntosJugadores.push(0);
    }

    small.forEach(puntaje => puntaje.innerText = 0);
    cartasJugadores.forEach( mazo => mazo.innerHTML = '');

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  }
  
  const crearDeck = () =>{
    deck=[];
    for(let i = 2; i <= 10; i++){
      for(let tipo of tipos){
        deck.push(i + tipo);
      }
    }

    for (const especial of especiales) {
      for(let tipo of tipos){
        deck.push(especial +tipo );
      }
    }

    //mediante la libreria de underscorejs usamos el metodo suffle
    //para poder barajar el maso de cartas y alterar el orden.
    return _.shuffle(deck);
  }

  const pedirCarta = () => {
    if(deck === 0){
      throw 'No hay cartas en el deck'
    }
    
    //saca la ultima carta del deck con la instruccion pop()
    return deck.pop();
  }

  //convierte el strig en numero
  const valorCarta = (carta) => {
    const valorEntero = carta.substring(0, carta.length - 1);
    // isNaN pregunta si no es un numero
    return (isNaN(valorEntero)) 
            ? (valorEntero === 'A') ? 11 : 10
            : valorEntero * 1 ;
  }

  //funcion que calcula los puntos de cada jugador
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno]= puntosJugadores[turno] + valorCarta(carta);
    small[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  }

  const crearCarta = ( carta, turno) => {
     //crear y mostrar carta en el DOM
    const imgCarta = document.createElement('img');
    imgCarta.src = `./Assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    cartasJugadores[turno].append( imgCarta );
  }

  //Logica de la computadora
  const turnoComputadora = (puntosMinimos) =>{
    let puntosComputadora = 0;

    do{
      const carta = pedirCarta();
      const computadora = puntosJugadores.length-1;
      puntosComputadora = acumularPuntos(carta, computadora);
      crearCarta(carta, computadora);

      if(puntosMinimos > 21) break;

    }while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    
    mensajeGanador();
    
  }

  //Mensaje Ganador o perdedor
  const mensajeGanador = () => {
    /* 
      PROBLEMA RENDERIZADO
      El probelma se presenta cuando ya existe un ganador aparece la alerta
      antes de ver la ultima jugada, para controlar este problema lo que hacemos
      es hacer uso de la funcion de javaScript setTimeout, permite ejecutar el collback
      despues de una milesimas de segundo. Esto permitira que se ejecute el alert 
      despues de la ultima jugada y no antes
    */

    const [puntosJugador, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
      if(puntosComputadora === puntosJugador){
        alert('Empate Técnico');
      }else if(puntosJugador > 21){
        alert('Computadora Gana');
      }else if(puntosComputadora > 21){
        alert('Has ganado');
      }else{
        alert('Computadora Gana');
      }
    }, 30);
  }

  //Eventos
  //BOTON PEDIR CARTA
  btnPedir.addEventListener('click', () => {
    /* como el querySelectorAll toma todos los tags del html = small
    como si fuera un array especificamos exactamente cual tag
    queremos editar en este caso editamos el primero. */
    const carta = pedirCarta();
    const puntosJugador = acumularPuntos(carta, 0);
    
    //crear y mostrar carta en el DOM
    crearCarta(carta, 0);

    if( puntosJugador > 21){
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    }else if(puntosJugador === 21){
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });

  //BOTON DETENER JUEGO
  btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0]);
  });

  //BOTON NUEVO JUEGO
  /* btnNuevoJuego.addEventListener('click', () => {
    inicializarJuego();
  }); */

  return {
    nuevoJuego: inicializarJuego
  }
})();



