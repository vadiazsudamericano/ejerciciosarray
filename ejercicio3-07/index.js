'use strict';
let name = 'Sudamericano';
let contador = 0;

for (let i = 0; i < name.length; i++) {
    if (name[i] === 'a') {
        contador++;
    }
}

alert(contador);