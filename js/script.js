"use strict";

function getTimeFromMinutes(minutes) {
    if (typeof (minutes) === "string" || minutes < 0 || !Number.isInteger(minutes) || minutes > 600) {
        return "Ошибка, проверьте данные";
    } else  if (minutes <= 600) {
        let count = 0;
        while (minutes > 60) {
            count += 1;
            minutes -= 60;
        }
        
        if (minutes === 60) {
            count += 1;
            minutes -= 60;
        }

        if (count === 1) {
            return  `Это ${count} час и ${minutes} минут`;
        } else if (count === 2 || count === 3 || count === 4) {
            return  `Это ${count} часа и ${minutes} минут`;
        } else if (count === 5 || count === 6 || count === 7 || count === 8 || count === 9 || count === 10 || count === 0) {
            return  `Это ${count} часов и ${minutes} минут`;
        }

        
    }
}

console.log(getTimeFromMinutes(180));
console.log(getTimeFromMinutes(40));
console.log(getTimeFromMinutes(500));
console.log(getTimeFromMinutes(100));

function findMaxNumber(a, b, c, d) {
    if (typeof (a) !== "number" ||
        typeof (b) !== "number" ||
        typeof (c) !== "number" ||
        typeof (d) !== "number") {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}

console.log(findMaxNumber(1,7,6,0));