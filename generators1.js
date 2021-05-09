/* const arr = [1, 2, 3, 4];

// console.log(arr.__proto__)

const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); */


function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const iterator = myGenerator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
