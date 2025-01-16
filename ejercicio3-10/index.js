'use strict';

let nums = [5, 10, 7, 15, 12];
let numMax = nums[0];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > numMax) {
    numMax = nums[i];
  }
}
alert("El número mayor es:", numMax);