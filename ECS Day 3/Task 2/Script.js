


let handler = {
    set: function(target, property, value) {
        if (property === 'name') {
            if (typeof value !== 'string' || value.length !== 7) {
                throw new Error('The name property must be a string of exactly 7 characters.');
            }
        } else if (property === 'address') {
            if (typeof value !== 'string') {
                throw new Error('The address property must be a string.');
            }
        } else if (property === 'age') {
            if (typeof value !== 'number' || value < 25 || value > 60) {
                throw new Error('The age property must be a number between 25 and 60.');
            }
        }
        target[property] = value;
        return true;
    },
    get: function(target, property) {
        if (property in target) {
            return target[property];
        } else {
            throw new Error(`Property ${property} does not exist.`);
        }
    }
};

let dynamicObject = new Proxy({}, handler);





try {
    dynamicObject.name = 'ahmkled'; 
    dynamicObject.address = '123 Main St'; 
    dynamicObject.age = 30; 
    
    console.log(dynamicObject.name); 
    console.log(dynamicObject.address); 
    console.log(dynamicObject.age); 

    
} catch (error) {
    console.error(error.message);
}

try {
    dynamicObject.address = 123; 
} catch (error) {
    console.error(error.message);
}

try {
    dynamicObject.age = 20; 
} catch (error) {
    console.error(error.message);
}
