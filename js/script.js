"use strict";

//To string

// 1)
console.log(typeof(String(null)));

// 2)
console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const frontSize = 26 + 'px';

//To number

// 1)
console.log(typeof(Number('32')));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt("15px", 10)));


let answ = +prompt("Hello", "");

// To boolean

// False...
// 0, "", null, undefined, NaN

// 1)
let switcher = null;

if (switcher) {
    console.log("Working");
}

switcher = 1;

if (switcher) {
    console.log("Working");
}

// 2)
console.log(typeof(Boolean('32')));

// 3)
console.log(typeof(!!"44444"));