// Your code here
function mapToNegativize(array) {
    let negative = []
    array.forEach(element => {
        negative.push(element - (element * 2))
    });
    return negative
}

function mapToNoChange(array) {
    return array
}

function mapToDouble(array) {
    let double = []
    array.forEach(element => {
        double.push(element * 2)
    })
    return double
}

function mapToSquare(array) {
    let square = []
    array.forEach(element => {
        square.push(element ** 2)
    })
    return square
}

function reduceToTotal(array, start = 0) {
    let total = start
    array.forEach(element => {
        total += element
    })
    return total
}

function reduceToAllTrue(array) {
    let result = true
    array.forEach(element => {
        if (element == false) { return result = false }
    })
    return result
}

function reduceToAnyTrue(array) {
    let result = false
    array.forEach(element => {
        if (element == true) { return result = true }
    })
    return result
}