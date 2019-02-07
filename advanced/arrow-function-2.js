// Can't use "arguments"
const add = () => {
    return arguments[0] + arguments[1]
}

console.log(add(11, 22, 33, 44));

// Can't use "this"
let car = {
    color: 'Red',
    getSummary: () => {
        return `The car is ${this.color}`
    }
}

// Can use "this"
car = {
    color: 'Red',
    getSummary() {
        return `The car is ${this.color}`
    }
}

console.log( car.getSummary() );