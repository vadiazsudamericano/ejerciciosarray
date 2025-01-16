'use strict';
let nums = [3, 2, 4, 1];
let sumMax = nums[0] + nums[1]; 
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        let sum = nums[i] + nums[j];
        if (sum > sumMax) {
            sumMax = sum;
        }
    }
}
alert(`El mayor es ${sumMax}`); 