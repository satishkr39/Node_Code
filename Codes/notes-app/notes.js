const fs = require('fs')
const chalk = require('chalk')
console.log('Inside Notes.js file')

function getNotes(){
    return "Your notes"
}

function addNotes(title, body){
    console.log('addNotes method called')
    const notes = loadNotes() // calling the loadNotes method
    // check if duplicate titles alrady present then add to duplicateNotes[]
    const duplicateNotes = notes.filter(function(notes){
        return notes.title === title
    })

    // if not duplicates notes found
    if(duplicateNotes.length === 0){
         // method to add items to array is push
        notes.push({
        title: title,
        body: body
        })
       
        //console.log(notes)
        saveNotes(notes)
        console.log(chalk.green('New notes added'))
    }else{
        console.log(chalk.red('Note title taken!'))
    }

}

function saveNotes(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// defining the loadNotes method
function loadNotes(){
    try{
        console.log('Called LoadNotes Method')
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(error){
        return []
    }
}



// exporting the function
module.exports = {getNotes, addNotes}