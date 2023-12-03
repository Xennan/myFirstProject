st = 5;
while (st <= 10) {
    console.log(st++);
}

for (let i = 20; i > 12; i--) {
    console.log(i);
}

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let h = 2;
while (h < 16) {
    if (h % 2 !== 0) {
        console.log(h);
    }
    h++;
}

const arrayOfNumbers = [];
    for (let i = 0; i <= 5; i++) {
        arrayOfNumbers[i] = i + 5;
    }
console.log(arrayOfNumbers);