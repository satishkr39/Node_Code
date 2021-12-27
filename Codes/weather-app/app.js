// weather app
// make call to weatherstack.com
const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=a0363848e9a8e08c3c14df2366ec8adb&query=37.8267,-122.4233"

// setting json:true parse the data to true itself.
request({url: url, json:true}, (error, response) =>{
    if(error){
        console.log('Unable to connect ot weatherstack service!')
    }
    else if(response.body.error){
        console.log('Please specify proper location')
    }
    else{
        //const data = JSON.parse(response.body) // parase the JSON data
        console.log(response.body.current) // get the current info only
    }
   
})

// get geo-location from mapbox api
const urlGeoLocation = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2F0aXNoa3I2MzkiLCJhIjoiY2t4b3I1bWZwMDJrNDJwbzIxZjB6bXY3cCJ9.KR7UTWnMLZyPXXLd8mHuDg"
request({ url: urlGeoLocation, json:true }, (error, response) =>{
    if(error){
        console.log('Unable to access mapbox service!')
    }
    else if(response.body.features.length == 0){
        console.log('Unable to find location. Please search different one.')
    }
    else{
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
        //console.log(response.body.features[0])  // get the response body and then features
    }
    
})