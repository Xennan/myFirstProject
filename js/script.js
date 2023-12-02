for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

// *
// **
// ***
// ****
// *****
// ******

let result = "";
const length = 12;
let prob = "          ";

for (let i = 1; i < length; i += 2) {
    result += prob;
    for (j = 0; j < i; j++) {
        result += "*";
    }
    result += "\n"
    
    prob = prob.slice(1);
}

console.log(result);