function findMatching(array, driverName) {
    let collection = []
    array.filter(function (name) {
        if (name.toLowerCase() === driverName.toLowerCase()) {
            collection.push(name)
        }
    })
    return collection
}

function fuzzyMatch(array, driverName) {
    let collection = []
    array.filter(function (name) {
        if (name.startsWith(driverName)) {
            collection.push(name)
        }
    })
    return collection
}

function matchName(array, driverName) {
    let collection = []
    array.filter(function (name) {
        if (name.name === driverName) {
            collection.push(name)
        }
    })
    return collection
}