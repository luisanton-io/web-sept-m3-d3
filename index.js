// ES6 Array Methods


// MUTATING methods
// push, splice, pop, shift

// NON Mutating Array Method - they DO NOT change the original array
// map, filter, reduce, find, sort

// MAP 

const numbers = [1, 2, 3, 4, 5]

const doubles = numbers.map(number => `<div>${number}</div>`).join('')

// console.log(numbers)
// console.log(doubles)

// function map(array, transformation) {
//     let transformed = []

//     for (let i = 0; i < numbers.length; i++) {
//         const number = numbers[i]
//         transformed.push(transformation(number))
//     }

//     return transformed
// }

// function transformation(number) {
//     return `<div>${number}</div>`
// }

// console.log(map(numbers, transformation))


// FILTER

const numbersToFilter = [0, 2, 5, 66, 70, 100000]

const filteredNumbers = numbersToFilter.filter(n => n < 10)

// console.log(filteredNumbers)

// function filter(array, callback) {

//     let filteredElements = []

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i]

//         if (callback(element)) {
//             filteredElements.push(element)
//         }
//     }

//     return filteredElements
// }

// function ifHigherThan10(number) {
//     return number > 10 // returns a boolean value which defines whether to keep or discard the element
// }

// console.log(filter(numbersToFilter, ifHigherThan10))

// REDUCE

// let sum = 0

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }

console.log(numbers)
// const sum = numbers.reduce((accumulator, currentValue) => {
//     console.log({ accumulator, currentValue })
//     return accumulator + currentValue
// }, 0)

const sum = numbers.reduce((a, c) => a + c, 0)
const max = numbers.reduce((a, c) => a > c ? a : c)
const min = numbers.reduce((a, c) => a < c ? a : c)

console.log({ sum, max, min })

// FIND
// Find is returning the first element of a filtered list.

console.log(numbersToFilter.find(n => n > 50))

// FIND INDEX
// Find is returning the index of the first element of a filtered list.

console.log(numbersToFilter.findIndex(n => n > 50))

