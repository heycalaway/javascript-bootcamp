// const getLocation = (token) => {
//     return fetch(`http://ipinfo.io/json?token=${token}`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('An error has occurred')
//         }
//     }).then((data) => {
//         return data
//     })
// }

const getLocation = async (token) => {
    const response = await fetch(`http://ipinfo.io/json?token=${token}`)

    if (response.status === 200) {
        return await response.json()
    } else {
        throw new Error('An error has occurred')
    }
}