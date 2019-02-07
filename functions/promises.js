// Callback
// -- Runs twice if called twice
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2)
        } else {
            callback('NUmber must be provided')
        }
    }, 2000)
}

// Callback Hell
getDataCallback((err, data) => {
    if (err) {
        console.log( err )
    } else {
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log( 'err' )
            } else {
                console.log( data )
            }
        })
    }
})


// Promise
// -- Does not run twice if THEN twice
// -- Does two things based on one run
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
})

// Promise Chaining
getDataPromise(2).then((data) => {
    return getDataPromise(data)
}).then((data) => {
    console.log( data )
}).catch((err) => {
    console.log( err )
})