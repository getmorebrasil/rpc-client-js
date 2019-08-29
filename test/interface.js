const too = require('./too')

module.exports = () => ({
    /* foo(number): Promise<number> */
    foo({ solteiro, name, idade }) {
        return Promise.resolve({ response: { name, solteiro, idade } });
    },
    /* bar(number): Promise<number> */
    bar({ string }) {
        return Promise.resolve({ response: string.toUpperCase() });
    },
    boo({ number }) {
        return Promise.resolve({ response: number * 2 });
    },
    too
})
