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
    handler(argv){
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
    builder:{
        title:{
            describe: 'Enter title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        chalk.red(console.log('Removing notes'))
        notesModule.removeNotes(argv.title)
    }
})

// create list command
yargs.command({
    command : 'list',
    describe : 'list all notes',
    handler (){
        console.log(chalk.green('Listing all the notes'))
        notesModule.listNotes() // call the listNotes method
    }
})

// create read command
yargs.command({
    command : 'read',
    describe: 'reading the commands',
    builder:{
        title:{
            describe: 'Enter title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        console.log('Reading notes')
        notesModule.readNotes(argv.title)
    }
})



// using yargs module
yargs.parse() // to make the command line argument available to yars
// console.log(yargs.argv)  // node app.js --help ENTER : it will show the add in the commands section 



// GUIDE TO RUN PROGRAM
// to call add method : node app.js add --title="any title" --body="any message"
// TO CALL REMOVE METHOD : node app.js remove --title="TITLE"  
// TO CALL LIST NOTES : node app.js list
// TO CALL READ NOTES : node app.js read title="some title"