'use strict';

const emptyArray = [];
const array = [1, 2, 3];

console.log(`Empty: ${size(emptyArray) === emptyArray.length}`)
console.log(`Loaded: ${size(array) === array.length}`)

// function size([ firstElement, ...rest ]) {
//     return firstElement === undefined ? 0 : 1 + size(rest);
// }

// stack
// size([1, 2, 3]) : 3
// 1 + size([2, 3]) : 1 + 2
// 1 + size([3]) : 1 + 1
// 1 + size([]) : 1 + 0
// 0


function size([ firstElement, ...rest ], count = 0) {
    return firstElement === undefined ? count : size(rest, count + 1);
}

// stack
// size([1, 2, 3], 0)
// size([2, 3], 1)
// size([3], 2)
// size([], 3) : 3
