
console.log( miNuevoNombre );

/*
  uno de los principales problemas de una varible declarada con var
  es que permite remplazar propiedades y objetos propios del objeto global window
  esto es grave genera problemas en la aplicacion
*/

alert(miNombre);

/* 
  En el navegador hay propiedades de window como lo son:
  window.outerWidth
  window.outerHeight
  estas propiedades calcula la dimencion anctual de la ventana
  por lo que si creamos variables con estos nombres y las declaramos como var
  alteraran el valor real de las propiedades window por las declaradas actualmente
  siendo una muy mala practica y un error monumental 
*/

var outerWidth = 12;
var outerHeight = 30;

/*
  si la pagina tiene por ejemplo 1200px outerWidth x 1080 outerHeight
  sin portar ahora tendran valores de 12 y 30 respectivamente aunque
  el navegador muestre los valores 1200x1080 el imprimira 12x30px
*/

var miNuevoNombre = 'Stiben';