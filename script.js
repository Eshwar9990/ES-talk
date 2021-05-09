const worker = new Worker('worker.js');

const sab = new SharedArrayBuffer(1024);

const array = new Int32Array(sab);

const obj = {
    name: 'eshwar',
    age: 25
}

worker.addEventListener('message', ({ data }) => {
    console.log('Msg from worker1: ', data);
    console.log('Main holds: ', Atomics.load(array, 0));
});

worker.postMessage(array)
