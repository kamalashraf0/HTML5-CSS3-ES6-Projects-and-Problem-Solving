//Swaping Destruct 

// let value1 = 10 , value2 = 20;
//  [value2 , value1] = [value1 , value2]

//  console.log(`Value1 =${value1}  Value2 =${value2}`);





 /////////////////////////// /////////////////////////// ///////////////////////////



//rest parameter and spread operator


// function display(...Rarr) {
//     console.log(` Max = ${Math.max( ...Rarr)}`);
//     console.log(` Min = ${Math.min( ...Rarr)}`);
// }
// display(5,10,15,2,8,22)

 /////////////////////////// ///////////////////////////  ///////////////////////////


//Array API Methods

let fruits = ["apple", "strawberry", "banana", "orange","mango"];

console.log(fruits.map (e =>isNaN(e) ));   //a
console.log(fruits.map (e => e.startsWith('a')));   //b
console.log(fruits.filter (e => e.startsWith('b') || e.startsWith('s')));   //c
let D = fruits.map (e => `i like ${e}`)
console.log(D);   //d

let display = D.forEach(e => console.log(e))                        //e






