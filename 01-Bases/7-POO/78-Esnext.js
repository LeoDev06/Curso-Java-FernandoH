/*
  Priopiedades privadas (aun no globalmente aceptado)
  # -> identificadoe privado
*/

class Rectangulo {
  //colocamos numeral para evitar que el valor calculado
  //pueda ser modificado 
  #area = 0;

  constructor(base, altura) {
    this.base = base;
    this.altura = altura;

    this.#area = base * altura;
  }
}

const rectangulo = new Rectangulo(10, 15);

// de esta manera evitamos que la propiedad calculada
// sea modificada desde cualquier parte del codigo
//rectangulo.#area = 300;
console.log(rectangulo);
