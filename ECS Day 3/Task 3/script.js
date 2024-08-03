let myObject = {
    name: 'Kamal',
    address: '123 Main St',
    age: 30,
    [Symbol.iterator]: function* () {
        for (let key of Object.keys(this)) {
                yield [key, this[key]];
        }
    }
};


for (let [key, value] of myObject) {
    console.log(`${key}: ${value}`);
}


