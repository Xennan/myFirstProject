const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

// Пишем решение вот тут
const length = arr.length;
for (let i = 0; i < length; i++) {
    result[i] = arr[i];
}
console.log(result);

const data = [5, 10, 'Shopping', 20, 'Homework'];
const length2 = data.length;
for (let i = 0; i < length2; i++) {
    if (typeof i === "number") {
        data[i] *= 2;
    } else if (typeof i === "string") {
        data[i] = data[i] + "-done";
    }
}

console.log(data);