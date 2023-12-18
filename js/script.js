"use strict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = `Семья состоит из:`;
    if (arr.length === 0) {
        return 'Семья пуста';
    } else {
        for (let i in arr) {
            str += ` ${arr[i]}`;
        }
    }
    return str;
}
const b = showFamily(family);
console.log(b);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => console.log(city.toLowerCase()))
}

standardizeStrings(favoriteCities);

const a = ['a','s','d','f','g','h','j'];

console.log(a.length);
console.log(a[6]);

const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));
