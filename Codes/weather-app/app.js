// weather app
// make call to weatherstack.com
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
// process.argv[2] is to get the location from command line
geoCode.geoCode(address, (error, data) =>{
    // if user doesn't provide any location while executing the program 
    if (!address){
        return console.log('Please provide a location to search')
    }
    if(error){
        return console.log(error)
    }
    // callback chaining. calling a callback inside another callback
    forecast.forecast(data.latitude, data.longitude, (error, forecastData) => {
        if(error){
            return console.log('Error: ', error)
        }
        console.log('Location: ',forecastData.location.region)
        console.log('The temperature is : ', forecastData.current.temperature+" Degree Celcius")
    })
})

// command to get user input from command line arguments 
console.log('Location provided is : '+process.argv[2])
// console.log(process.argv.length)


// to execute the weather app
// node app.js location name hit enter
// to search for a location having more than 1 word use : node app.js "New York"    