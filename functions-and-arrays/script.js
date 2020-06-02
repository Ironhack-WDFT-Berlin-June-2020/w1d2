// console.log('working');
// console.log(name);

// const name = 'jack';
/*
greetStudent();

// function declaration -> it get's hoisted
function greetStudent() {
    console.log('hello student');
}


greetStudentExpr();
// function expression
const greetStudentExpr = function () {
    console.log('hello student');
}
*/

// parameters 
function greet(name, greeting) {
    console.log(`${greeting} ${name}`);
}
const name = 'John';
// greet(name, 'Hello');

function add(a, b) {
    const sum = a + b;
    return sum;

}

function operation(a, operator, b) {
    // if you have only one return it can be on the same line without
    // {}
    if (operator === '+') return a + b;
    if (operator === '*') {
        return a * b;
    }
    if (operator === '/') {
        return a / b;
    } if (operator === '%') {
        return a % b;
    } if (operator === '**') {
        return a ** b;
    }
    return 'The operator is not valid.';
}


console.log(operation(2, '+', 3));


// arrow functions
const addOne = a => a + 1;

const sum = addOne(2);

console.log(sum); // -> 5

// arrays -> most common structure

let array = [];

let multiArray = [['a', 'b'], ['c', 'd'], ['e', 'f']];
// console.log(multiArray[0][0]);

// 
// console.table(array);
// console.log(array.length);


// array[0] = 1;
// array[5] = 2;
// adding elements to the end of the array
array.push('a');
array.push('b');
// console.log(array);
array.pop();
// pop removes the last element
// const removed = array.pop()
// console.log(removed);

array.unshift('g');
array.unshift('j');
// console.log(array);
array.shift();

// console.log(array);
const countries = ['Portugal', 'Bengladesh', 'England', 'Germany'];
// splice
countries.splice(1, 2, 'Spain', 'Belgium');
// console.log(countries);

// iterate over an array

// with a for loop
// for (let i = 0; i < countries.length; i++) {
//     console.log(countries[i]);
// }

//

// using forEach
// countries.forEach(function (country, idx) {
//     console.log(`${country} is at index ${idx}`);
// });

// function logCountry(country, idx) {
//     console.log(`${country} is at index ${idx}`);
// }
// countries.forEach(logCountry);

// for of loop
for (const country of countries) {
    console.log(country.length);
}