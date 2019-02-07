const square = (number) => number * number

const squareLong = (number) => {
    return number * number
}

console.log( square(5) );

const people = [{
    name: 'Jeff',
    age: 28
}, {
    name: 'Vikram',
    age: 31
}, {
    name: 'Jess',
    age: 22
}]

const under30 = people.filter((person) => person.age < 30)
const is22 = people.find((person) => person.age == 22)
console.log( is22 );