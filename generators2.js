function request(url) {
    return new Promise((resolve, reject) => {
        makeAjaxCall(url, (err, text) => {
            if (err) reject(err);
            else resolve(text);
        });
    });
}

function *myGenerator() {
    yield request('url1');
    yield request('url2');
}
