const p = new Promise((resolve, reject) => {
    let randomNumber = Math.random();
    if (randomNumber > 0.5) {
        resolve("We'll return to office soon");
    } else {
        reject("No. We're never coming back to office anymore");
    }
});

