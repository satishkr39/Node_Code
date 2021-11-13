const fs = require('fs')
const { parse } = require('path/posix')
const { parsed } = require('yargs')
// javascript object notation 
const book = {
    title: 'Ego is my Enemy',
    author: 'Ryan Holiday'
}
// You can access object properties in two ways:


console.log(book.title) // accessing title of book object

// convert string/array/object object to JSON format
const bookJson = JSON.stringify(book)
console.log(bookJson)

// parsing JSON object using JSON.parse()
const parsedData = JSON.parse(bookJson)
console.log(parsedData.author)

// write to file
// fs.writeFileSync('1-json.json',bookJson)

// read a file
// const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer)
// console.log(dataBuffer.toString()) // convert dataBuffer to string
// const parseData = JSON.parse(dataBuffer.toString())
// console.log(parseData.author)

// change the propery of JS objects 
const readData = fs.readFileSync('1-json.json')
const parseData = JSON.parse(readData.toString())
console.log(parseData)
parseData.name = 'satish'
parseData.planet = 'Mercury'
console.log(parseData)
const stringJSON = JSON.stringify(parseData)
fs.writeFileSync('1-json.json', stringJSON)