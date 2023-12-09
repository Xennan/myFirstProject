// Место для первой задачи
function sayHello(userName) {
    return `Привет, ${userName}!`
}

// Место для второй задачи
function returnNeighboringNumbers(number) {
    return [number-1,number,number+1]
}

// Место для третьей задачи
function getMathResult(a,b) {
    let c = a;
    let d = '';
    if (b <= 0 || typeof b !== "number") {
        return a
    }
    for (let i = 0; i < b; i++) {
        d += `${c}---`;
        c += a;
        if (i === b - 2) {
            d += c;
            return d
        }
    }
}

//лень всё переносить, так что просто скопировал с сайта