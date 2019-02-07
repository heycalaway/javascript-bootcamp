getCountry('US').then((country) => {
    console.log( `Country Name: ${country.name}` )
}).catch((err) => {
    console.log( `Error: ${err}` )
})