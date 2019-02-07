// Notes (String Array)

// const notes = [
//     'Note 1',
//     'Note 2',
//     'Note 3'
// ]

// // Append New Item
// notes.push('Note 4');
// console.log( notes );

// // Remove Last Item
// notes.pop();
// console.log( notes );

// // Remove First Item
// notes.shift();
// console.log( notes );

// // Prepend New Item
// notes.unshift('Note 1');
// console.log( notes );

// // From notes[1] position, remove (1) item
// notes.splice(1, 1);
// console.log( notes );

// // From notes[1] position, remove (0) items, add (1) item
// notes.splice(1, 0, 'Note 2');
// console.log( notes );

// // forEach Looping
// notes.forEach(function (item, index) {
//     console.log( `note[${index}]: ${item}` );
// });

// // For Looping
// for (let count = 0; count <= 2; count++) {
//     console.log( count );
// }

// for (let index = 0; index < notes.length; index++) {
//     console.log( `note[${index}]: ${notes[index]}` );
// }

// console.log( notes.indexOf('Note 2') );


// Notes (Objects Array)

const notes = [
    {
        title: 'My next trip',
        body: 'I would like to go to Spain'
    },
    {
        title: 'Habits to work on',
        body: 'Exercise. Eating a bit better.'
    },
    {
        title: 'Office modification',
        body: 'Get a new seat'
    }
]

// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const findNote = function (notes, noteTitle) {
    return notes.find(function (note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}
// console.log( findNotes(notes, 'ne') );

// const note = findNote(notes, 'Office modification')
// console.log( note );

// const index = notes.findIndex(function (note, index) {
//     return note.title === 'Habits to work on'
// });

// console.log( index );

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes);