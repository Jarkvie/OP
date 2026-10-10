'use strict' 

function average(value_1,value_2) {
    return (value_1+value_2)/2;
}

function square(value){
    return value*value;
}

function cube(value) {
    return value * value *value;
}

function calculate() {
    const result = [];
    for(let i = 0;i<10;i++) {
        const cubeValue = cube(i);
        const squareValue = square(i);

        const averageValue = average(cubeValue,squareValue);
        result[i] = averageValue;
    }
    return result;
}

console.log(calculate());