// const myAge = 27
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.'
// console.log( message )

const myAge = 27
const showPage = () => {
    console.log( 'Showing the page' );
}

const showErrorPage = () => {
    console.log( 'Showing the error page' );
}

myAge >= 21 ? showPage() : showErrorPage()