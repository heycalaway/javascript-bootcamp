// Multiple Arguments
let add = function (a, b) {
    return a + b;
}

let result = add(10, 1);
console.log( result );

// Default Arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} – Score: ${score}`;
}

let scoreText = getScoreText();
console.log( scoreText );

let name = 'Jeff';
console.log( `Hey, my name is ${name}!` );