const path = require('path')
const express = require('express')
const hbs = require('hbs')
// console.log(__dirname) // gives directory name of the file
// console.log(path.join(__dirname, '..')) // one location up of our directory
console.log(path.join(__dirname, '../public'))
// console.log(__filename) // five complete directory location along with file name

// init our application
const app = express()

// EXPRESS PATHS CONFIG
// store our html pages in variable
const publicDirectoryPath = path.join(__dirname, '../public')
//view const path
const viewsPath = path.join(__dirname, '../templates/views')
// const partials path
const partialsPath = path.join(__dirname,'../templates/partials')
// SETUP HANDLEBARS AND VIEW LOCATION
app.set('view engine', 'hbs')
// custom views folder location
app.set('views', viewsPath)
// register our partials
hbs.registerPartials(partialsPath)


// to tell our app to use the static folder location for all our html pages
app.use(express.static(publicDirectoryPath))

// default routing : mywebsite.com : can also we removed as we provided static index.html in public 
// folder. so express knows to use that.
app.get('', (req, res) =>{
    //res.send('<h2>Hello Express!!!</h2>')
    res.render('index', {
        title :'weather app',
        name: 'satish singh'

    })
})

// about page routing : mywebsite.com/about
app.get('/about', (req, res) =>{
    // res.send('<h1> About Page </h1>')
    res.render('about', {
        title:"About Title",
        name: "Satish Kumar"
    })
})

// help page
app.get('/help', (req, res) =>{
    //res.send('Help Page')
    res.render('help', {
        message : 'Message sent from app.js',
        title : 'Title for Help Message',
        name : 'satish kumar'
    })
})

// weather page
app.get('/weather', (req, res) =>{
    res.send({
        location : 'Bihar',
        temperature : 30
    })
})

// listening on port 3000
app.listen(3000, () => {
    console.log(' server is up running at localhost:3000')
})


// to execute the application : node src/app.js
//