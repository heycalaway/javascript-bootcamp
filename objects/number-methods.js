let number = 103.941;

// Fix Number Count to Right of Decimal
console.log( number.toFixed(2) );

// Round
console.log( Math.round(number) );

// Round Down
console.log( Math.floor(number) );

// Round Up
console.log( Math.ceil(number) );

// Random Range
let min = 10;
let max = 20;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log( randomNumber );

let makeGuess = function (guess) {
    let number = Math.floor(Math.random() * 5) + 1;
    return guess === number;
}

console.log( makeGuess(1) );