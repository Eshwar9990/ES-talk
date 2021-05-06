function foo(num) {
    try {
        return foo((num || 0) + 1);
    } catch(e) {
        return num;
    }
}

console.log(foo())
