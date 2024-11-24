'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);

// 1) с "use strict"; значиние будет undefined, но если его не будет то значением станет объект window

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// 2) Контекст у методов объекта это сам объект

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = human;
// }
// let ivan = new User('Ivan', 23);

// 3) this в конструкторах и классах - это новый экземпляр объекта

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(333));