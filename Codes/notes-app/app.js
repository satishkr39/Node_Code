//const fs = require('fs')
const a = require('./utils')  // import the function utils
const notesModule = require('./notes')
const chalk = require('chalk')
const yargs = require('yargs')
const { appendFile } = require('fs')
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

// console.log(notesModule.getNotes())

// chalk module ususage
//console.log(chalk.green('Success in GREEN'))
//console.log(chalk.red('FAILURE IN RED'))
//console.log(chalk.bold('IN BOLD COLOR'))
//console.log(chalk.underline.bold('BOLD AND UNDERLINE'))

// console.log('Hello world')


// getting inputs from command line args
// console.log(process.argv) // print all command line arguments
// console.log(process.argv[2]) // prints the 2nd item
// console.log(process.argv[3]) // prints the 3rd item

// command to get ad
// const command = process.argv[2]

//if (command === 'add'){
//    console.log('adding notes')
//} else if (command === 'remove'){
//    console.log('removing notes')
//}

// we can use yargs command to define our custom command and it will call the respective version of that. 
// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder :{  // this for parameters that is required while calling the command
        title : {
            describe : 'Note title', // description of pararmeter
            demandOption : true, // whether it's mandatory or not
            type : 'string' // data type of parameter
        },
        body:{
            describe: 'Enter the body for notes',
            demandOption : true,
            type : 'string'
        }

    },
    handler : function(argv){
        console.log('Called Add Function')
        console.log('Title Passed is : ',argv.title)
        console.log('Body passed is : ', argv.body)
        notesModule.addNotes(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command : 'remove',
    describe : 'remove a note',
    handler : function(){
        console.log('Removing notes')
    }
})

// create list command
yargs.command({
    command : 'list',
    describe : 'list all notes',
    handler : function(){
        console.log('Listing all the notes')
    }
})

// create read command
yargs.command({
    command : 'read',
    describe: 'reading the commands',
    handler : function(){
        console.log('Reading notes')
    }
})


// using yargs module
yargs.parse() // to make the command line argument available to yars
// console.log(yargs.argv)  // node app.js --help ENTER : it will show the add in the commands section 