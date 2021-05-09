
addEventListener('message', ({ data }) => {
    // data[0] = 100;
    Atomics.store(data, 0, 100)

    postMessage('done');
});