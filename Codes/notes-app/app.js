//const fs = require('fs')
const a = require('./utils')  // import the function utils
const notesModule = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')
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

// chalk module ususage
console.log(chalk.green('Success in GREEN'))
console.log(chalk.red('FAILURE IN RED'))
console.log(chalk.bold('IN BOLD COLOR'))
console.log(chalk.underline.bold('BOLD AND UNDERLINE'))

console.log('Hello world')


// getting inputs from command line args
console.log(process.argv) // print all command line arguments
console.log(process.argv[2]) // prints the 2nd item
console.log(process.argv[3]) // prints the 3rd item

// command to get ad
const command = process.argv[2]

if (command === 'add'){
    console.log('adding notes')
} else if (command === 'remove'){
    console.log('removing notes')
}


// using yargs module
console.log(yargs.argv)