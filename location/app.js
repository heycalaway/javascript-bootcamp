getLocation('8c800a69caf013').then((location) => {
    console.log( `City: ${location.city}` )
    console.log( `Region: ${location.region}` )
    console.log( `Country: ${location.country}` )
}).catch((err) => {
    console.log( `Error: ${err}` )
})