//const fs = require('fs')
const a = require('./utils')  // import the function utils
const notesModule = require('./notes')

//fs.writeFileSync('notes.txt', 'this file was created by NodeJS')  // writing to a file

// apppending to a file using appendFileSync
// fs.appendFileSync('note.txt', '\n This is appended message using appendFileSync function')

// const my_name = 'satish'
// console.log(my_name_1)

// const sum = a.add(2,10)
// const sub = a.minus(10,4)
// console.log(sum)
// console.log(sub)

// callig notes.js function

console.log(notesModule.getNotes())
