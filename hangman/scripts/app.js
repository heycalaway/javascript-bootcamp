const puzzleElement = document.querySelector('#puzzle')
const guessesElement = document.querySelector('#guesses')
let game

const render = () => {
    puzzleElement.innerHTML = ''
    guessesElement.textContent = game.statusMessage

    game.puzzle.split('').forEach((letter) => {
        const letterElement = document.createElement('span')
        letterElement.textContent = letter
        puzzleElement.appendChild(letterElement)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle(2)
    game = new Hangman(puzzle, 5)
    render()
}

startGame()
document.querySelector('#reset').addEventListener('click', startGame)

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    render()
})