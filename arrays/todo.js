const todos = [
    {
        text: 'Walk the dog',
        completed: true
    },
    {
        text: 'Eat dinner',
        completed: false
    },
    {
        text: 'Do laundry',
        completed: false
    },
    {
        text: 'Do work',
        completed: true
    },
    {
        text: 'Exercise',
        completed: true
    }
]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

// deleteTodo(todos, 'Walk the dog')
// console.log( todos );

const getIncompleteTodos = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}
// console.log( getIncompleteTodos(todos) );

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (a.completed && !b.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log( todos );