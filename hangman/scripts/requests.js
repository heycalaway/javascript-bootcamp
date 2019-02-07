// Synchronous Request
// -- App Will Wait for Request Completion
// -- Browser Can Lock Up While Waiting...
const getPuzzleSync = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '//puzzle.mead.io/puzzle', false)
    request.send()

    if (request.readyState === 4) {
        if (request.status === 200) {
            const data = JSON.parse(request.responseText)
            return data.puzzle
        } else {
            throw new Error('An error has occurred')
        }
    }
}

// Asynchronous Request
// -- App Can Continue While Requesting
// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4) {
//             if (e.target.status === 200) {
//                 const data = JSON.parse(e.target.responseText)
//                 resolve(data.puzzle)
//             } else {
//                 reject('An error has occurred')
//             }
//         }
//     })

//     request.open('GET', `//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// })

// const getPuzzle = (wordCount) => {
//     return fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('An error has occurred')
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }

const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle...')
    }
}