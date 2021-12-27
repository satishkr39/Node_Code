const fs = require('fs')
const chalk = require('chalk')
console.log('Inside Notes.js file')


// addNotes function
const addNotes = (title, body) => {
    console.log('addNotes method called')
    const notes = loadNotes() // calling the loadNotes method
    // check if duplicate titles alrady present then add to duplicateNotes[]
    const duplicateNotes = notes.filter((notes)=>notes.title === title)
    // const duplicateNotes = notes.filter(function(notes){
    //     return notes.title === title  // match the new title give by user with existing title
    // })

    // if not duplicates notes found
    if(duplicateNotes.length === 0){
         // method to add items to array is push
        notes.push({
        title: title,
        body: body
        })
       
        //console.log(notes)
        saveNotes(notes)
        console.log(chalk.green.bgGreen('New notes added')) 
    }else{
        console.log(chalk.red.bgRed('Note title taken!'))
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

// remove notes function
const removeNotes = (title) => {
    console.log('Remove notes called')
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(notes){
        return notes.title !== title
    })
    // console.log(chalk.red('removing note with title : ', getNote))
    if(notes.length ==  notesToKeep.length){
        console.log(chalk.white.bgRed('no notes found to remove'))
    }else{
        console.log(chalk.red.bgGreen('removing notes'))
        saveNotes(notesToKeep)
    }
}


const listNotes = () =>{
    //console.log("list notes method called")
    allNotes = loadNotes()
    //console.log(JSON.stringify(allNotes))
    for(let x in allNotes){
        console.log(+x+": Title is : "+allNotes[x].title)
    }
}

// read notes function 
readNotes = (titleToSearch) =>{
    console.log("read notes method called")
    allNotes = loadNotes()  // get all the notes
    // console.log(allNotes)
    // console.log(titleToSearch)
    notesToFind = allNotes.find((notes)=>{
        // console.log(titleToSearch, notes.title)
        return notes.title == titleToSearch;
    });
    // console.log(notesToFind)
    if(notesToFind){
        // console.log(notesToFind) // return 1 itme JSON object
        console.log(chalk.green("notes found"))
        console.log("BODY: "+notesToFind.body)
    }
    else{
        console.log(chalk.red("no notes found"))
    }
}

// exporting the function
module.exports = {addNotes, removeNotes, listNotes, readNotes}