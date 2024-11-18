"use strict";


function amountOfPages(summary){
    let minus = 1,
        pages = 0,
        def = 10;
    
    while (summary > 0) {
        if (pages !== def-1) {    
            summary -= minus;
            pages++;
        } else {
            def *= 10;
            minus++;
            pages++;
        }
    }
    return pages;
}
console.log(amountOfPages(1095));




function amountOfPages2(summary){
    let res = '';
    for (let i = 1; i<=summary; i++) {
        res += i;
    }
    res = res.length;
    return res;
}

console.log(amountOfPages2(401));