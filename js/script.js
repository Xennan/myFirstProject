"use strict";

const someString = 'This is some strange string';

function reverse(str) {
    let string = '';
    if (typeof(str) !== "string") {
        return 'Ошибка!';
    } else {
    for (let i = str.length - 1; i >= 0; i--) {
        string += str[i];
    }
    return string;    
    }
}
//решил, минут 20 понадобилось

const d = reverse(someString);
console.log(d);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';
//     if (arr.length === 0) {
//         return 'Нет доступных валют';
//     } else if (missingCurr in arr) {
//         str += 'Доступные валюты:\n';
//         arr = arr.filter((tae) => tae !== missingCurr)
//         arr.forEach((el) => str += `${el}\n`);
//         return str;
//     } else {
//         str += 'Доступные валюты:\n';
//         arr.forEach((el) => str += `${el}\n`);
//         return str;
//     }
// }

//мой способ но я не понял как убрать перенос в конце, и вообще не ясно почему и где было допущена логическая ошибка

let s = availableCurr(additionalCurrencies);
console.log(s);

function availableCurr(arr, missingCurr) {
    let str = '';
    if (arr.length === 0) {
        return 'Нет доступных валют';
    } else {
        str += "Доступные валюты:\n";
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === missingCurr) {
                continue;
            }
            str += `${arr[i]}\n`;
        }
    }
    return str;
}
//с божей помощью и подсматриванием в решение наконец решил, про проверку по обычному циклу и continue не додумался
// даже после нескольких проверок пришлось быстренько доделывать, но я смог, неплохая практика по моему