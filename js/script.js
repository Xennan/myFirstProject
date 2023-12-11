"use strict";

function calculateVolumeAndArea(ribLength) {
    if (ribLength !== "" && ribLength > 0 && typeof ribLength !== "string" && ribLength % 1 === 0) {
        let scope = ribLength * ribLength * ribLength;
        let side = (ribLength * ribLength) * 6;
        console.log(`Объем куба: ${scope}, площадь всей поверхности: ${side}`);
    } else {
        console.log("При вычислении произошла ошибка");
    }
}

calculateVolumeAndArea(15);

// console.log(8 / 4);

function getCoupeNumber(userCompartment) {
    if (typeof userCompartment === "string" || Number.isInteger(userCompartment) || userCompartment < 0) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if (userCompartment <= 0 || userCompartment > 36) {
        return "Таких мест в вагоне не существует";
    } else {
        return Math.ceil(userCompartment / 4);
    }
}

console.log(getCoupeNumber(2));