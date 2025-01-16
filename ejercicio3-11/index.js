'use strict';
let nums = [2, 3, 2, 3, 5];
let combinedIndices = 'Ascendente  Descendente\n';
for (let i = 0; i < nums.length; i++) {
    combinedIndices += i + '      ' + (nums.length - 1 - i) + '\n';
}
alert(combinedIndices);