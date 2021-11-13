const fs = require('fs')
console.log('Inside Notes.js file')

function getNotes(){
    return "Your notes"
}

function addNotes(title, body){
    console.log('addNotes method called')
    const notes = loadNotes() // calling the loadNotes method
    notes.push({
        title: title,
        body: body
    })
    //console.log(notes)
    saveNotes(notes)
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