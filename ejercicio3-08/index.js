'use strict'

let frase = 'vida solo hay una.';
let contadorPalabras = 0;
for (let i = 0; i < frase.length; i++) {
  if (frase[i] == ' ' || frase[i]=='.') {
    contadorPalabras++;
  }
}
alert(contadorPalabras)