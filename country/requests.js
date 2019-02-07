// const getCountry = (countryCode) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('An error has occurred')
//         }
//     }).then((data) => {
//         return data.find((country) => country.alpha2Code === countryCode)
//     })
// }

const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')
    
    if (response.status === 200) {
        const data =  response.json()
        data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('An error has occurred')
    }
}