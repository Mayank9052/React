// Named function
function add(a, b) {
    return a + 10 + b;
}

console.log("add(10, 30) =", add(10, 30));         // 10 + 10 + 30 = 50
console.log("add(20) =", add(20));                 // 20 + 10 + undefined = NaN
console.log("add() =", add());                     // undefined + 10 + undefined = NaN
console.log("add(10, 'test') =", add(10, 'test')); // 10 + 10 + 'test' = '20test'
console.log("add('test', 10) =", add('test', 10)); // 'test' + 10 + 10 = 'test1010'

// Anonymous function
let add1 = function(a, b) {
    return a + b;
};
console.log("add1(5, 7) =", add1(5, 7)); // 12

// Arrow function
let add2 = (a, b) => {
    return a + b;
};
console.log("add2(3, 4) =", add2(3, 4)); // 7

// Object with various function types
const person = {
    name: 'Mayank',

    callfn: function() {
        console.log('\n[callfn] name =', this.name); // 'this' refers to person object
    },

    callfnAgain: function() {
        setTimeout(function() {
            console.log('[callfnAgain] name =', this.name); // 'this' refers to global or undefined
        }, 100);
    },

    callfnArrow: function() {
        setTimeout(() => {
            console.log('[callfnArrow] name =', this.name); // 'this' refers to person (lexical)
        }, 300);
    },

    callfnwithoutthis: () => {
        setTimeout(() => {
            let name = 'Mayank';
            console.log('[callfnwithoutthis] name =', name); // uses local variable
        }, 500);
    },
};

person.callfn();               // Logs: [callfn] name = Mayank
person.callfnAgain();          // Logs: [callfnAgain] name = undefined
person.callfnArrow();          // Logs: [callfnArrow] name = Mayank
person.callfnwithoutthis();    // Logs: [callfnwithoutthis] name = Mayank


// Function using rest operator (...array)
function add3(x, y, ...array) {
    let result = x + y;
    for (let num of array) {
        result = result + num;
    }
    return result;
}

let result = add3(1, 2, 3, 4, 5); // x = 1, y = 2, array = [3, 4, 5]
console.log('Result =', result); // Result = 15

