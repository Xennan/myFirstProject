const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
const length1 = 12;
let prob = "        ";
for (i = 1; i < length1; i += 2) {
    result += prob;
    for (j = 0; j <= i; j++) {
        result += "*";
    }
    prob.slice(1);
    result = "\n";
}
console.log(result);