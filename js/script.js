"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("Hello World");
console.log(num);

function calc(a,b) {
    return(a + b);
}

console.log(calc(4,3));
console.log(calc(15,22));
console.log(calc(333,222));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
};

logger();

const calc = (a,b) => { return a + b};
const aa = calc(40,22);
console.log(aa);