const me = {
    name: 'EshwarAkhil',
    age: 25,
}

Object.defineProperty(me, 'name', {
    configurable: false,
});

// Object.defineProperty(me, 'name', {
//     configurable: true,
// });

// me.name = 'sandeep';

delete me['name'];

console.log('me', me)

console.log(Object.getOwnPropertyDescriptors(me));
